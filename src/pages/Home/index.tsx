import styles from './index.less';
import { Button, Flex } from 'antd';
import Info from '@/assets/images/eye.png';
import ThemeToggle from '@/components/ThemeToggle';
import IconFont from '@/components/IconFont';

const Home = () => {
  return (
    <div className={styles.text}>
      <p>home</p>
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
        <ThemeToggle />
      </p>
      <p>
        <IconFont type="icon-coffe" />
      </p>
    </div>
  );
};

export default Home;
