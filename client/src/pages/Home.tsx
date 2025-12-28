import { Link } from "wouter";
import { Sun, Zap, Building, Leaf, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

import indianHome1 from "@assets/stock_images/indian_family_house__ee5c6833.jpg";
import indianHome2 from "@assets/stock_images/indian_family_house__b187bc2e.jpg";
import indianHome3 from "@assets/stock_images/indian_family_house__a588d8d0.jpg";
import indianVillage1 from "@assets/stock_images/indian_village_home__49b9020d.jpg";
import indianVillage2 from "@assets/stock_images/indian_village_home__ded51408.jpg";
import indianVillage3 from "@assets/stock_images/indian_village_home__7dc39a04.jpg";
import indianTech1 from "@assets/stock_images/indian_technician_in_49d08f9b.jpg";
import indianTech2 from "@assets/stock_images/indian_technician_in_8e72c31d.jpg";

const carouselImages = [
  { src: indianHome1, alt: "Indian home with rooftop solar panels" },
  { src: indianVillage1, alt: "Solar power in Indian village" },
  { src: indianTech1, alt: "Indian technician installing solar panels" },
  { src: indianHome2, alt: "Solar installation on Indian house" },
  { src: indianVillage2, alt: "Rural Indian home with solar electricity" },
  { src: indianTech2, alt: "Solar panel installation worker in India" },
  { src: indianHome3, alt: "Indian family home with solar power" },
  { src: indianVillage3, alt: "Green energy for Indian villages" },
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20" style={{ height: "400px" }} data-testid="carousel-hero">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {imageErrors[index] ? (
            <div className="w-full h-full flex items-center justify-center bg-white/5">
              <div className="text-center text-white/60 p-4">
                <Sun className="h-12 w-12 mx-auto mb-2 text-solar" />
                <p className="text-sm">Image not found</p>
              </div>
            </div>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain bg-white/5"
              onError={() => handleImageError(index)}
            />
          )}
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-solar" : "bg-white/50 hover:bg-white/70"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t("Zero Power Bills for 30 Years", "30 సంవత్సరాలు విద్యుత్ బిల్లులు లేవు"),
      description: t(
        "Lock in your energy cost with rooftop solar. Avoid future tariff hikes and surcharges.",
        "రూఫ్‌టాప్ సోలార్‌తో మీ ఎనర్జీ ఖర్చును నిర్ధారించుకోండి. భవిష్యత్ టారిఫ్ పెరుగుదలలను నివారించండి."
      ),
    },
    {
      icon: Building,
      title: t("Bank EMI Instead of Power Bill", "విద్యుత్ బిల్లు బదులు బ్యాంక్ EMI"),
      description: t(
        "Use low-interest loans so your EMI replaces your electricity bill.",
        "తక్కువ వడ్డీ రుణాలను ఉపయోగించండి, మీ EMI మీ విద్యుత్ బిల్లును భర్తీ చేస్తుంది."
      ),
    },
    {
      icon: Leaf,
      title: t("Supports India's Net-Zero & SDGs", "భారతదేశ నెట్-జీరో & SDG లకు తోడ్పాటు"),
      description: t(
        "Contribute to climate action, green jobs, and reduced poverty.",
        "వాతావరణ చర్య, హరిత ఉద్యోగాలు మరియు పేదరికం తగ్గింపుకు సహకరించండి."
      ),
    },
  ];

  const steps = [
    { step: 1, title: t("Understand PM Surya Ghar", "PM సూర్య ఘర్ అర్థం చేసుకోండి"), description: t("Learn about the scheme and its benefits", "పథకం మరియు దాని ప్రయోజనాల గురించి తెలుసుకోండి") },
    { step: 2, title: t("Check Your Eligibility", "మీ అర్హతను తనిఖీ చేయండి"), description: t("See if you qualify for subsidy", "మీరు సబ్సిడీకి అర్హులా చూడండి") },
    { step: 3, title: t("Submit Interest on UdGEM", "UdGEM లో ఆసక్తి నమోదు చేయండి"), description: t("Register with us for guidance", "మార్గదర్శకత్వం కోసం మాతో నమోదు చేయండి") },
    { step: 4, title: t("Complete Official Application", "అధికారిక దరఖాస్తు పూర్తి చేయండి"), description: t("Apply on government portal", "ప్రభుత్వ పోర్టల్‌లో దరఖాస్తు చేయండి") },
    { step: 5, title: t("Install & Enjoy Free Power", "ఇన్‌స్టాల్ చేసి ఉచిత విద్యుత్ ఆనందించండి"), description: t("Get solar panels installed", "సోలార్ ప్యానెల్స్ ఇన్‌స్టాల్ చేయించుకోండి") },
  ];

  return (
    <Layout>
      <section className="hero relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-solar/20 text-solar px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sun className="h-4 w-4" />
                <span>{t("PM Surya Ghar Yojana Partner", "PM సూర్య ఘర్ యోజన భాగస్వామి")}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" data-testid="text-hero-title">
                {t("Uday Green Economy Mission", "ఉదయ గ్రీన్ ఎకానమీ మిషన్")}
                <span className="text-solar"> (UdGEM)</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
                {t("For the People, For the Nation, For Future Generations", "ప్రజల కోసం, దేశం కోసం, భవిష్యత్ తరాల కోసం")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/pm-surya-ghar">
                  <Button 
                    size="lg" 
                    className="bg-solar text-primary hover:bg-solar/90 font-semibold px-8"
                    data-testid="button-check-subsidy"
                  >
                    {t("Check Your Subsidy", "మీ సబ్సిడీ తనిఖీ చేయండి")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/apply">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 font-semibold px-8"
                    data-testid="button-apply-now"
                  >
                    {t("Apply Now", "ఇప్పుడే దరఖాస్తు చేయండి")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-foreground">
              {t("Mission One Lakh Houses", "మిషన్ ఒక లక్ష ఇళ్ళు")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t(
                "UdGEM's goal is to enable rooftop solar on 1,00,000 homes with target capacity of 3,00,000 kW, providing 30+ years of clean energy and zero power bills.",
                "UdGEM లక్ష్యం 1,00,000 ఇళ్లపై రూఫ్‌టాప్ సోలార్ ఏర్పాటు చేయడం, 3,00,000 kW సామర్థ్యంతో 30+ సంవత్సరాల పరిశుభ్రమైన శక్తిని అందించడం."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-border/50 bg-card hover:shadow-lg transition-shadow"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-solar/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-solar" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-foreground">
              {t("How It Works", "ఇది ఎలా పనిచేస్తుంది")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("Simple steps to get your rooftop solar system installed with government subsidy", "ప్రభుత్వ సబ్సిడీతో మీ రూఫ్‌టాప్ సోలార్ సిస్టమ్ ఇన్‌స్టాల్ చేసుకోవడానికి సులభ దశలు")}
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-solar to-green-500"></div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="relative text-center" data-testid={`step-${item.step}`}>
                  <div className="relative z-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-2xl md:text-3xl font-bold text-white">
            {t("Ready to Go Solar?", "సోలార్‌కు సిద్ధంగా ఉన్నారా?")}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t(
              "Join thousands of households benefiting from PM Surya Ghar Yojana. Get up to Rs. 78,000 subsidy on your rooftop solar installation.",
              "PM సూర్య ఘర్ యోజన నుండి ప్రయోజనం పొందుతున్న వేలాది కుటుంబాలలో చేరండి. మీ రూఫ్‌టాప్ సోలార్ ఇన్‌స్టాలేషన్‌పై Rs. 78,000 వరకు సబ్సిడీ పొందండి."
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-solar text-primary hover:bg-solar/90 font-semibold px-8">
                {t("Apply Now", "ఇప్పుడే దరఖాస్తు చేయండి")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pm-surya-ghar">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                {t("Learn More", "మరింత తెలుసుకోండి")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
