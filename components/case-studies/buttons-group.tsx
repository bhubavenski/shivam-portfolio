import { cn } from '@/lib/utils';
import React from 'react';

const Elipse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="604"
    height="396"
    viewBox="0 0 604 396"
    fill="none"
  >
    <g filter="url(#filter0_f_492_1677)">
      <ellipse cx="302" cy="233.5" rx="102" ry="33.5" fill="#3220FF" />
    </g>
    <defs>
      <filter
        id="filter0_f_492_1677"
        x="0"
        y="0"
        width="604"
        height="467"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="100"
          result="effect1_foregroundBlur_492_1677"
        />
      </filter>
    </defs>
  </svg>
);

Elipse.displayName = 'Elipse';

type SempleButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const SempleButton = ({ children, className }: SempleButtonProps) => (
  <div
    className={cn(
      'flex items-center justify-center py-[10px] px-[24px] rounded-[5px]border-[1px] border-[#A1A1A1] bg-white',
      className
    )}
  >
    {children}
  </div>
);
SempleButton.displayName = 'SempleButton';

type ButtonsGroupProps = {
  className?: string;
};

const ButtonsGroup = ({ className }: ButtonsGroupProps) => {
  return (
    <div className={cn('w-[325px] h-[105px] opacity-[0.7]', className)}>
      <div className="relative">
        {/* <Elipse /> */}
        <SempleButton className="absolute top-0 l-[34px] right-[166px] bottom-[67px]">
          <div className=" text-sm font-normal leading-[120%] text-[#0B0646]">
            Add to Cart
          </div>
        </SempleButton>
      </div>
    </div>
  );
};

export default ButtonsGroup;
