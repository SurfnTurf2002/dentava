import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Ist Dentava DSGVO-konform?',
      answer: 'Ja, Dentava ist vollständig DSGVO-konform. Alle Daten werden ausschließlich auf deutschen Servern gespeichert und verarbeitet. Wir haben umfassende Datenschutzmaßnahmen implementiert und bieten Ihnen alle notwendigen Verträge zur Auftragsverarbeitung.'
    },
    {
      question: 'Wie funktioniert die Nummernportierung?',
      answer: 'Die Portierung Ihrer bestehenden Telefonnummer ist kostenlos und dauert in der Regel 1-3 Werktage. Unser Support-Team übernimmt den gesamten Prozess für Sie. Während der Portierung bleibt Ihre Erreichbarkeit durch eine temporäre Weiterleitung gewährleistet.'
    },
    {
      question: 'Welche Kalender werden unterstützt?',
      answer: 'Dentava integriert sich nahtlos mit allen gängigen Praxisverwaltungssystemen wie Charly, DAMPSOFT, medatixx, CGM Z1 und vielen anderen. Auch Standard-Kalender wie Google Calendar oder Outlook werden unterstützt.'
    },
    {
      question: 'Wie werden Notfälle behandelt?',
      answer: 'Unsere KI erkennt Notfälle automatisch anhand von Schlüsselwörtern und der Dringlichkeit des Anliegens. Echte Notfälle werden sofort an Ihre Notfall-Hotline weitergeleitet oder gemäß Ihren individuellen Notfallprotokollen behandelt.'
    },
    {
      question: 'Kann ich Dentava anpassen?',
      answer: 'Ja, Dentava lernt kontinuierlich und passt sich an Ihre Praxis an. Sie können Begrüßungen, Antworten und Abläufe individuell konfigurieren. Unsere KI lernt aus jedem Gespräch und wird mit der Zeit immer präziser auf Ihre Bedürfnisse zugeschnitten.'
    },
    {
      question: 'Wie schnell kann ich starten?',
      answer: 'Nach der Anmeldung können Sie binnen 24 Stunden starten. Wir richten gemeinsam mit Ihnen die KI ein, konfigurieren Ihre Termine und Abläufe. Eine persönliche Einführung ist im Preis enthalten.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Alles was Sie über Dentava wissen müssen
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-soft px-6 py-2 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;