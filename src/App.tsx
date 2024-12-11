import { Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '@/routes'; // 导入集中管理的路由配置

const App = () => {
  const AppRoutes = () => {
    // 使用集中管理的路由
    return useRoutes(routes);
  };

  const a = {
    a: 1,
  };

  return (
    <Router>
      <Suspense fallback={<div>加载中...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
