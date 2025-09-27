import { 
  Phone, 
  Users, 
  Calendar, 
  AlertTriangle, 
  Shield, 
  MessageSquare 
} from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: Phone,
      title: 'AI Call Receptionist',
      highlight: '24/7 verfügbar',
      description: 'Professionelle Anrufannahme mit natürlicher Spracherkennung und automatischer Weiterleitung.'
    },
    {
      icon: Users,
      title: 'Patienten-CRM',
      highlight: 'Vollintegriert',
      description: 'Komplette Patientenhistorie mit automatischer Dokumentation aller Gespräche und Termine.'
    },
    {
      icon: Calendar,
      title: 'Intelligente Terminplanung',
      highlight: 'Auto-Sync',
      description: 'Synchronisation mit Ihrer Praxissoftware und optimierte Terminvorschläge basierend auf Verfügbarkeit.'
    },
    {
      icon: AlertTriangle,
      title: 'Notfallrouting',
      highlight: 'Sofort-Erkennung',
      description: 'Automatische Erkennung von Notfällen und direkte Weiterleitung an Ihre Notfall-Hotline.'
    },
    {
      icon: Shield,
      title: 'DSGVO-Hosting (EU)',
      highlight: '100% Compliant',
      description: 'Alle Daten werden ausschließlich auf deutschen Servern verarbeitet und gespeichert.'
    },
    {
      icon: MessageSquare,
      title: 'Omnichannel Follow-ups',
      highlight: 'SMS, E-Mail, WhatsApp',
      description: 'Automatische Erinnerungen und Follow-ups über alle Kanäle für maximale Patientenbindung.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Alles was Ihre Praxis braucht
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Eine komplette Lösung für moderne Patientenkommunikation und Praxismanagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-electric/10 text-electric">
                    {feature.highlight}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
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

export default FeatureGrid;