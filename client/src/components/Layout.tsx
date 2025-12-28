import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Phone, Mail, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage, type Language } from "@/context/LanguageContext";
import ChatBot from "@/components/ChatBot";

const navLinksData = {
  en: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pm-surya-ghar", label: "PM Surya Ghar" },
    { href: "/apply", label: "Apply" },
    { href: "/contact", label: "Contact" },
  ],
  te: [
    { href: "/", label: "హోమ్" },
    { href: "/about", label: "గురించి" },
    { href: "/pm-surya-ghar", label: "PM సూర్య ఘర్" },
    { href: "/apply", label: "దరఖాస్తు" },
    { href: "/contact", label: "సంప్రదించండి" },
  ],
};

function LanguageBar() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/95 border-b border-white/10" data-testid="language-bar">
      <div className="w-full px-4">
        <div className="flex items-center justify-end gap-2 h-8">
          <Globe className="h-4 w-4 text-white/70" />
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${
              language === "en" ? "bg-solar text-primary" : "text-white/80 hover:text-white"
            }`}
            data-testid="button-lang-en"
          >
            English
          </button>
          <span className="text-white/40">|</span>
          <button
            onClick={() => setLanguage("te")}
            className={`px-2 py-0.5 text-xs font-medium rounded transition-colors ${
              language === "te" ? "bg-solar text-primary" : "text-white/80 hover:text-white"
            }`}
            data-testid="button-lang-te"
          >
            తెలుగు
          </button>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const navLinks = navLinksData[language];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 bg-primary shadow-lg" data-testid="navbar">
      <div className="w-full px-4">
        <div className="flex items-center h-16">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" data-testid="link-logo">
            <Sun className="h-8 w-8 text-solar" />
            <span className="text-xl font-bold text-white">UdGEM</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.href.replace(/\//g, '') || 'home'}`}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden ml-auto p-2 rounded-md text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <div className="hidden md:block w-24"></div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-mobile-nav-${link.href.replace(/\//g, '') || 'home'}`}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  const { language, t } = useLanguage();
  const navLinks = navLinksData[language];

  return (
    <footer className="bg-primary text-white" data-testid="footer">
      <div className="w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-solar" />
              <span className="text-xl font-semibold">UdGEM</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              {t(
                "Uday Green Economy Mission - Working towards a sustainable future through solar energy adoption and green initiatives.",
                "ఉదయ గ్రీన్ ఎకానమీ మిషన్ - సోలార్ ఎనర్జీ స్వీకరణ మరియు హరిత చొరవల ద్వారా సుస్థిర భవిష్యత్తు వైపు పనిచేస్తోంది."
              )}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Quick Links", "త్వరిత లింకులు")}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-solar text-sm transition-colors"
                    data-testid={`link-footer-${link.href.replace(/\//g, '') || 'home'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Contact Us", "మమ్మల్ని సంప్రదించండి")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 text-solar flex-shrink-0" />
                <span>+91 93999 99047 / +91 73372 63156</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 text-solar flex-shrink-0" />
                <span>info@udgem.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-solar flex-shrink-0 mt-0.5" />
                <span>{t("Andhra Pradesh & Telangana, India", "ఆంధ్రప్రదేశ్ & తెలంగాణ, భారతదేశం")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© UdGEM – {t("Uday Green Economy Mission", "ఉదయ గ్రీన్ ఎకానమీ మిషన్")} | info@udgem.in | +91 93999 99047 | +91 73372 63156</p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LanguageBar />
      <Navbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
