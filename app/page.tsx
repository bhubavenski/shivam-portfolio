import ButtonsGroup from '@/components/case-studies/buttons-group';
import ProjectOverview from '@/components/case-studies/project-overview';
import LeftCurves from '@/components/LeftCurves';
import RightCurves from '@/components/RightCurves';
import You from '@/components/You';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <section className="h-full flex justify-between items-center">
        <LeftCurves />
        <You />
        <RightCurves />
      </section>
      {/* <section className="relative bg-[#0B0B0B]  h-screen">
        <ProjectOverview />
        <div className=" absolute top-[260px] bottom-[336px] right-[290px] left-[1315px] w-[318px] h-[318px] ball rounded-full blur-[500px]" />
        <Image
          alt="food app image"
          className="absolute left-[1155px] top-[200px] right-[323px] bottom-[200px]"
          src="/foodapp-phone-img.png"
          width={442}
          height={518}
        />
        <ButtonsGroup className=' absolute left-[800px] bottom-[103px] right-[800px]'/>
      </section> */}
    </main>
  );
}
