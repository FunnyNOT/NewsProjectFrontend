import React from 'react';
// import { ThreeDCardDemo } from '@/components/3dcardComponent';
// import { SparklesPreview } from '@/components/sparklesComponent';
// import { SparklesPreviewSecond } from '@/components/sparklesComponentSecond';
// import { AnimatedTooltipPreview } from '@/components/animateTooltupComponent';
import { BackgroundBeamsDemo } from '@/components/backgroundBeams';
// import { FloatingNavDemo } from '@/components/navbarComponent';
// import { NavbarDemo } from '@/components/navbarMenuComponent';
import { SignupFormDemo } from '@/components/signupComponent';
import { InfiniteMovingCardsDemo } from '@/components/infiniteMovingCardsComponent';
import { CardStackDemo } from '@/components/cardStackComponent';
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BentoGridSecondDemo } from '@/components/bentoGridComponent';


export default function Home() {
  return (
    <div>
      <BackgroundBeamsDemo />
      <BentoGridSecondDemo />
    </div>
  );
}