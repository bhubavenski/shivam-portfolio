import Image from 'next/image';
import React from 'react';

type NavBarItemProps = {
  src: string;
  text: string;
};

const NavBarItem = ({ src, text }: NavBarItemProps) => {
  return (
    <div
      className={`flex group w-[120px] shrink-0 flex-col items-center justify-between gap-[5px] self-stretch px-[10px] transition-all hover:cursor-pointer`}
    >
      <Image src={src} alt={src} width={24} height={24} className="" />
      <p className="line-clamp-1 font-normal group-hover:font-medium">{text}</p>
    </div>
  );
};

export default NavBarItem;
