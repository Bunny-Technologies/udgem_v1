import { useState, useEffect } from "react";
import { Sun, Home, Zap, TrendingUp, MapPin, Leaf, Users, ChevronUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface InfoCard {
  id: string;
  icon: typeof Sun;
  title: { en: string; te: string };
  stat: { en: string; te: string };
  description: { en: string; te: string };
  bgColor: string;
}

const infoCards: InfoCard[] = [
  {
    id: "solar-capacity",
    icon: Sun,
    title: { en: "India Solar Capacity", te: "భారత సోలార్ సామర్థ్యం" },
    stat: { en: "130+ GW", te: "130+ GW" },
    description: { en: "40x growth since 2014", te: "2014 నుండి 40 రెట్లు వృద్ధి" },
    bgColor: "from-orange-500 to-amber-500"
  },
  {
    id: "pm-goal",
    icon: Home,
    title: { en: "PM Surya Ghar Goal", te: "PM సూర్య ఘర్ లక్ష్యం" },
    stat: { en: "1 Crore Homes", te: "1 కోటి ఇళ్లు" },
    description: { en: "Target by 2027", te: "2027 నాటికి లక్ష్యం" },
    bgColor: "from-blue-500 to-indigo-500"
  },
  {
    id: "subsidy",
    icon: Zap,
    title: { en: "Rooftop Subsidy", te: "రూఫ్‌టాప్ సబ్సిడీ" },
    stat: { en: "Up to ₹78,000", te: "గరిష్టంగా ₹78,000" },
    description: { en: "Central govt subsidy", te: "కేంద్ర ప్రభుత్వ సబ్సిడీ" },
    bgColor: "from-green-500 to-emerald-500"
  },
  {
    id: "units",
    icon: Zap,
    title: { en: "Monthly Benefit", te: "నెలవారీ ప్రయోజనం" },
    stat: { en: "300 Units", te: "300 యూనిట్లు" },
    description: { en: "Free power per month", te: "నెలకు ఉచిత విద్యుత్" },
    bgColor: "from-yellow-500 to-orange-500"
  },
  {
    id: "ap-update",
    icon: MapPin,
    title: { en: "Andhra Pradesh", te: "ఆంధ్రప్రదేశ్" },
    stat: { en: "31,000+ Units", te: "31,000+ యూనిట్లు" },
    description: { en: "Rooftop commissioned", te: "రూఫ్‌టాప్ కమీషన్" },
    bgColor: "from-purple-500 to-pink-500"
  },
  {
    id: "telangana",
    icon: MapPin,
    title: { en: "Telangana", te: "తెలంగాణ" },
    stat: { en: "TSREDCO Active", te: "TSREDCO సక్రియం" },
    description: { en: "Scheme via TSREDCO", te: "TSREDCO ద్వారా పథకం" },
    bgColor: "from-teal-500 to-cyan-500"
  },
  {
    id: "co2",
    icon: Leaf,
    title: { en: "CO2 Reduction", te: "CO2 తగ్గింపు" },
    stat: { en: "Major Impact", te: "పెద్ద ప్రభావం" },
    description: { en: "Long-term benefits", te: "దీర్ఘకాలిక ప్రయోజనాలు" },
    bgColor: "from-green-600 to-lime-500"
  },
  {
    id: "jobs",
    icon: Users,
    title: { en: "Green Jobs", te: "హరిత ఉద్యోగాలు" },
    stat: { en: "Lakhs of Jobs", te: "లక్షల ఉద్యోగాలు" },
    description: { en: "Solar sector employment", te: "సోలార్ రంగ ఉద్యోగాలు" },
    bgColor: "from-indigo-500 to-purple-500"
  }
];

export default function InfoSlider() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % infoCards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + infoCards.length) % infoCards.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % infoCards.length);

  const currentCard = infoCards[currentSlide];
  const Icon = currentCard.icon;

  return (
    <div className="flex flex-col" data-testid="info-slider-container">
      <p className="text-xs text-white/60 text-center uppercase tracking-wide mb-1">
        {language === "en" ? "Solar Facts" : "సోలార్ వాస్తవాలు"}
      </p>
      
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute -top-1 left-1/2 -translate-x-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-1 rounded-full transition-colors"
          data-testid="button-info-prev"
        >
          <ChevronUp className="h-4 w-4" />
        </button>

        <div className="py-5">
          <div
            className={`w-full bg-gradient-to-br ${currentCard.bgColor} rounded-lg p-3 text-white shadow-lg transition-all duration-300`}
            data-testid={`info-card-${currentSlide}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Icon className="h-4 w-4" />
              <span className="font-semibold text-xs">
                {language === "en" ? currentCard.title.en : currentCard.title.te}
              </span>
            </div>
            
            <p className="text-lg font-bold mb-1">
              {language === "en" ? currentCard.stat.en : currentCard.stat.te}
            </p>
            
            <p className="text-xs text-white/90">
              {language === "en" ? currentCard.description.en : currentCard.description.te}
            </p>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-1 rounded-full transition-colors"
          data-testid="button-info-next"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="flex justify-center gap-1 mt-1">
        {infoCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-solar" : "bg-white/30 hover:bg-white/50"
            }`}
            data-testid={`button-info-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
