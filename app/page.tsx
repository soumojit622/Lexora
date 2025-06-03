import Header from "@/components/Header";
import AboutLexora from "@/components/landing/about-lexora";
import BenefitsSection from "@/components/landing/benefits-section";
import ContactSection from "@/components/landing/contact-section";
import FAQ from "@/components/landing/faq";
import FeaturesSection from "@/components/landing/feature-section";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import HowItWorks from "@/components/landing/how-it-works";
import InstallInstructions from "@/components/landing/install-instructions";
import LiveDemoTeaser from "@/components/landing/live-demo-teaser";
import NewsletterSignup from "@/components/landing/newsletter-signup";
import PricingPlans from "@/components/landing/pricing-plans";
import SocialProofSection from "@/components/landing/social-proof-section";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <LiveDemoTeaser />
      <AboutLexora />
      <BenefitsSection />
      <Testimonials />
      <PricingPlans />
      <FAQ />
      <NewsletterSignup />
      <ContactSection />
      <InstallInstructions />
      <SocialProofSection />
      <Footer />
    </div>
  );
}
