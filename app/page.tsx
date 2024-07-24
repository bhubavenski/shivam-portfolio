import LeftCurves from '@/components/LeftCurves';
import RightCurves from '@/components/RightCurves';
import You from '@/components/You';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <section className="h-full flex justify-between items-center">
        <LeftCurves />
        <You />
        <RightCurves />
      </section>
      <section className='h-[1000px]'>
        asda
        <LeftCurves />

        <LeftCurves />

        <LeftCurves />
        <LeftCurves />
        <LeftCurves />
        <LeftCurves />
        <LeftCurves />

      </section>
    </main>
  );
}