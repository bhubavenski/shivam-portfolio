'use client';

import React from 'react';
import NavBarItem from './NavBarItem';
import { cn } from '@/lib/utils';

const items = [
  {
    src: '/Icon-Documents-Default.svg',
    text: 'Case Studies',
  },
  {
    src: '/Icon-Design-Default.svg',
    text: 'About me',
  },
  {
    src: '/Icon-AboutMe-Default.svg',
    text: 'Design',
  },
];

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div
      className={cn(
        'has-[div:nth-child(1):hover]:nav-bar-primary-gradiant-1 has-[div:nth-child(2):hover]:nav-bar-primary-gradiant-2  has-[div:nth-child(3):hover]:nav-bar-primary-gradiant-3 dark-gradiant flex w-[425px] px-[30px] py-[15px] justify-between items-center rounded-full shadow-primarySm backdrop-blur-[10px] relative overflow-hidden text-[#C5CEFF] bg-black',
        className
      )}
    >
      {items.map((item, index) => (
        <NavBarItem key={index} src={item.src} text={item.text} />
      ))}
    </div>
  );
};

export default Navbar;
