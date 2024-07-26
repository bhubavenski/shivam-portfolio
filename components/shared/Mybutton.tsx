import { cn } from '@/lib/utils';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  classname?: string;
  variant?: 'primary' | 'outlined' | 'dark' 
};

const Button = ({ children, classname, variant='primary' }: ButtonProps) => {
  return (
    <Button
      classname={cn(
        'h-[59px] primary-gradient-button shadow-primaryMd box-border px-[30px] py-[5px] flex items-center gap-[5px] rounded-full',
        classname
      )}
    >
      {children}
    </Button>
  );
};

export default Button;
