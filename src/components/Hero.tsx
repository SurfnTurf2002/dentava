import heroDentalVisual from '@/assets/hero-dental-visual.png';

const Hero = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30">
        <div className="w-full h-full bg-[var(--gradient-radial)]" />
      </div>
      
      <div className="relative content-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="heading-hero text-balance">
                Ihre KI-Rezeption für moderne Zahnarztpraxen
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-balance">
                Verpassen Sie nie wieder einen Anruf – Dentava übernimmt Terminvergabe, Erinnerungen & Patientenkommunikation.
              </p>
            </div>
            
          </div>

          {/* Right Content - Dental Visual */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex items-center justify-center">
              <img
                src={heroDentalVisual}
                alt="Dentava KI-Rezeption für Zahnarztpraxen - Zahn mit schützenden Händen symbolisiert fürsorgliche Patientenbetreuung"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;