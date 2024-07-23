import React from 'react';
import Navbar from './Navbar';

const You = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-[49px] text-center">
      <div className=" -z-10 bg-[#3220ff] blur-[250px] absolute top-1/2 left-1/2 h-[485px] w-[318px] rounded-[485px] transform -translate-y-1/2 -translate-x-1/2" />

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
        <Navbar />
      </div>
    </div>
  );
};

export default You;
