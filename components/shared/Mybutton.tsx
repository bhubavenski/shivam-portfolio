import { cn } from '@/lib/utils';
import React from 'react';
import style from './styles.module.css';
type ButtonProps = {
  children: React.ReactNode;
  classname?: string;
};

const Button = ({ children, classname }: ButtonProps) => {
  return (
    <button
      className={cn(
        'h-[59px] box-border px-[30px] py-[5px] flex items-center gap-[5px] rounded-full',
        style.button_primary_gradient,
        classname
      )}
    >
      {children}
    </button>
  );
};

export default Button;
