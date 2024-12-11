import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layout';
import homeRoutes from './pages/home'; // 导入 Home 页面路由配置
import userRoutes from './pages/user'; // 导入 User 页面路由配置

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />, // 使用公共布局
    children: [
      ...homeRoutes, // 添加 Home 路由
      ...userRoutes, // 添加 User 路由
    ],
  },
];

export default routes;
