# 코코이찌방야 프로젝트 배포 가이드

이 프로젝트는 React(Vite)로 만들어졌기 때문에, **전체 폴더를 그대로 서버에 올리면 작동하지 않습니다.** (브라우저는 `.jsx` 파일을 해석할 수 없기 때문입니다.)

반드시 **'빌드(Build)'** 과정을 거쳐서 나온 **최종 결과물 폴더(`dist`)** 만 서버에 올려야 합니다.

## 1. 빌드하기 (최종 결과물 생성)

터미널에서 아래 명령어를 실행하면 배포용 파일이 생성됩니다.
(이미 제가 방금 실행해서 `dist` 폴더가 만들어져 있습니다!)

```bash
npm run build
```

이 명령어가 완료되면 프로젝트 폴더 안에 **`dist`** 라는 새로운 폴더가 생깁니다.

---

## 2. 서버에 올릴 파일

**`dist` 폴더 안에 있는 모든 파일**을 웹 서버의 루트 경로(예: `public_html/` 또는 `www/`)에 업로드하세요.

**업로드할 파일 목록 예시:**
- `index.html` (가장 중요)
- `assets/` (최적화된 자바스크립트 및 CSS)
- `images/` (이미지 폴더)
- `vite.svg` 등 기타 파일

> ❌ `src`, `node_modules`, `package.json` 같은 폴더는 올리지 마세요.
> ✅ 오직 **`dist` 폴더 내부의 내용물**만 올리면 됩니다.

---

## 3. 웹 서버 설정 (중요: SPA 설정)

이 사이트는 페이지 이동을 자바스크립트가 처리하는 **SPA(Single Page Application)** 입니다.
따라서 사용자가 `/menu` 주소로 직접 접속했을 때, 서버가 `index.html`을 보여주지 않고 `404 Not Found` 에러를 낼 수 있습니다.

이를 방지하기 위해 **서버 설정**이 필요합니다.

### A. 일반 웹 호스팅 (Apache 사용 시)
`dist` 폴더 안에 `.htaccess` 파일을 만들고 아래 내용을 넣어서 같이 업로드하세요.

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### B. Nginx 사용 시
Nginx 설정 파일(`nginx.conf`)에서 `location /` 블록에 아래 내용을 추가하세요.

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### C. Vercel / Netlify 배포 시
이런 최신 호스팅 서비스는 별도 설정 없이 자동으로 처리해주거나, 간단한 설정만으로 배포가 가능합니다. 가장 추천하는 방식입니다.
