import { Suspense } from 'react';
import { HashRouter as Router, useRoutes } from 'react-router-dom';
import routes from '@/routes'; // 导入集中管理的路由配置

const App = () => {
  // 动态设置 basename
  const basename = process.env.NODE_ENV === 'production' ? '/react-dev' : '/';
  console.error('11    ', process.env.NODE_ENV);

  const AppRoutes = () => {
    // 使用集中管理的路由
    return useRoutes(routes);
  };

  return (
    <Router basename={basename}>
      <Suspense fallback={<div>加载中...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
