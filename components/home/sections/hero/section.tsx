import LeftCurves from '@/components/LeftCurves';
import RightCurves from '@/components/RightCurves';
import You from '@/components/You';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-full flex justify-between items-center">
      <LeftCurves />
      <You />
      <RightCurves />
    </section>
  );
};

export default HeroSection;
