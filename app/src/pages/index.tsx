import React from 'react';
import { ThreeDCardDemo } from '@/components/3dcardComponent';
import { SparklesPreview } from '@/components/sparklesComponent';
import { SparklesPreviewSecond } from '@/components/sparklesComponentSecond';
import { AnimatedTooltipPreview } from '@/components/animateTooltupComponent';
import { BackgroundBeamsDemo } from '@/components/backgroundBeams';

export default function Home() {
  return (
    <div>
    <SparklesPreviewSecond />
    <SparklesPreview />
    <ThreeDCardDemo />
    <AnimatedTooltipPreview />
    <BackgroundBeamsDemo />
    </div>
  );
}