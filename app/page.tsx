import CaseStudiesSection from '@/components/home/sections/case-studies/section';
import HeroSection from '@/components/home/sections/hero/section';

export default function Home() {
  return (
    <main className="w-full h-screen overflow-x-hidden">
      <HeroSection/>
      <CaseStudiesSection/>
    </main>
  );
}
