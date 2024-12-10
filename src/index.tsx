import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@/context/ThemeContext';
import './index.less';

// 创建根节点
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 渲染应用
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
