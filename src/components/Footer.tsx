import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#integrations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#help' },
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Status', href: '#status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'GDPR', href: '#gdpr' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="content-container">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Dentava
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  KI-basierte Telefonassistenz & CRM-Lösung speziell für Zahnarztpraxen. 
                  Verpassen Sie nie wieder einen Anruf.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" />
                  <span>hello@dentava.de</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary" />
                  <span>+49 (0) 30 123 456 78</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary" />
                  <span>Berlin, Germany</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h4 className="text-sm font-semibold text-foreground">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-animated"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                Stay updated
              </h4>
              <p className="text-sm text-muted-foreground">
                Erhalten Sie die neuesten News und Updates über Dentava
              </p>
            </div>
            <div className="flex gap-3 max-w-sm w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              <button className="btn-primary-pill whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Dentava. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#cookies" className="hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;