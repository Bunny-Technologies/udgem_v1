import { Link } from "wouter";
import { Sun, Zap, Building, Leaf, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

import flyer1 from "@assets/WhatsApp_Image_2025-12-17_at_13.34.40_1766909816936.jpeg";
import flyer2 from "@assets/WhatsApp_Image_2025-12-17_at_13.34.42_1766909816935.jpeg";
import flyer3 from "@assets/WhatsApp_Image_2025-12-17_at_13.34.42_(1)_1766909816934.jpeg";
import flyer4 from "@assets/WhatsApp_Image_2025-12-17_at_13.34.39_1766909816936.jpeg";
import solarRooftop1 from "@assets/stock_images/rooftop_solar_panels_2de590f5.jpg";
import solarRooftop2 from "@assets/stock_images/rooftop_solar_panels_e16d52a0.jpg";

const features = [
  {
    icon: Zap,
    title: "Zero Power Bills for 30 Years",
    description: "Lock in your energy cost with rooftop solar. Avoid future tariff hikes and surcharges.",
  },
  {
    icon: Building,
    title: "Bank EMI Instead of Power Bill",
    description: "Use low-interest loans so your EMI replaces your electricity bill.",
  },
  {
    icon: Leaf,
    title: "Supports India's Net-Zero & SDGs",
    description: "Contribute to climate action, green jobs, and reduced poverty.",
  },
];

const steps = [
  { step: 1, title: "Understand PM Surya Ghar", description: "Learn about the scheme and its benefits" },
  { step: 2, title: "Check Your Eligibility", description: "See if you qualify for subsidy" },
  { step: 3, title: "Submit Interest on UdGEM", description: "Register with us for guidance" },
  { step: 4, title: "Complete Official Application", description: "Apply on government portal" },
  { step: 5, title: "Install & Enjoy Free Power", description: "Get solar panels installed" },
];

const carouselImages = [
  { src: flyer1, alt: "UdGEM PM Surya Ghar - Invest in Solar" },
  { src: flyer2, alt: "UdGEM Rooftop Solar - Subsidy Scheme" },
  { src: flyer3, alt: "UdGEM PM Surya Ghar Muft Bijli Yojana" },
  { src: flyer4, alt: "UdGEM Rooftop Solar Telugu" },
  { src: solarRooftop1, alt: "Residential rooftop solar installation" },
  { src: solarRooftop2, alt: "Solar panels on house roof" },
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
  return (
    <Layout>
      <section className="hero relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-solar/20 text-solar px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sun className="h-4 w-4" />
                <span>PM Surya Ghar Yojana Partner</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6" data-testid="text-hero-title">
                Uday Green Economy Mission
                <span className="text-solar"> (UdGEM)</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
                For the People, For the Nation, For Future Generations
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/pm-surya-ghar">
                  <Button 
                    size="lg" 
                    className="bg-solar text-primary hover:bg-solar/90 font-semibold px-8"
                    data-testid="button-check-subsidy"
                  >
                    Check Your Subsidy
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
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold text-foreground">
              Mission One Lakh Houses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              UdGEM's goal is to enable rooftop solar on 1,00,000 homes with target capacity of 3,00,000 kW, 
              providing 30+ years of clean energy and zero power bills.
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
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple steps to get your rooftop solar system installed with government subsidy
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
            Ready to Go Solar?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of households benefiting from PM Surya Ghar Yojana. 
            Get up to Rs. 78,000 subsidy on your rooftop solar installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-solar text-primary hover:bg-solar/90 font-semibold px-8">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pm-surya-ghar">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
