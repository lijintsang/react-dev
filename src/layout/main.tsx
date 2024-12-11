import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div>
      {/* 公共头部 */}
      <header>
        <Header></Header>
      </header>

      {/* 页面主体 */}
      <main style={{ padding: '20px' }}>
        {/* 渲染子路由 */}
        <Outlet />
      </main>

      {/* 公共尾部 */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
