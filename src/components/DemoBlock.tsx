import { MessageCircle, Clock } from 'lucide-react';
import callAiAgentDemo from '@/assets/call-ai-agent-demo.png';

const DemoBlock = () => {
  const prompts = [
    'Ich habe Zahnschmerzen – wann wäre ein Termin frei?',
    'Können Sie meine Kontrolluntersuchung verschieben?',
    'Ist das ein Notfall? Mein Zahn ist abgebrochen.',
    'Welche Unterlagen brauche ich für meinen Termin?'
  ];

  const transcript = `
10:42 Patient: "Hallo, ich habe starke Zahnschmerzen..."
10:42 Dentava: "Das tut mir leid zu hören. Ich schaue gleich nach einem Notfalltermin. Können Sie mir Ihren Namen und Ihre Versichertennummer nennen?"
10:43 Patient: "Schmidt, Versichertennummer 1234567890"
10:43 Dentava: "Vielen Dank, Frau Schmidt. Ich sehe, Sie waren zuletzt im März bei uns. Für heute hätten wir um 14:30 einen Notfalltermin frei. Passt Ihnen das?"
10:44 Patient: "Ja, das wäre perfekt!"
10:44 Dentava: "Wunderbar! Ich habe Sie für heute 14:30 eingetragen. Sie erhalten gleich eine SMS-Bestätigung. Nehmen Sie bitte Ihren Ausweis und die Versichertenkarte mit."
  `;

  return (
    <section id="demo-section" className="py-24">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-balance mb-4">
            Erleben Sie Dentava in Aktion
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Sehen Sie, wie natürlich unsere KI mit Ihren Patienten kommuniziert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Prompts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Typische Patientenanfragen</h3>
            <div className="space-y-4">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  className="card-soft p-4 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5" />
                    <p className="text-sm leading-relaxed">{prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Agent Demo */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Live AI Agent Interface</h3>
            <img 
              src={callAiAgentDemo} 
              alt="Call AI agent interface demo" 
              className="w-full max-w-sm h-auto rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoBlock;