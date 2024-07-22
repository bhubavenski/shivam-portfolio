import LeftCurves from '@/components/LeftCurves';
import GridPattern from '@/components/magicui/animated-grid-pattern';
import Ripple from '@/components/magicui/ripple';
import RightCurves from '@/components/RightCurves';
import You from '@/components/You';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <section className="h-full flex justify-between items-center">
        <Ripple />
        <LeftCurves />
        <You />
        <RightCurves />
      </section>
    </main>
  );
}

/*
-webkit-box-shadow:0px 0px 300px 45px rgba(45,255,196,0.9);
-moz-box-shadow: 0px 0px 300px 45px rgba(45,255,196,0.9);
box-shadow: 0px 0px 300px 45px rgba(45,255,196,0.9);
*/
