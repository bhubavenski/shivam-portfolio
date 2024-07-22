import { cn } from '@/lib/utils';
import React from 'react';

const LeftCurves = () => {
  return (
    <div className="relative ">
      <div className="dot left-dot" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="225"
        height="706"
        viewBox="0 0 225 706"
        fill="none"
      >
        <g filter="url(#filter0_d_1_636)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M203.768 246.344C203.768 237.857 200.397 229.717 194.395 223.716L-10.232 19.0888C-12.1847 17.1362 -12.1847 13.9703 -10.232 12.0177C-8.27942 10.0651 -5.1136 10.0651 -3.16098 12.0177L204.395 219.574C210.397 225.575 213.768 233.715 213.768 242.201V592.518C213.768 595.279 211.529 597.518 208.768 597.518C206.007 597.518 203.768 595.279 203.768 592.518V246.344ZM38.268 148.518C38.268 145.756 40.5065 143.518 43.268 143.518C46.0294 143.518 48.268 145.756 48.268 148.518V350.192C48.268 358.679 51.6394 366.818 57.6405 372.819L121.895 437.074C127.897 443.075 131.268 451.215 131.268 459.701V682.518C131.268 685.279 129.029 687.518 126.268 687.518C123.507 687.518 121.268 685.279 121.268 682.518V463.844C121.268 455.357 117.897 447.217 111.895 441.216L47.6405 376.961C41.6394 370.96 38.268 362.821 38.268 354.334V148.518Z"
            fill="url(#paint0_linear_1_636)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_636"
            x="-30.0965"
            y="0.153223"
            width="254.264"
            height="705.764"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-4" dy="4" />
            <feGaussianBlur stdDeviation="7.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.196078 0 0 0 0 0.12549 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_636"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_636"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_636"
            x1="102.32"
            y1="1018.19"
            x2="-688.371"
            y2="59.9674"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B1284" />
            <stop offset="1" stopColor="#B1AAFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LeftCurves;
