'use client';

import React, { forwardRef, useEffect } from 'react';
import NavBarItem from './NavBarItem';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { useTransform, useScroll } from 'framer-motion';
import { calculateFixedStateNavbar } from '@/lib/dom';

// const calculateFixedStateNavbar = dynamic(
//   () => import('../lib/dom').then((mod) => mod.calculateFixedStateNavbar),
//   {
//     ssr: false,
//   }
// );

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
//has-[div:nth-child(1):hover]:nav-bar-primary-gradiant-1 has-[div:nth-child(2):hover]:nav-bar-primary-gradiant-2 has-[div:nth-child(3):hover]:nav-bar-primary-gradiant-3

const Navbar = forwardRef<HTMLElement, NavbarProps>(function MyInput(
  { className },
  ref
) {
  return (
    <nav
      ref={ref}
      className={cn(
        'has-[div:nth-child(1):hover]:nav-bar-primary-gradiant-1 has-[div:nth-child(2):hover]:nav-bar-primary-gradiant-2 has-[div:nth-child(3):hover]:nav-bar-primary-gradiant-3 w-[425px] h-[86px] overflow-hidden text-[#C5CEFF] dark-gradiant flex px-[30px] py-[15px] justify-between items-center rounded-full shadow-primarySm backdrop-blur-[10px] ',
        className
      )}
    >
      {items.map((item, index) => (
        <NavBarItem key={index} src={item.src} text={item.text} />
      ))}
    </nav>
  );
});

export default Navbar;
