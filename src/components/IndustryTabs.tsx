import { useState } from 'react';
import { Flame, Wrench, Car } from 'lucide-react';

const IndustryTabs = () => {
  const [activeTab, setActiveTab] = useState('hvac');

  const industries = [
    {
      id: 'hvac',
      label: 'HVAC',
      icon: Flame,
      title: 'Boiler down? Book within minutes.',
      features: [
        'Emergency heating repairs prioritized automatically',
        'Seasonal maintenance reminders for optimal performance',
        'Installation scheduling with proper time allocation',
        'Parts availability checks before booking'
      ],
      example: '"Meine Heizung geht nicht mehr—haben Sie heute einen Termin?"'
    },
    {
      id: 'plumbing',
      label: 'Plumbing',
      icon: Wrench,
      title: 'Burst pipe? Priority routing.',
      features: [
        'Water damage emergencies get immediate attention',
        'Leak detection and repair scheduling',
        'Bathroom renovation project management',
        'Preventive maintenance for commercial clients'
      ],
      example: '"Rohrbruch im Keller—können Sie sofort kommen?"'
    },
    {
      id: 'automotive',
      label: 'Car Repair',
      icon: Car,
      title: 'Tire season & TÜV reminders.',
      features: [
        'Automatic TÜV/HU renewal notifications',
        'Seasonal tire change reminders',
        'Service interval tracking per vehicle',
        'MOT and inspection scheduling'
      ],
      example: '"Reifenwechsel nächste Woche, was kostet es?"'
    }
  ];

  const activeIndustry = industries.find(industry => industry.id === activeTab);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="content-container">
        <div className="text-center space-y-6 mb-16">
          <h2 className="heading-section text-balance">
            Tailored for your industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Specialized AI training and workflows for different service sectors.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card rounded-full p-1 border border-border/30">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === industry.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {industry.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {activeIndustry && (
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {activeIndustry.title}
                </h3>
                <ul className="space-y-3">
                  {activeIndustry.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-soft p-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">
                    Example customer call:
                  </h4>
                  <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{activeIndustry.example}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">
                    Our AI understands context, urgency, and industry-specific terminology to provide accurate responses and booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustryTabs;