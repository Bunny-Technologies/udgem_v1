import { Sun, Zap, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * AdBanner Component
 * 
 * Displays vertical advertisement banners for solar companies.
 * These are placeholder ads - replace with actual advertiser content when available.
 */

interface Ad {
  company: string;
  tagline: { en: string; te: string };
  offer: { en: string; te: string };
  phone: string;
  bgColor: string;
  accentColor: string;
}

// Placeholder solar company ads - Replace with actual advertisers
const ads: Ad[] = [
  {
    company: "SunPower Solar",
    tagline: { 
      en: "Premium Solar Solutions", 
      te: "ప్రీమియం సోలార్ సొల్యూషన్స్" 
    },
    offer: { 
      en: "Get 10% OFF on Installation", 
      te: "ఇన్‌స్టాలేషన్‌పై 10% తగ్గింపు" 
    },
    phone: "1800-XXX-XXXX",
    bgColor: "from-orange-500 to-yellow-500",
    accentColor: "bg-orange-600"
  },
  {
    company: "Green Energy India",
    tagline: { 
      en: "Trusted by 50,000+ Homes", 
      te: "50,000+ ఇళ్లు నమ్ముతున్నాయి" 
    },
    offer: { 
      en: "Free Site Survey", 
      te: "ఉచిత సైట్ సర్వే" 
    },
    phone: "1800-XXX-XXXX",
    bgColor: "from-green-600 to-emerald-500",
    accentColor: "bg-green-700"
  },
  {
    company: "Tata Power Solar",
    tagline: { 
      en: "India's Leading Brand", 
      te: "భారతదేశ అగ్రశ్రేణి బ్రాండ్" 
    },
    offer: { 
      en: "25 Years Warranty", 
      te: "25 సంవత్సరాల వారంటీ" 
    },
    phone: "1800-XXX-XXXX",
    bgColor: "from-blue-600 to-blue-500",
    accentColor: "bg-blue-700"
  },
  {
    company: "Adani Solar",
    tagline: { 
      en: "Power Your Future", 
      te: "మీ భవిష్యత్తుకు శక్తి" 
    },
    offer: { 
      en: "Easy EMI Options", 
      te: "సులభ EMI ఆప్షన్లు" 
    },
    phone: "1800-XXX-XXXX",
    bgColor: "from-indigo-600 to-purple-500",
    accentColor: "bg-indigo-700"
  }
];

export default function AdBanner() {
  const { language, t } = useLanguage();

  return (
    <div className="hidden lg:block w-64 flex-shrink-0 space-y-4 sticky top-28" data-testid="ad-banner-container">
      <p className="text-xs text-muted-foreground text-center uppercase tracking-wide">
        {t("Sponsored", "ప్రకటనలు")}
      </p>
      
      {ads.map((ad, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${ad.bgColor} rounded-lg p-4 text-white shadow-lg`}
          data-testid={`ad-card-${index}`}
        >
          {/* Company name */}
          <div className="flex items-center gap-2 mb-2">
            <Sun className="h-5 w-5" />
            <span className="font-bold text-sm">{ad.company}</span>
          </div>
          
          {/* Tagline */}
          <p className="text-xs text-white/90 mb-3">
            {language === "en" ? ad.tagline.en : ad.tagline.te}
          </p>
          
          {/* Offer badge */}
          <div className={`${ad.accentColor} rounded px-2 py-1 text-xs font-semibold mb-3 inline-flex items-center gap-1`}>
            <Zap className="h-3 w-3" />
            {language === "en" ? ad.offer.en : ad.offer.te}
          </div>
          
          {/* Phone */}
          <div className="flex items-center gap-2 text-xs text-white/80">
            <Phone className="h-3 w-3" />
            <span>{ad.phone}</span>
          </div>
          
          {/* CTA */}
          <button className="mt-3 w-full bg-white/20 hover:bg-white/30 transition-colors text-white text-xs font-medium py-2 px-3 rounded flex items-center justify-center gap-1">
            {t("Learn More", "మరింత తెలుసుకోండి")}
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      ))}
      
      {/* Ad space notice */}
      <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-4 text-center">
        <p className="text-xs text-muted-foreground">
          {t("Advertise Here", "ఇక్కడ ప్రకటన ఇవ్వండి")}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          info@udgem.in
        </p>
      </div>
    </div>
  );
}
