const SocialProof = () => {
  const companies = [
    'Dr. Weber Zahnpraxis',
    'Zahnarztpraxis Müller',
    'Dr. Schmidt & Partner',
    'Dental Centrum Berlin',
    'Praxis Dr. Fischer',
    'Zahnarzt Dr. Wagner'
  ];

  return (
    <section className="py-16 border-b border-border/30">
      <div className="content-container">
        <div className="text-center space-y-8">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Vertrauen von Zahnarztpraxen in ganz Deutschland
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div
                key={company}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-8 flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;