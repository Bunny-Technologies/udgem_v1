import { Link } from "wouter";
import { Sun, Zap, Building, Leaf, ArrowRight, ChevronLeft, ChevronRight, FileText, Calculator, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import SolarImpactSlider from "@/components/SolarImpactSlider";
import InfoSlider from "@/components/InfoSlider";
import AdBanner from "@/components/AdBanner";

import teluguVillageHome from "@assets/generated_images/telugu_village_home_with_solar.png";
import indianWomanSolar from "@assets/generated_images/indian_woman_with_solar_power.png";
import villageAerialView from "@assets/generated_images/indian_village_solar_aerial_view.png";
import solarInstallWorker from "@assets/generated_images/indian_solar_installation_worker.png";
import indianFamilySolar from "@assets/generated_images/indian_family_with_solar_home.png";
import farmerSolarMeter from "@assets/generated_images/indian_farmer_checking_solar_meter.png";

const carouselImages = [
  { src: teluguVillageHome, alt: "తెలుగు గ్రామ ఇంటిపై సోలార్ ప్యానెల్స్" },
  { src: indianFamilySolar, alt: "సోలార్ గృహంతో భారతీయ కుటుంబం" },
  { src: villageAerialView, alt: "గ్రామంలో సోలార్ పై నుండి చూపు" },
  { src: indianWomanSolar, alt: "సోలార్ విద్యుత్ తో భారతీయ మహిళ" },
  { src: solarInstallWorker, alt: "సోలార్ ప్యానెల్ ఇన్‌స్టాలేషన్" },
  { src: farmerSolarMeter, alt: "రైతు సోలార్ మీటర్ చూస్తున్నారు" },
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
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20" data-testid="carousel-hero">
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

function QuickActions() {
  const { t } = useLanguage();

  const actions = [
    { icon: FileText, label: t("Apply Now", "ఇప్పుడే దరఖాస్తు"), href: "/apply", color: "bg-solar text-primary" },
    { icon: Calculator, label: t("Check Subsidy", "సబ్సిడీ తనిఖీ"), href: "/pm-surya-ghar", color: "bg-green-500 text-white" },
    { icon: Users, label: t("Find Vendor", "వెండర్ వెతకండి"), href: "/contact", color: "bg-blue-500 text-white" },
    { icon: Phone, label: t("Contact Us", "సంప్రదించండి"), href: "/contact", color: "bg-purple-500 text-white" },
  ];

  return (
    <div className="w-full bg-primary/95 border-t border-white/10" data-testid="quick-actions">
      <div className="w-full px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-white/70 text-sm font-medium mr-2">
            {t("Quick Actions:", "త్వరిత చర్యలు:")}
          </span>
          {actions.map((action, index) => (
            <Link key={index} href={action.href}>
              <Button
                size="sm"
                className={`${action.color} font-medium gap-2`}
                data-testid={`button-quick-action-${index}`}
              >
                <action.icon className="h-4 w-4" />
                {action.label}
              </Button>
            </Link>
          ))}
        </div>
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
      <SolarImpactSlider />

      <section className="hero relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="w-full px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_1fr] gap-4 lg:gap-6 min-h-[60vh] lg:min-h-[70vh]">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-solar/20 text-solar px-4 py-2 rounded-full text-sm font-medium mb-4 w-fit">
                <Sun className="h-4 w-4" />
                <span>{t("PM Surya Ghar Yojana Partner", "PM సూర్య ఘర్ యోజన భాగస్వామి")}</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4" data-testid="text-hero-title">
                {t("Uday Green Economy Mission", "ఉదయ గ్రీన్ ఎకానమీ మిషన్")}
                <span className="text-solar"> (UdGEM)</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed" data-testid="text-hero-subtitle">
                {t("For the People, For the Nation, For Future Generations", "ప్రజల కోసం, దేశం కోసం, భవిష్యత్ తరాల కోసం")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/pm-surya-ghar">
                  <Button 
                    size="lg" 
                    className="bg-solar text-primary hover:bg-solar/90 font-semibold px-6"
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
                    className="border-white text-white hover:bg-white/10 font-semibold px-6"
                    data-testid="button-apply-now"
                  >
                    {t("Apply Now", "ఇప్పుడే దరఖాస్తు చేయండి")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="h-64 lg:h-auto">
              <HeroCarousel />
            </div>

            <div className="hidden lg:flex flex-col gap-3 h-full">
              <div className="flex-1 min-h-0">
                <InfoSlider />
              </div>
              <div className="border-t border-white/20 pt-3">
                <AdBanner />
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickActions />

      <div className="lg:hidden bg-primary/90 py-6 px-4">
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2">
            <div className="flex-shrink-0 w-64">
              <InfoSlider />
            </div>
            <div className="flex-shrink-0 w-56">
              <AdBanner />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
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
        </section>

        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
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
        </section>
      </div>

      <section className="w-full bg-primary text-white py-12">
        <div className="w-full px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
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
