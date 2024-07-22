import Image from 'next/image';
import React from 'react';

type NavBarItemProps = {
  src: string;
  text: string;
  render: () => JSX.Element;
};

const NavBarItem = ({ src, text, render }: NavBarItemProps) => {
  return (
    <div className="icon-container hover:cursor-pointer group  transition-all">
      {render()}
      <Image src={src} alt={src} width={24} height={24} className="" />
      <p className="line-clamp-1 group-hover:font-medium font-normal">{text}</p>
    </div>
  );
};

export default NavBarItem;
