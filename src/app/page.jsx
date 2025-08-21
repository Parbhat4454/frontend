import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BackgroundElements } from "@/components/background-elements"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StepTwoSection } from "@/components/step-two-section"
import { StepThreeSection } from "@/components/step-three-section"
import { StepFourSection } from "@/components/step-four-section"
import { SatelliteCommunicationSection } from "@/components/satellite-communication-section"
import { FooterSection } from "@/components/footer-section"



export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundElements />
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <StepTwoSection />
      <StepThreeSection />
      <StepFourSection />
      <SatelliteCommunicationSection />
      <FooterSection />

    </div>
  )
}
