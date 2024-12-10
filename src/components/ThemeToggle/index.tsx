import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Button, Tooltip } from 'antd';
import IconFont from '@/components/IconFont';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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
