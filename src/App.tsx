import React, { Suspense } from 'react';
// import styles from './App.less';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 懒加载页面组件
const Home = React.lazy(() => import('@/pages/Home'));
const User = React.lazy(() => import('@/pages/User'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>加载中...</div>}>
        <Routes>
          {/* 首页 */}
          <Route path="/" element={<Home />} />
          {/* 个人中心页面 */}
          <Route path="/user" element={<User />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
