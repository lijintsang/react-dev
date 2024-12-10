import styles from './index.less';
import { Button } from 'antd';

const Home = () => {
  return (
    <div className={styles.text}>
      home
      <Button
        onClick={() => {
          console.log('111    ');
        }}
      >
        按钮
      </Button>
    </div>
  );
};

export default Home;
