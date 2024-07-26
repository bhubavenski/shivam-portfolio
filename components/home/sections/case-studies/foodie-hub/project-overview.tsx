import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

function ProjectOverview() {
  return (
    <article className=" absolute top-[250px] left-[33px] flex w-[760px] flex-col items-center gap-[49px] box-border px-12 ">
      <div className="flex flex-col justify-center items-center w-[650px]">
        <h2 className="font-spartan text-[#E9EEFF] text-2xl font-semibold tracking-[0.24px] leading-[22.08px]">
          Food App
        </h2>
        <h1 className="text-[64px] font-black uppercase tracking-[0.64px] text-shadow-sm text_primary_gradient">
          FOODIE HUB
        </h1>
        <p className=" font-spartan text-[#E9EEFF] text-[32px] font-medium  tracking-[0.36px] leading-normal">
          Personalise Food Truck Business App
        </p>
      </div>
      <Button
        className={cn(
          'h-[59px] box-border px-[30px] py-[5px] flex items-center gap-[5px] rounded-full button_primary_gradient'
        )}
      >
        <Image src="Docs.svg" alt="read case study" width={44} height={44} />
        <span className=" text-lg font-semibold font-inter">
          Read Case Study
        </span>
      </Button>
      <p className="text-[#E9EEFF] text-center font-spartan font-normal leading-[150%] tracking-[2.24px] box-border p-[10px]">
        Get<span className="font-bold"> “Food on Demand</span>, Customized” with
        this innovative app. Click to browse, schedule your order, and enjoy the
        ultimate in personalized food truck dining.
      </p>
    </article>
  );
}

export default ProjectOverview;
