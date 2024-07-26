import Image from 'next/image';
import React from 'react';

const Elipse = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="586"
      height="408"
      viewBox="0 0 586 408"
      fill="none"
    >
      <g filter="url(#filter0_f_517_2483)">
        <ellipse cx="302.5" cy="233.5" rx="102" ry="33.5" fill="#3220FF" />
      </g>
      <defs>
        <filter
          id="filter0_f_517_2483"
          x="0.5"
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
            result="effect1_foregroundBlur_517_2483"
          />
        </filter>
      </defs>
    </svg>
  );
};
Elipse.displyName = 'Elipse';

const CS1CS2 = () => {
  return (
    <div className="absolute bottom-[61px] right-[69px] flex w-[360px] h-[222px] flex-col items-center justify-center gap-[10px] border-[20px] border-[2px] border-dashed border-[#1B1284] opacity-[0.7]">
      <div className="w-[273px] h-[188px] opacity-[0.7] flex items-center justify-start">
        <Image src="/elipse-2.svg" alt="a" />
      </div>
    </div>
  );
};

export default CS1CS2;
