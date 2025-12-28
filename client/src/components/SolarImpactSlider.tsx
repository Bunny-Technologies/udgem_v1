import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * SolarImpactSlider Component
 * 
 * Displays verified solar energy statistics for India in a scrolling news bulletin.
 * Uses current language setting (English or Telugu).
 * 
 * To update statistics:
 * - Edit the 'slides' array below
 * - Each slide has 'en' (English) and 'te' (Telugu) text
 * - Numbers and facts should be verified from official sources
 */

interface Slide {
  en: string;
  te: string;
}

// Solar impact statistics - Update these as needed
const slides: Slide[] = [
  {
    en: "India now has over 130 GW of installed solar capacity – a 40x increase since 2014.",
    te: "భారతదేశం ఇప్పుడు 130 GWకు పైగా సోలార్ సామర్థ్యం కలిగి ఉంది – 2014తో పోలిస్తే 40 రెట్లు పెరిగింది."
  },
  {
    en: "India is the world's 3rd largest solar power producer after China and the USA.",
    te: "భారతదేశం సోలార్ విద్యుత్ ఉత్పత్తిలో ప్రపంచంలో 3వ స్థానంలో ఉంది – చైనా, అమెరికా తర్వాత."
  },
  {
    en: "More than 100 GW comes from large utility-scale solar parks across India.",
    te: "భారతదేశంలో 100 GWకు పైగా సామర్థ్యం భారీ సోలార్ పార్కుల ద్వారా ఉత్పత్తి అవుతోంది."
  },
  {
    en: "Rajasthan alone contributes over 36 GW – the highest solar capacity in any Indian state.",
    te: "రాజస్థాన్ రాష్ట్రం ఒక్కటే 36 GWకు పైగా సోలార్ సామర్థ్యంతో దేశంలో ముందుంది."
  },
  {
    en: "Under PM Surya Ghar, nearly 24 lakh homes have installed rooftop solar systems.",
    te: "PM సూర్య ఘర్ పథకం కింద దాదాపు 24 లక్షల ఇళ్లపై సోలార్ వ్యవస్థలు ఏర్పాటు అయ్యాయి."
  },
  {
    en: "The goal is to solarize 1 crore households by 2027 with up to 300 units per month.",
    te: "2027 నాటికి 1 కోటి ఇళ్లకు నెలకు 300 యూనిట్ల వరకు సోలార్ విద్యుత్ అందించడం లక్ష్యం."
  },
  {
    en: "Rooftop solar can reduce over 720 million tonnes of CO2 emissions in 25 years.",
    te: "రూఫ్‌టాప్ సోలార్ వల్ల 25 సంవత్సరాల్లో 720 మిలియన్ టన్నుల CO2 ఉద్గారాలు తగ్గుతాయి."
  },
  {
    en: "India's solar sector provides jobs to over 3 lakh people nationwide.",
    te: "భారతదేశ సోలార్ రంగంలో దేశవ్యాప్తంగా 3 లక్షల మందికి పైగా ఉపాధి లభిస్తోంది."
  }
];

export default function SolarImpactSlider() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Get text based on current language
  const currentText = language === "en" ? slides[currentSlide].en : slides[currentSlide].te;

  return (
    <div
      className="bg-gradient-to-r from-solar via-yellow-500 to-solar text-primary py-2 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      data-testid="solar-impact-slider"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3">
          {/* Bulletin label */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-primary text-solar px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <span>{t("Latest", "తాజా")}</span>
            </div>
          </div>

          {/* Slide content - single language */}
          <div className="flex-1 min-w-0">
            <div
              key={currentSlide}
              className="animate-fade-in"
              data-testid={`slide-${currentSlide}`}
            >
              <p className="font-semibold text-sm md:text-base text-primary truncate md:whitespace-normal">
                {currentText}
              </p>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex-shrink-0 flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
