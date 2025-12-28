import { useState, useEffect } from "react";
import { Sun, Zap, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Ad {
  id: string;
  company: string;
  tagline: { en: string; te: string };
  offer: { en: string; te: string };
  costInfo: { en: string; te: string };
  bgColor: string;
  accentColor: string;
}

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

export { ads };
export type { Ad };

export default function AdBanner() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + ads.length) % ads.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % ads.length);

  const handleLearnMore = (ad: Ad) => {
    const event = new CustomEvent('openChatWithProduct', { 
      detail: { 
        company: ad.company,
        costInfo: language === "en" ? ad.costInfo.en : ad.costInfo.te 
      } 
    });
    window.dispatchEvent(event);
  };

  const currentAd = ads[currentSlide];

  return (
    <div className="w-full" data-testid="ad-banner-container">
      <p className="text-xs text-white/60 text-center uppercase tracking-wide mb-1">
        {t("Sponsored", "ప్రకటనలు")}
      </p>
      
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-colors"
          data-testid="button-ad-prev"
        >
          <ChevronUp className="h-4 w-4" />
        </button>

        <div className="pt-4 pb-4">
          <div
            className={`bg-gradient-to-br ${currentAd.bgColor} rounded-lg p-3 text-white shadow-lg transition-all duration-300`}
            data-testid={`ad-card-${currentSlide}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Sun className="h-4 w-4" />
              <span className="font-bold text-xs">{currentAd.company}</span>
            </div>
            
            <p className="text-xs text-white/90 mb-2">
              {language === "en" ? currentAd.tagline.en : currentAd.tagline.te}
            </p>
            
            <div className={`${currentAd.accentColor} rounded px-2 py-0.5 text-xs font-semibold mb-2 inline-flex items-center gap-1`}>
              <Zap className="h-3 w-3" />
              {language === "en" ? currentAd.offer.en : currentAd.offer.te}
            </div>
            
            <button 
              onClick={() => handleLearnMore(currentAd)}
              className="w-full bg-white/20 hover:bg-white/30 transition-colors text-white text-xs font-medium py-1.5 px-2 rounded flex items-center justify-center gap-1"
              data-testid={`button-learn-more-${currentAd.id}`}
            >
              {t("Learn More", "మరింత తెలుసుకోండి")}
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-colors"
          data-testid="button-ad-next"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="flex justify-center gap-1.5 mt-2">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-solar" : "bg-white/40 hover:bg-white/60"
            }`}
            data-testid={`button-ad-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
