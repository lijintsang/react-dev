import React from 'react';
import styles from './index.less';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Button type="link" onClick={() => navigate('/')}>
        index
      </Button>
      <Button type="link" onClick={() => navigate('/user')}>
        user
      </Button>
      <ThemeToggle />
    </div>
  );
};

export default Header;
