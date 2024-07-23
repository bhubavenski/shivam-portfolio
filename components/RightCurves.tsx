import React from 'react';

const RightCurves = () => {
  return (
    <div className="relative">
      <div className="bg-[#3220ff] blur-[250px] absolute top-1/2 right-1/2 h-[485px] w-[318px] rounded-[485px] transform -translate-y-1/2 translate-x-[375px]" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="219"
        height="707"
        viewBox="0 0 219 707"
        fill="none"
      >
        <g filter="url(#filter0_d_1_637)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9996 246.861C20.9996 238.375 24.371 230.235 30.3722 224.234L235 19.6066C236.952 17.654 236.952 14.4882 235 12.5355C233.047 10.5829 229.881 10.5829 227.929 12.5355L20.3722 220.092C14.371 226.093 10.9996 234.232 10.9996 242.719V593.036C10.9996 595.797 13.2382 598.036 15.9996 598.036C18.761 598.036 20.9996 595.797 20.9996 593.036V246.861ZM186.5 149.036C186.5 146.274 184.261 144.036 181.5 144.036C178.738 144.036 176.5 146.274 176.5 149.036V350.71C176.5 359.197 173.128 367.336 167.127 373.337L102.872 437.592C96.871 443.593 93.4996 451.732 93.4996 460.219V683.036C93.4996 685.797 95.7382 688.036 98.4996 688.036C101.261 688.036 103.5 685.797 103.5 683.036V464.361C103.5 455.874 106.871 447.735 112.872 441.734L177.127 377.479C183.128 371.478 186.5 363.339 186.5 354.852V149.036Z"
            fill="url(#paint0_linear_1_637)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_637"
            x="0.599619"
            y="0.671045"
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
            <feOffset dx="4" dy="4" />
            <feGaussianBlur stdDeviation="7.2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.196078 0 0 0 0 0.12549 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_637"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_637"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_637"
            x1="122.448"
            y1="1018.71"
            x2="913.139"
            y2="60.4852"
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

export default RightCurves;
