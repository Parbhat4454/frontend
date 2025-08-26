import { Header } from "@/components/header"
import { BackgroundElements } from "@/components/background-elements"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StepTwoSection } from "@/components/step-two-section"
import { StepThreeSection } from "@/components/step-three-section"
import { StepFourSection } from "@/components/step-four-section"
import { SatelliteCommunicationSection } from "@/components/satellite-communication-section"
import { FooterSection } from "@/components/footer-section"
import { StepOneSection } from "@/components/StepOneSection"
import { StepSection } from "@/components/step-section"


import { forwardRef } from 'react';
import HeroSection from "@/components/hero-section"




export default function HomePage() {
  return (
    <div className="">
      <BackgroundElements />
      {/* <Header /> */}
      <HeroSection />
      <HowItWorksSection  />
      <StepSection
        stepNumber="1"
        title="SWIPE YOUR TOPIC"
        description="Topic Hero is an AI-powered mobile app where you swipe on topics and argue with rivals! AI gives you statements to agree/disagree on, and you get partnered in a world-limited discussion, in a new, innovative and informative way to argue with strangers."
        titleColor="text-lime-400"
        className='overflow-x-hidden'
      />
      <StepSection
        stepNumber="2"
        title="AI DELIVERS THE THROWDOWN"
        description="AI is the future - and we've given it the task to help us determine the inner workings of what makes a healthy discussion. It's surprised us with how intuitive, creative and thoughtful some of these statements are and here are some examples."
        titleColor="text-red-400"
        reverse
      />
       <StepSection
        stepNumber="3"
        title="BATTLE & LEARN"
        description="What's a product or service you'd like to show? Swipe on topics and argue with rivals! Argue with strangers in our mobile app where you can track your progress and see how you stack up against other debaters."
        titleColor="text-emerald-400"
      />  
      <StepSection
        stepNumber="4"
        title="STAY IN THE GAME"
        description="Stay engaged with endless discussions and exciting challenges. Whether it's philosophy, sports, or random fun, there's always a new debate waiting. Keep earning, keep learning, and keep proving your voice matters in every conversation."
        titleColor="text-purple-400"
        reverse
      />
      <SatelliteCommunicationSection />
      <FooterSection />

    </div>
  )
}
