import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Tooltip } from 'antd';
import IconFont from '@/components/IconFont';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  console.log('111    ', theme);

  return (
    <>
      <div onClick={toggleTheme}>
        <Tooltip placement="top" title={theme === 'light' ? '浅色' : '深色'}>
          {theme === 'light' ? (
            <IconFont type="icon-light" />
          ) : (
            <IconFont type="icon-dark" />
          )}
        </Tooltip>
      </div>
    </>
  );
};

export default ThemeToggle;
