import React, { ReactNode } from 'react';
import '@/Button.scss';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button id="Button" className="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default ButtonComponent;
