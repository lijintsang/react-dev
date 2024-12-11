import styles from './index.less';
import { Button } from 'antd';
import Info from '@/assets/images/eye.png';
import IconFont from '@/components/IconFont';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <Button type="link" onClick={() => navigate('/homeFirst')}>
          homeFirst
        </Button>
        <p>
          <img src={Info} alt="" />
        </p>
        <p>
          <Button
            onClick={() => {
              console.log('111    ');
            }}
            size="small"
          >
            按钮
          </Button>
        </p>
        <p>
          <IconFont type="icon-coffe" />
        </p>
      </div>
      {/* 渲染子路由 */}
      <Outlet />
    </div>
  );
};

export default Home;
