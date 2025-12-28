import { Users, Target, Eye, CheckCircle, Heart, Home, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout, { useLanguage } from "@/components/Layout";

export default function About() {
  const { t } = useLanguage();

  const benefits = [
    t("End-to-end guidance for PM Surya Ghar applicants", "PM సూర్య ఘర్ దరఖాస్తుదారులకు పూర్తి మార్గదర్శకత్వం"),
    t("Focus on poor and middle-income families", "పేద మరియు మధ్య తరగతి కుటుంబాలపై దృష్టి"),
    t("Strong local presence in AP & TS", "AP & TS లో బలమైన స్థానిక ఉనికి"),
    t("Transparent information about subsidies and loans", "సబ్సిడీలు మరియు రుణాల గురించి పారదర్శక సమాచారం"),
    t("Support with documentation and vendor linking", "డాక్యుమెంటేషన్ మరియు వెండార్ లింకింగ్‌లో సహాయం"),
    t("Free consultation and site assessment guidance", "ఉచిత సంప్రదింపు మరియు సైట్ అంచనా మార్గదర్శకత్వం"),
  ];

  const beneficiaries = [
    { icon: Home, title: t("Households", "గృహాలు"), description: t("Poor and middle-income families looking to reduce electricity costs", "విద్యుత్ ఖర్చులు తగ్గించుకోవాలనుకునే పేద మరియు మధ్య తరగతి కుటుంబాలు") },
    { icon: Users, title: t("Urban & Rural Families", "పట్టణ & గ్రామీణ కుటుంబాలు"), description: t("Both city dwellers and village residents eligible for the scheme", "పట్టణ మరియు గ్రామీణ నివాసులు ఈ పథకానికి అర్హులు") },
    { icon: Heart, title: t("SC/ST Households", "SC/ST గృహాలు"), description: t("Special drives and priority for underprivileged communities", "అణగారిన వర్గాలకు ప్రత్యేక ప్రచారాలు మరియు ప్రాధాన్యత") },
    { icon: Globe, title: t("Future Generations", "భవిష్యత్ తరాలు"), description: t("Contributing to a cleaner environment for our children", "మన పిల్లల కోసం పరిశుభ్రమైన వాతావరణానికి సహకారం") },
  ];

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-about-title">
            {t("About UdGEM", "UdGEM గురించి")}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t("Uday Green Economy Mission - Empowering communities through sustainable solar energy", "ఉదయ గ్రీన్ ఎకానమీ మిషన్ - సుస్థిర సౌర శక్తి ద్వారా సమాజాలను శక్తివంతం చేయడం")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{t("Who We Are", "మేము ఎవరు")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "UdGEM (Uday Green Economy Mission) is a green-economy initiative dedicated to promoting rooftop solar adoption and sustainable projects across India, with a primary focus on Andhra Pradesh and Telangana.",
                  "UdGEM (ఉదయ గ్రీన్ ఎకానమీ మిషన్) భారతదేశంలో రూఫ్‌టాప్ సోలార్ స్వీకరణ మరియు సుస్థిర ప్రాజెక్ట్‌లను ప్రోత్సహించడానికి అంకితమైన గ్రీన్-ఎకానమీ చొరవ, ప్రధానంగా ఆంధ్రప్రదేశ్ మరియు తెలంగాణపై దృష్టి పెట్టింది."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "We serve as a bridge between the government's PM Surya Ghar Yojana and households looking to benefit from solar energy subsidies. Our mission is to make clean energy accessible to every Indian household while contributing to the nation's sustainable development goals.",
                  "ప్రభుత్వ PM సూర్య ఘర్ యోజన మరియు సోలార్ ఎనర్జీ సబ్సిడీల ప్రయోజనం పొందాలనుకునే గృహాల మధ్య మేము వారధిగా పనిచేస్తాము. ప్రతి భారతీయ గృహానికి పరిశుభ్రమైన శక్తిని అందుబాటులో ఉంచడం మా లక్ష్యం."
                )}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-sm text-muted-foreground">{t("Partner Organizations", "భాగస్వామ్య సంస్థలు")}</div>
                </CardContent>
              </Card>
              <Card className="bg-solar/10 border-solar/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-solar mb-2">{t("1 Lakh", "1 లక్ష")}</div>
                  <div className="text-sm text-muted-foreground">{t("Target Homes", "లక్ష్య గృహాలు")}</div>
                </CardContent>
              </Card>
              <Card className="bg-green-500/10 border-green-500/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">AP & TS</div>
                  <div className="text-sm text-muted-foreground">{t("Coverage Area", "కవరేజ్ ప్రాంతం")}</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("30+ Yrs", "30+ సంవత్సరాలు")}</div>
                  <div className="text-sm text-muted-foreground">{t("Clean Energy", "పరిశుభ్రమైన శక్తి")}</div>
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
                  <h3 className="text-xl font-bold text-foreground">{t("Our Mission", "మా లక్ష్యం")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    "To transform how people live and work by offering user-friendly, future-forward green solutions. We aim to make solar energy adoption simple, affordable, and accessible to every household in India.",
                    "వినియోగదారు-స్నేహపూర్వక, భవిష్యత్తు-ఆధారిత గ్రీన్ పరిష్కారాలను అందించడం ద్వారా ప్రజలు ఎలా జీవిస్తారో, పనిచేస్తారో మార్చడం. భారతదేశంలోని ప్రతి గృహానికి సోలార్ ఎనర్జీ స్వీకరణను సులభం, సరసమైన మరియు అందుబాటులో ఉంచడం మా లక్ష్యం."
                  )}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-solar">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 bg-solar/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-solar" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t("Our Vision", "మా దృష్టి")}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t(
                    "To become a global leader in green economy projects and sustainable solar solutions for all. We envision a future where every Indian home is powered by clean, renewable solar energy.",
                    "గ్రీన్ ఎకానమీ ప్రాజెక్ట్‌లు మరియు అందరికీ సుస్థిర సోలార్ పరిష్కారాలలో గ్లోబల్ లీడర్ అవడం. ప్రతి భారతీయ ఇల్లు పరిశుభ్రమైన, పునరుత్పాదక సోలార్ ఎనర్జీతో శక్తివంతం అయ్యే భవిష్యత్తును మేము ఊహిస్తున్నాము."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("Why UdGEM?", "UdGEM ఎందుకు?")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("We provide comprehensive support throughout your solar journey", "మీ సోలార్ ప్రయాణంలో మేము సమగ్ర మద్దతు అందిస్తాము")}
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("Who Benefits?", "ఎవరు ప్రయోజనం పొందుతారు?")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("Our services are designed to help various segments of society", "మా సేవలు సమాజంలోని వివిధ వర్గాలకు సహాయపడేలా రూపొందించబడ్డాయి")}
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
