import React from 'react';
import ButtonsGroup from './buttons-group';
import ProjectOverview from './project-overview';
import Image from 'next/image';

const FoodieHubArticle = () => {
  return (
    <article className="relative size-full">
      <div className="absolute size-[320px] rounded-full bg-[#3220FF] blur-[250px] top-[259px] right-[287px]" />
      <ProjectOverview />
      <div className=" absolute top-[260px] bottom-[336px] right-[290px] left-[1315px] w-[318px] h-[318px] ball rounded-full blur-[500px]" />
      <Image
        alt="food app image"
        className="absolute top-[200px] right-[323px]"
        src="/foodapp-phone-img.png"
        width={442}
        height={518}
      />
      <ButtonsGroup className="absolute left-[800px] bottom-[103px] right-[800px]" />
    </article>
  );
};

export default FoodieHubArticle;
