/**
 * ========================================
 * heroVisualService.js - 메인 비주얼 관리 API 서비스
 * ========================================
 * Firebase Firestore 및 Storage를 사용한 메인 히어로 비주얼 관리
 */

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    where,
    Timestamp
} from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from 'firebase/storage';
import { db, storage } from '../config/firebaseConfig';

const COLLECTION_NAME = 'hero_visuals';

/**
 * 메인 비주얼 서비스 클래스
 */
class HeroVisualService {
    /**
     * 모든 메인 비주얼 가져오기
     * @param {boolean} activeOnly - 활성화된 비주얼만 가져올지 여부
     * @returns {Promise<Array>} 비주얼 배열
     */
    async getAllVisuals(activeOnly = false) {
        try {
            // 복합 인덱스 없이 작동하도록 단순 쿼리만 사용
            const q = query(
                collection(db, COLLECTION_NAME),
                orderBy('displayOrder', 'asc')
            );

            const querySnapshot = await getDocs(q);

            let visuals = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate?.()?.toISOString(),
                updatedAt: doc.data().updatedAt?.toDate?.()?.toISOString()
            }));

            // 클라이언트 측에서 활성화 필터링 (복합 인덱스 불필요)
            if (activeOnly) {
                visuals = visuals.filter(visual => visual.isActive === true);
            }

            return visuals;
        } catch (error) {
            console.error('비주얼 불러오기 실패:', error);
            throw error;
        }
    }

    /**
     * 특정 비주얼 가져오기
     * @param {string} id - 비주얼 ID
     * @returns {Promise<Object>} 비주얼 객체
     */
    async getVisualById(id) {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                throw new Error('비주얼을 찾을 수 없습니다.');
            }

            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
                updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
            };
        } catch (error) {
            console.error('비주얼 조회 실패:', error);
            throw error;
        }
    }

    /**
     * 파일 업로드 (이미지 또는 비디오)
     * @param {File} file - 업로드할 파일
     * @param {string} type - 파일 타입 ('image' 또는 'video')
     * @returns {Promise<string>} 업로드된 파일의 다운로드 URL
     */
    async uploadFile(file, type) {
        try {
            // 파일 확장자 검증
            const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
            const validVideoTypes = ['video/mp4'];

            if (type === 'image' && !validImageTypes.includes(file.type)) {
                throw new Error('이미지는 JPG 또는 PNG 형식만 가능합니다.');
            }

            if (type === 'video' && !validVideoTypes.includes(file.type)) {
                throw new Error('비디오는 MP4 형식만 가능합니다.');
            }

            // 파일명 생성 (타임스탬프 + 원본 파일명)
            const timestamp = Date.now();
            const fileName = `${timestamp}_${file.name}`;
            const storageRef = ref(storage, `hero_visuals/${type}s/${fileName}`);

            // 파일 업로드
            const snapshot = await uploadBytes(storageRef, file);

            // 다운로드 URL 가져오기
            const downloadURL = await getDownloadURL(snapshot.ref);

            return downloadURL;
        } catch (error) {
            console.error('파일 업로드 실패:', error);
            throw error;
        }
    }

    /**
     * 유튜브 URL에서 임베드 URL 추출
     * @param {string} youtubeUrl - 유튜브 URL
     * @returns {string} 유튜브 임베드 URL
     */
    getYoutubeEmbedUrl(youtubeUrl) {
        try {
            // URL에서 비디오 ID 추출
            let videoId = '';

            // 일반 URL: https://www.youtube.com/watch?v=VIDEO_ID
            if (youtubeUrl.includes('watch?v=')) {
                videoId = youtubeUrl.split('watch?v=')[1].split('&')[0];
            }
            // 짧은 URL: https://youtu.be/VIDEO_ID
            else if (youtubeUrl.includes('youtu.be/')) {
                videoId = youtubeUrl.split('youtu.be/')[1].split('?')[0];
            }
            // 임베드 URL: https://www.youtube.com/embed/VIDEO_ID
            else if (youtubeUrl.includes('embed/')) {
                videoId = youtubeUrl.split('embed/')[1].split('?')[0];
            }

            if (!videoId) {
                throw new Error('유효하지 않은 유튜브 URL입니다.');
            }

            return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
        } catch (error) {
            console.error('유튜브 URL 변환 실패:', error);
            throw error;
        }
    }

    /**
     * 새 비주얼 생성
     * @param {Object} visualData - 비주얼 데이터
     * @param {File} file - 업로드할 파일 (이미지/비디오인 경우)
     * @returns {Promise<Object>} 생성된 비주얼 객체
     */
    async createVisual(visualData, file = null) {
        try {
            let mediaUrl = '';

            // 파일 업로드 (이미지 또는 비디오)
            if (file && (visualData.type === 'image' || visualData.type === 'video')) {
                mediaUrl = await this.uploadFile(file, visualData.type);
            }
            // 유튜브 URL 처리
            else if (visualData.type === 'youtube' && visualData.youtubeUrl) {
                mediaUrl = this.getYoutubeEmbedUrl(visualData.youtubeUrl);
            }

            // Firestore에 저장할 데이터
            const newVisual = {
                type: visualData.type, // 'image', 'video', 'youtube'
                title: visualData.title || '',
                subtitle: visualData.subtitle || '',
                description: visualData.description || '',
                mediaUrl: mediaUrl,
                overlayContent: {
                    text: visualData.overlayText || '',
                    buttonText: visualData.buttonText || '',
                    buttonLink: visualData.buttonLink || ''
                },
                displayOrder: visualData.displayOrder ?? 0,
                isActive: visualData.isActive ?? true,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now()
            };

            const docRef = await addDoc(collection(db, COLLECTION_NAME), newVisual);

            return {
                id: docRef.id,
                ...newVisual,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
        } catch (error) {
            console.error('비주얼 생성 실패:', error);
            throw error;
        }
    }

    /**
     * 비주얼 수정
     * @param {string} id - 비주얼 ID
     * @param {Object} updatedData - 수정할 데이터
     * @param {File} file - 새로 업로드할 파일 (선택사항)
     * @returns {Promise<Object>} 수정된 비주얼 객체
     */
    async updateVisual(id, updatedData, file = null) {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            let updateObj = { ...updatedData };

            // 새 파일 업로드가 있는 경우
            if (file) {
                const mediaUrl = await this.uploadFile(file, updatedData.type);
                updateObj.mediaUrl = mediaUrl;
            }
            // 유튜브 URL 변경이 있는 경우
            else if (updatedData.type === 'youtube' && updatedData.youtubeUrl) {
                updateObj.mediaUrl = this.getYoutubeEmbedUrl(updatedData.youtubeUrl);
            }

            // overlayContent 업데이트
            if (updatedData.overlayText !== undefined ||
                updatedData.buttonText !== undefined ||
                updatedData.buttonLink !== undefined) {
                updateObj.overlayContent = {
                    text: updatedData.overlayText || '',
                    buttonText: updatedData.buttonText || '',
                    buttonLink: updatedData.buttonLink || ''
                };
            }

            // 불필요한 필드 제거
            delete updateObj.overlayText;
            delete updateObj.buttonText;
            delete updateObj.buttonLink;
            delete updateObj.youtubeUrl;

            updateObj.updatedAt = Timestamp.now();

            await updateDoc(docRef, updateObj);

            const docSnap = await getDoc(docRef);
            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
                updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
            };
        } catch (error) {
            console.error('비주얼 수정 실패:', error);
            throw error;
        }
    }

    /**
     * 비주얼 삭제
     * @param {string} id - 비주얼 ID
     * @returns {Promise<Object>} 삭제 결과
     */
    async deleteVisual(id) {
        try {
            // Storage에서 파일 삭제는 생략 (관리 편의성)
            // 필요시 mediaUrl에서 파일 경로 추출하여 삭제 가능

            await deleteDoc(doc(db, COLLECTION_NAME, id));
            return { success: true };
        } catch (error) {
            console.error('비주얼 삭제 실패:', error);
            throw error;
        }
    }

    /**
     * 비주얼 활성화/비활성화 토글
     * @param {string} id - 비주얼 ID
     * @param {boolean} isActive - 활성화 상태
     * @returns {Promise<Object>} 수정된 비주얼 객체
     */
    async toggleActive(id, isActive) {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await updateDoc(docRef, {
                isActive: isActive,
                updatedAt: Timestamp.now()
            });

            const docSnap = await getDoc(docRef);
            return {
                id: docSnap.id,
                ...docSnap.data(),
                createdAt: docSnap.data().createdAt?.toDate?.()?.toISOString(),
                updatedAt: docSnap.data().updatedAt?.toDate?.()?.toISOString()
            };
        } catch (error) {
            console.error('활성화 상태 변경 실패:', error);
            throw error;
        }
    }
}

export default new HeroVisualService();
