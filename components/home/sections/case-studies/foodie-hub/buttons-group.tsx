import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { GoArrowLeft } from 'react-icons/go';

const Elipse = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 604 396"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
  >
    <g filter="url(#filter0_f_517_679)">
      <ellipse cx="302" cy="233.5" rx="102" ry="33.5" fill="#3220FF" />
    </g>
    <defs>
      <filter
        id="filter0_f_517_679"
        x="0"
        y="0"
        width="604"
        height="467"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="100"
          result="effect1_foregroundBlur_517_679"
        />
      </filter>
    </defs>
  </svg>
);

Elipse.displayName = 'Elipse';

type ButtonsGroupProps = {
  className?: string;
};

const ButtonsGroup = ({ className }: ButtonsGroupProps) => {
  return (
    <div className={cn('w-[325px] h-[105px] opacity-[0.7]', className)}>
      <div className="relative size-full text-normal">
        <Image
          alt="food app image"
          className="absolute top-0 left-[33px] right-[323px] filter blur-[100px]"
          src='/elipse.svg'
          width={204}
          height={67}
        />
        <Button className="absolute top-0 left-[34px] h-[37px] bg-white text-[#0B0646] px-[24px] py-[10px] opacity-[0.6] border-[1px] border-[#A1A1A1]">
          Add to Cart
        </Button>
        <Button className="absolute bottom-[12px] left-0 h-[44px] bg-[#3220FF] px-[24px] py-[10px] opacity-[0.8]">
          <div className="flex gap-[10px] items-center">
            Add to Cart <FiShoppingCart />
          </div>
        </Button>
        <Button className="absolute top-[19px] right-0 h-[44px] bg-[#0B0646]">
          <div className="flex gap-[10px] items-center">
            <GoArrowLeft className="text-base" /> Add to Cart
          </div>
        </Button>
        <Button className="px-[15px] py-[15px] font-bold absolute bottom-0 right-[113px] h-[23px] text-[#0B0646] bg-[#e9edff] z-[2] opacity-[0.8]">
          Button
        </Button>
      </div>
    </div>
  );
};

export default ButtonsGroup;
