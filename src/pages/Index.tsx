import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ProblemOutcome from '@/components/ProblemOutcome';
import HowItWorks from '@/components/HowItWorks';
import FeatureGrid from '@/components/FeatureGrid';
import DemoBlock from '@/components/DemoBlock';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <ProblemOutcome />
        <HowItWorks />
        <FeatureGrid />
        <DemoBlock />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
