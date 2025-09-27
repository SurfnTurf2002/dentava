import earIcon from '@/assets/ear-icon.png'
import playIcon from '@/assets/play-icon.png'
import growthIcon from '@/assets/growth-icon.png';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: 'ear',
      title: 'Zuhören',
      description: 'Unsere KI analysiert Ihre bisherigen Patientengespräche und lernt Ihre Praxisabläufe kennen.',
      duration: '24h Setup',
      color: 'primary'
    },
    {
      number: '02', 
      icon: 'play',
      title: 'Live gehen',
      description: 'Die KI beantwortet Anrufe, terminiert automatisch und priorisiert Notfälle nach Ihren Vorgaben.',
      duration: 'Sofort aktiv',
      color: 'electric'
    },
    {
      number: '03',
      icon: 'growth',
      title: 'Wachstum',
      description: 'Recall-Automatisierung und Follow-ups steigern Ihre Terminauslastung und Patientenbindung.',
      duration: 'Kontinuierlich',
      color: 'primary'
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Wie Dentava funktioniert
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            In drei einfachen Schritten zu Ihrer vollautomatisierten Praxiskommunikation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              
              <div className="relative z-10 text-center space-y-6 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="mx-auto flex items-center justify-center relative">
                    {step.icon === 'ear' ? (
                      <img src={earIcon} alt="Ear icon" className="w-24 h-24" />
                    ) : step.icon === 'play' ? (
                      <img src={playIcon} alt="Play icon" className="w-24 h-24" />
                    ) : step.icon === 'growth' ? (
                      <img src={growthIcon} alt="Growth icon" className="w-24 h-24" />
                    ) : null}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold h-14 flex items-center justify-center">{step.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;