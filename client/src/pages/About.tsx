import { Users, Target, Eye, CheckCircle, Heart, Home, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const benefits = [
  "End-to-end guidance for PM Surya Ghar applicants",
  "Focus on poor and middle-income families",
  "Strong local presence in AP & TS",
  "Transparent information about subsidies and loans",
  "Support with documentation and vendor linking",
  "Free consultation and site assessment guidance",
];

const beneficiaries = [
  { icon: Home, title: "Households", description: "Poor and middle-income families looking to reduce electricity costs" },
  { icon: Users, title: "Urban & Rural Families", description: "Both city dwellers and village residents eligible for the scheme" },
  { icon: Heart, title: "SC/ST Households", description: "Special drives and priority for underprivileged communities" },
  { icon: Globe, title: "Future Generations", description: "Contributing to a cleaner environment for our children" },
];

export default function About() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            About UdGEM
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Udaya Green Economy Mission - Empowering communities through sustainable solar energy
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                UdGEM (Udaya Green Economy Mission) is a green-economy initiative dedicated to 
                promoting rooftop solar adoption and sustainable projects across India, with a 
                primary focus on Andhra Pradesh and Telangana.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We serve as a bridge between the government's PM Surya Ghar Yojana and households 
                looking to benefit from solar energy subsidies. Our mission is to make clean energy 
                accessible to every Indian household while contributing to the nation's sustainable 
                development goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </CardContent>
              </Card>
              <Card className="bg-solar/10 border-solar/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-solar mb-2">1 Lakh</div>
                  <div className="text-sm text-muted-foreground">Target Homes</div>
                </CardContent>
              </Card>
              <Card className="bg-green-500/10 border-green-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">AP & TS</div>
                  <div className="text-sm text-muted-foreground">Coverage Area</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30+ Yrs</div>
                  <div className="text-sm text-muted-foreground">Clean Energy</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To transform how people live and work by offering user-friendly, future-forward 
                  green solutions. We aim to make solar energy adoption simple, affordable, and 
                  accessible to every household in India.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-solar">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-solar/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-solar" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become a global leader in green economy projects and sustainable solar solutions 
                  for all. We envision a future where every Indian home is powered by clean, 
                  renewable solar energy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why UdGEM?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support throughout your solar journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/50"
                data-testid={`benefit-${index}`}
              >
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Who Benefits?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our services are designed to help various segments of society
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
