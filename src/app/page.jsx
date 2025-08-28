'use client'
import { useEffect } from 'react';

import { BackgroundElements } from "@/components/background-elements"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SatelliteCommunicationSection } from "@/components/satellite-communication-section"
import { FooterSection } from "@/components/footer-section"
import { StepSection } from "@/components/step-section"
import HeroSection from "@/components/hero-section"
import dynamic from 'next/dynamic';


export default function HomePage() {
  useEffect(() => {
    (async () => {
      if (typeof window !== 'undefined') {
        const $ = (await import('jquery')).default;
        await import('jquery-scrollify');

        // Only enable Scrollify on larger screens
        if (window.innerWidth > 1024) {
          $.scrollify({
            section: ".scroll-section",
            scrollSpeed: 1000,
            interstitialSection: ".footer-section"
          });
        }
      }
    })();

    return () => {
      if (typeof window !== 'undefined') {
        import('jquery').then(({ default: $ }) => {
          if ($.scrollify) $.scrollify.destroy();
        });
      }
    };
  }, []);

  return (
    <div className="">
      <BackgroundElements />

      <div className="scroll-section  lg:pt-8 ">
        <HeroSection />
      </div>

      <div className="scroll-section lg:pt-2">
        <div className=''>
          <HowItWorksSection />

          <StepSection
            stepNumber="1"
            title="SWIPE YOUR TOPIC"
            description="Topic Hero is an AI-powered mobile app where you swipe on topics and argue with rivals! AI gives you statements to agree/disagree on, and you get partnered in a world-limited discussion, in a new, innovative and informative way to argue with strangers."
            titleColor="text-lime-400"
            className="overflow-x-hidden"
          />
        </div>
      </div>

      <div className="scroll-section lg:pt-8">

        <StepSection
          stepNumber="2"
          title="AI DELIVERS THE THROWDOWN"
          description="AI is the future - and we've given it the task to help us determine the inner workings of what makes a healthy discussion. It's surprised us with how intuitive, creative and thoughtful some of these statements are and here are some examples."
          titleColor="text-red-400"
          reverse
        />
      </div>

      <div className="scroll-section lg:pt-8">
        <StepSection
          stepNumber="3"
          title="BATTLE & LEARN"
          description="What's a product or service you'd like to show? Swipe on topics and argue with rivals! Argue with strangers in our mobile app where you can track your progress and see how you stack up against other debaters."
          titleColor="text-emerald-400"
        />
      </div>

      <div className="scroll-section lg:pt-8">
        <StepSection
          stepNumber="4"
          title="STAY IN THE GAME"
          description="Stay engaged with endless discussions and exciting challenges. Whether it's philosophy, sports, or random fun, there's always a new debate waiting. Keep earning, keep learning, and keep proving your voice matters in every conversation."
          titleColor="text-purple-400"
          reverse
        />
      </div>

      <div className="scroll-section lg:pt-8">
        <SatelliteCommunicationSection />
      </div>

      <div className="scroll-section ">
        <FooterSection />
      </div>
    </div>
  )
}
