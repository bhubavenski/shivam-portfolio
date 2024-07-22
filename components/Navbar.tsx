'use client';

import React, { useState } from 'react';
import NavBarItem from './NavBarItem';

const items = [
  {
    src: '/Icon-Documents-Default.svg',
    text: 'Case Studies',
    num: 1,
    className: 'dot nav-dot left-nav-dot opacity-0 group-hover:opacity-100',
  },
  {
    src: '/Icon-AboutMe-Default.svg',
    text: 'Design',
    num: 2,
    className: 'dot nav-dot middle-nav-dot opacity-0 group-hover:opacity-100',
  },
  {
    src: '/Icon-Design-Default.svg',
    text: 'About me',
    num: 3,
    className: 'dot nav-dot right-nav-dot opacity-0 group-hover:opacity-100',
  },
];

const Navbar = () => {
  return (
    <div className="navbar overflow-hidden text-[#C5CEFF]">
      {items.map((item) => (
        <NavBarItem
          key={item.text}
          src={item.src}
          text={item.text}
          render={() => <div className={item.className} />}
        />
      ))}
    </div>
  );
};

export default Navbar;
