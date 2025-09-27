import { TrendingUp, Phone, Clock } from 'lucide-react';

const ValueProposition = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '+28%',
      label: 'mehr gebuchte Termine',
      description: 'Durch 24/7 Erreichbarkeit und intelligente Terminoptimierung'
    },
    {
      icon: Phone,
      value: '−62%',
      label: 'verpasste Anrufe',
      description: 'Ihre KI-Rezeption ist immer erreichbar, auch nach Feierabend'
    },
    {
      icon: Clock,
      value: '<20s',
      label: 'Antwortzeit',
      description: 'Patienten erhalten sofort professionelle Unterstützung'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Messbare Ergebnisse für Ihre Praxis
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Unsere Kunden sehen bereits nach wenigen Wochen deutliche Verbesserungen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center space-y-4 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {metric.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;