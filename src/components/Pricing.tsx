import { Check, Phone, Users, MessageSquare, Shield, Calendar, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '149',
      currency: '€',
      period: '/Monat',
      description: 'Perfekt für kleinere Praxen mit bis zu 2 Behandlungsräumen',
      features: [
        'Bis zu 500 Anrufe/Monat',
        'Grundlegende Terminplanung',
        'SMS-Erinnerungen',
        'E-Mail-Support',
        'DSGVO-konformes Hosting',
        'Deutsche Spracherkennung'
      ],
      highlighted: false,
      cta: 'Start free trial'
    },
    {
      name: 'Pro',
      price: '299',
      currency: '€',
      period: '/Monat',
      description: 'Ideal für etablierte Praxen mit mehreren Behandlern',
      features: [
        'Unbegrenzte Anrufe',
        'Erweiterte Terminplanung',
        'WhatsApp Integration',
        'Notfallrouting',
        'Patienten-CRM',
        'Priority Support',
        'Recall-Automatisierung',
        'Multi-Standort Support'
      ],
      highlighted: true,
      cta: 'Start free trial'
    }
  ];

  const features = [
    { icon: Phone, text: '24/7 Anrufannahme' },
    { icon: Calendar, text: 'Intelligente Terminplanung' },
    { icon: MessageSquare, text: 'Omnichannel Kommunikation' },
    { icon: Shield, text: 'DSGVO-konform' },
    { icon: Users, text: 'Patienten-CRM' },
    { icon: Zap, text: 'Sofortige Aktivierung' }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Transparente Preise, keine versteckten Kosten
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Wählen Sie das passende Paket für Ihre Praxis
          </p>
        </div>


        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-soft p-8 relative fade-in-up ${
                plan.highlighted 
                  ? 'border-primary/30 shadow-[var(--shadow-large)] ring-1 ring-primary/10' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Beliebteste Wahl
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">{plan.currency}{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-[hsl(var(--electric))] text-[hsl(var(--electric-foreground))] hover:shadow-lg hover:-translate-y-0.5'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}>
                    {plan.cta}
                  </button>
                  <button className="w-full py-3 px-6 rounded-full font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Talk to sales
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            30 Tage kostenlos testen • Keine Einrichtungsgebühr • Jederzeit kündbar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;