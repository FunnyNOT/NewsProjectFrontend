import React from 'react';
import AboutUsCard from '@/components/AboutComponents/AboutUsCard';
import HowItWorksCard from '@/components/AboutComponents/HowItWorksCard';
import OurMissionCard from '@/components/AboutComponents/OurMissionCard';
import OurTeamCard from '@/components/AboutComponents/OurTeamCard';
import WhyChooseCard from '@/components/AboutComponents/WhyChooseCard';


export default function Home() {
  return (
    <div>
    <AboutUsCard />
    <HowItWorksCard />
    <OurMissionCard />
    <OurTeamCard />
    <WhyChooseCard />
    </div>
  );
}