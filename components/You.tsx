'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Ripple from './magicui/ripple';
import {
  calculateFixedStateNavbar,
} from '@/lib/dom';

const You = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navRef.current || !heroRef.current) return;
    console.log('pusna se')
    calculateFixedStateNavbar(navRef.current, heroRef.current);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-[49px] text-center"
      ref={heroRef}
    >
      <div className=" -z-10 bg-[#3220ff] blur-[250px] absolute top-1/2 left-1/2 h-[485px] w-[318px] rounded-[485px] transform -translate-y-1/2 -translate-x-1/2" />
      <Ripple />
      <div>
        <span className="font-spartan text-[32px] font-semibold tracking-[0.32px] text-shadow-sm">
          Hi, I&rsquo;m
        </span>
        <h1 className="text-primary-gradiant text-[64px] font-black uppercase tracking-[12.8px] text-shadow-sm">
          Shivam Pandya
        </h1>
        <p className=" font-spartan text-[40px] tracking-[0.4px]">
          An UX Designer
        </p>
      </div>
      <div>
        <Navbar ref={navRef} />
      </div>
    </div>
  );
};

export default You;
