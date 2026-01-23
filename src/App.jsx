/**
 * ========================================
 * App.jsx - 메인 애플리케이션 컴포넌트
 * ========================================
 * React Router를 사용한 전체 페이지 라우팅 관리
 */

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import CurrySimulator from './pages/CurrySimulator';
import StorePage from './pages/StorePage';
import BrandPage from './pages/BrandPage';
import FranchisePage from './pages/FranchisePage';
import NoticePage from './pages/NoticePage';
import FAQPage from './pages/FAQPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminNoticePage from './pages/AdminNoticePage';
import AdminStorePage from './pages/AdminStorePage';
import AdminMenuPage from './pages/AdminMenuPage';
import ScrollToTop from './components/common/ScrollToTop';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {/* 헤더: 관리자 페이지 제외 */}
      {!isAdminPage && <Header />}

      {/* 페이지 라우팅 */}
      <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 메뉴 페이지 */}
          <Route path="/menu" element={<MenuPage />} />

          {/* 나만의 카레 시뮬레이터 */}
          <Route path="/simulator" element={<CurrySimulator />} />

          {/* 매장 찾기 */}
          <Route path="/store" element={<StorePage />} />

          {/* 브랜드 소개 */}
          <Route path="/brand" element={<BrandPage />} />

          {/* 창업 안내 */}
          <Route path="/franchise" element={<FranchisePage />} />

          {/* 공지사항 */}
          <Route path="/notice" element={<NoticePage />} />

          {/* FAQ */}
          <Route path="/faq" element={<FAQPage />} />

          {/* 관리자 페이지 */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/notice" element={<AdminNoticePage />} />
          <Route path="/admin/store" element={<AdminStorePage />} />
          <Route path="/admin/menu" element={<AdminMenuPage />} />
        </Routes>

      {/* 푸터: 관리자 페이지 제외 */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
