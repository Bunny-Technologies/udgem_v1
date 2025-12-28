import { Sun, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * AdBanner Component
 * 
 * Displays vertical advertisement banners for solar companies.
 * These are placeholder ads - replace with actual advertiser content when available.
 */

interface Ad {
  id: string;
  company: string;
  tagline: { en: string; te: string };
  offer: { en: string; te: string };
  costInfo: { en: string; te: string };
  bgColor: string;
  accentColor: string;
}

// Placeholder solar company ads - Replace with actual advertisers
const ads: Ad[] = [
  {
    id: "sunpower",
    company: "SunPower Solar",
    tagline: { 
      en: "Premium Solar Solutions", 
      te: "ప్రీమియం సోలార్ సొల్యూషన్స్" 
    },
    offer: { 
      en: "Get 10% OFF on Installation", 
      te: "ఇన్‌స్టాలేషన్‌పై 10% తగ్గింపు" 
    },
    costInfo: {
      en: "SunPower Solar offers premium rooftop solar systems. Pricing: 1 kW system: Rs. 65,000 (after subsidy: Rs. 35,000), 2 kW system: Rs. 1,20,000 (after subsidy: Rs. 60,000), 3 kW system: Rs. 1,70,000 (after subsidy: Rs. 92,000). Special 10% discount available now. Contact UdGEM for installation support.",
      te: "SunPower Solar ప్రీమియం రూఫ్‌టాప్ సోలార్ సిస్టమ్‌లను అందిస్తుంది. ధరలు: 1 kW సిస్టమ్: Rs. 65,000 (సబ్సిడీ తర్వాత: Rs. 35,000), 2 kW సిస్టమ్: Rs. 1,20,000 (సబ్సిడీ తర్వాత: Rs. 60,000), 3 kW సిస్టమ్: Rs. 1,70,000 (సబ్సిడీ తర్వాత: Rs. 92,000). ప్రత్యేక 10% తగ్గింపు ఇప్పుడు అందుబాటులో ఉంది."
    },
    bgColor: "from-orange-500 to-yellow-500",
    accentColor: "bg-orange-600"
  },
  {
    id: "greenergy",
    company: "Green Energy India",
    tagline: { 
      en: "Trusted by 50,000+ Homes", 
      te: "50,000+ ఇళ్లు నమ్ముతున్నాయి" 
    },
    offer: { 
      en: "Free Site Survey", 
      te: "ఉచిత సైట్ సర్వే" 
    },
    costInfo: {
      en: "Green Energy India provides affordable solar solutions. Pricing: 1 kW system: Rs. 60,000 (after subsidy: Rs. 30,000), 2 kW system: Rs. 1,10,000 (after subsidy: Rs. 50,000), 3 kW system: Rs. 1,60,000 (after subsidy: Rs. 82,000). Free site survey included. EMI options available from Rs. 1,500/month.",
      te: "Green Energy India అందుబాటు ధరలో సోలార్ సొల్యూషన్లు అందిస్తుంది. ధరలు: 1 kW సిస్టమ్: Rs. 60,000 (సబ్సిడీ తర్వాత: Rs. 30,000), 2 kW సిస్టమ్: Rs. 1,10,000 (సబ్సిడీ తర్వాత: Rs. 50,000), 3 kW సిస్టమ్: Rs. 1,60,000 (సబ్సిడీ తర్వాత: Rs. 82,000). ఉచిత సైట్ సర్వే. Rs. 1,500/నెల నుండి EMI ఆప్షన్లు."
    },
    bgColor: "from-green-600 to-emerald-500",
    accentColor: "bg-green-700"
  },
  {
    id: "tatapower",
    company: "Tata Power Solar",
    tagline: { 
      en: "India's Leading Brand", 
      te: "భారతదేశ అగ్రశ్రేణి బ్రాండ్" 
    },
    offer: { 
      en: "25 Years Warranty", 
      te: "25 సంవత్సరాల వారంటీ" 
    },
    costInfo: {
      en: "Tata Power Solar - India's most trusted brand. Pricing: 1 kW system: Rs. 70,000 (after subsidy: Rs. 40,000), 2 kW system: Rs. 1,30,000 (after subsidy: Rs. 70,000), 3 kW system: Rs. 1,85,000 (after subsidy: Rs. 1,07,000). Industry-leading 25 years warranty. Premium quality panels with highest efficiency.",
      te: "Tata Power Solar - భారతదేశంలో అత్యంత నమ్మకమైన బ్రాండ్. ధరలు: 1 kW సిస్టమ్: Rs. 70,000 (సబ్సిడీ తర్వాత: Rs. 40,000), 2 kW సిస్టమ్: Rs. 1,30,000 (సబ్సిడీ తర్వాత: Rs. 70,000), 3 kW సిస్టమ్: Rs. 1,85,000 (సబ్సిడీ తర్వాత: Rs. 1,07,000). 25 సంవత్సరాల వారంటీ."
    },
    bgColor: "from-blue-600 to-blue-500",
    accentColor: "bg-blue-700"
  },
  {
    id: "adanisolar",
    company: "Adani Solar",
    tagline: { 
      en: "Power Your Future", 
      te: "మీ భవిష్యత్తుకు శక్తి" 
    },
    offer: { 
      en: "Easy EMI Options", 
      te: "సులభ EMI ఆప్షన్లు" 
    },
    costInfo: {
      en: "Adani Solar offers flexible payment options. Pricing: 1 kW system: Rs. 62,000 (after subsidy: Rs. 32,000), 2 kW system: Rs. 1,15,000 (after subsidy: Rs. 55,000), 3 kW system: Rs. 1,65,000 (after subsidy: Rs. 87,000). Zero down payment EMI starting Rs. 1,200/month. Quick installation within 7 days.",
      te: "Adani Solar సౌకర్యవంతమైన చెల్లింపు ఆప్షన్లు అందిస్తుంది. ధరలు: 1 kW సిస్టమ్: Rs. 62,000 (సబ్సిడీ తర్వాత: Rs. 32,000), 2 kW సిస్టమ్: Rs. 1,15,000 (సబ్సిడీ తర్వాత: Rs. 55,000), 3 kW సిస్టమ్: Rs. 1,65,000 (సబ్సిడీ తర్వాత: Rs. 87,000). జీరో డౌన్ పేమెంట్ EMI Rs. 1,200/నెల నుండి."
    },
    bgColor: "from-indigo-600 to-purple-500",
    accentColor: "bg-indigo-700"
  }
];

// Export ads for use in ChatBot
export { ads };
export type { Ad };

export default function AdBanner() {
  const { language, t } = useLanguage();

  const handleLearnMore = (ad: Ad) => {
    // Dispatch custom event to open chatbot with product info
    const event = new CustomEvent('openChatWithProduct', { 
      detail: { 
        company: ad.company,
        costInfo: language === "en" ? ad.costInfo.en : ad.costInfo.te 
      } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="hidden lg:block w-64 flex-shrink-0 space-y-4 sticky top-28" data-testid="ad-banner-container">
      <p className="text-xs text-muted-foreground text-center uppercase tracking-wide">
        {t("Sponsored", "ప్రకటనలు")}
      </p>
      
      {ads.map((ad, index) => (
        <div
          key={ad.id}
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
          
          {/* CTA */}
          <button 
            onClick={() => handleLearnMore(ad)}
            className="mt-2 w-full bg-white/20 hover:bg-white/30 transition-colors text-white text-xs font-medium py-2 px-3 rounded flex items-center justify-center gap-1"
            data-testid={`button-learn-more-${ad.id}`}
          >
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
