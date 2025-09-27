import { Phone, Clock, Users, Target, CheckCircle, TrendingUp } from 'lucide-react';

const ProblemOutcome = () => {
  const problems = [
    {
      icon: Phone,
      title: 'Während der Behandlung nicht erreichbar?',
      description: 'Patienten erreichen niemanden, wenn das Praxisteam bei Behandlungen beschäftigt ist.'
    },
    {
      icon: Clock,
      title: 'Kein zentrales Patientenmanagement?',  
      description: 'Termine, Erinnerungen und Patientendaten sind über verschiedene Systeme verstreut.'
    },
    {
      icon: Users,
      title: 'Verpasste Anrufe nach Feierabend?',
      description: 'Notfälle und Terminwünsche gehen verloren, wenn die Praxis geschlossen ist.'
    }
  ];

  const outcomes = [
    {
      icon: CheckCircle,
      title: '24/7 Anrufannahme',
      description: 'Ihre KI-Rezeption ist immer erreichbar und beantwortet Patientenanfragen professionell.'
    },
    {
      icon: Target,
      title: 'Automatisierte Terminbuchung',
      description: 'Intelligente Terminplanung mit direkter Synchronisation zu Ihrem Praxiskalender.'
    },
    {
      icon: TrendingUp,
      title: 'DSGVO-konform dokumentiert',
      description: 'Alle Gespräche werden sicher auf deutschen Servern gespeichert und protokolliert.'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Modernisieren Sie Ihre Patientenkommunikation
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="space-y-8">
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="space-y-8">
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome.title}
                  className="flex items-start space-x-4 fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <outcome.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{outcome.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemOutcome;