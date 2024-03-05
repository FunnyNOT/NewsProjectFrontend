import React from 'react';
import { ThreeDCardDemo } from '@/components/3dcardComponent';
import { SparklesPreview } from '@/components/sparklesComponent';
import { SparklesPreviewSecond } from '@/components/sparklesComponentSecond';
import { AnimatedTooltipPreview } from '@/components/animateTooltupComponent';
import { BackgroundBeamsDemo } from '@/components/backgroundBeams';
import { FloatingNavDemo } from '@/components/navbarComponent';
import { NavbarDemo } from '@/components/navbarMenuComponent';


export default function Home() {
  return (
    <div>
    <NavbarDemo />
    <SparklesPreviewSecond />
    <ThreeDCardDemo />
    <AnimatedTooltipPreview />
    {/* <SparklesPreview />
    <AnimatedTooltipPreview />
    <BackgroundBeamsDemo /> */}
    </div>
  );
}