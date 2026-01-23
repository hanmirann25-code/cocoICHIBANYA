/**
 * ========================================
 * StoreMap.jsx - 매장 지도 컴포넌트
 * ========================================
 * OpenStreetMap + Leaflet.js 사용 (API 키 불필요)
 */

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet 기본 마커 아이콘 설정 (버그 수정)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const StoreMap = ({ stores, selectedStore, onStoreSelect }) => {
  // 지도 중심 좌표 (선택된 매장 또는 서울 기본)
  const center = selectedStore 
    ? [selectedStore.lat, selectedStore.lng]
    : [37.5665, 126.9780]; // 서울 시청

  const zoom = selectedStore ? 15 : 11;

  return (
    <MapWrapper>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        key={`${center[0]}-${center[1]}-${zoom}`} // 중심 변경 시 리렌더
      >
        {/* 지도 타일 레이어 (OpenStreetMap) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 매장 마커들 */}
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.lat, store.lng]}
            eventHandlers={{
              click: () => onStoreSelect(store)
            }}
          >
            <Popup>
              <PopupContent>
                <PopupTitle>{store.name}</PopupTitle>
                <PopupInfo>📍 {store.address}</PopupInfo>
                <PopupInfo>📞 {store.phone}</PopupInfo>
                <PopupInfo>🕐 {store.hours}</PopupInfo>
              </PopupContent>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* 지도 안내 */}
      <MapLegend>
        <LegendTitle>🗺️ 지도 사용법</LegendTitle>
        <LegendItem>• 마커를 클릭하면 매장 정보를 볼 수 있습니다</LegendItem>
        <LegendItem>• 마우스 휠로 확대/축소</LegendItem>
        <LegendItem>• 드래그로 이동</LegendItem>
      </MapLegend>
    </MapWrapper>
  );
};

// ========================================
// Styled Components
// ========================================

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);

  .leaflet-container {
    background: #f8f9fa;
  }
`;

const MapLegend = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  z-index: 1000;
  max-width: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LegendTitle = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`;

const LegendItem = styled.div`
  font-size: 0.75rem;
  color: var(--color-gray);
  margin-bottom: 0.25rem;
`;

// Popup 스타일
const PopupContent = styled.div`
  min-width: 200px;
`;

const PopupTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const PopupInfo = styled.p`
  font-size: 0.875rem;
  color: var(--color-dark);
  margin-bottom: 0.25rem;
`;

export default StoreMap;
