import React from 'react';
import Navbar from './Navbar';

const You = () => {
  return (
    <div className="text-center flex flex-col gap-[49px] items-center justify-center relative">
      <div className="dot middle-dot -z-10" />
      <div>
        <span className=" tracking-[0.32px] text-[32px] font-spartan font-semibold text-shadow-sm">
          Hi, I&rsquo;m
        </span>
        <h1 className="name-font text-[64px] uppercase font-black tracking-[12.8px] text-shadow-sm">
          Shivam Pandya
        </h1>
        <p className=" tracking-[0.4px] text-[40px] font-spartan">
          An UX Designer
        </p>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default You;
