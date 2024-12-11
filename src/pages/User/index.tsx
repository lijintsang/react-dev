import React from 'react';
import styles from './index.less';
import { Outlet } from 'react-router-dom';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const User: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className={styles.text}>
          <p>userFirst</p>
        </div>
        <Button type="link" onClick={() => navigate('/user/userFirst')}>
          userFirst
        </Button>
      </div>
      {/* 渲染子路由 */}
      <Outlet />
    </>
  );
};

export default User;
