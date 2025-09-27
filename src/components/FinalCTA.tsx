const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-electric/5 to-background" />
      <div className="absolute inset-0 bg-[var(--gradient-soft)]" />
      
      <div className="relative content-container">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="heading-hero text-balance">
            Konzentrieren Sie sich auf Ihre Patienten – Dentava übernimmt den Rest
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-balance">
            Starten Sie noch heute Ihre 30-tägige kostenlose Testphase und erleben Sie, 
            wie Dentava Ihre Praxis transformiert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#demo" className="btn-hero text-lg px-12 py-5">
              Book a demo
            </a>
            <p className="text-sm text-muted-foreground">
              Kostenlos • Keine Kreditkarte erforderlich • Sofort aktiviert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;