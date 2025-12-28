import { useState } from "react";
import { Sun, Zap, Banknote, Home, Calculator, ArrowRight, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import Layout, { useLanguage } from "@/components/Layout";

export default function PMSuryaGhar() {
  const { t } = useLanguage();
  const [avgUnits, setAvgUnits] = useState<string>("");
  const [capacityKw, setCapacityKw] = useState<string>("");
  const [result, setResult] = useState<{ subsidy: number; recommendation: string } | null>(null);
  const [error, setError] = useState<string>("");

  const benefits = [
    { icon: Sun, title: t("Up to 300 Units/Month Free", "నెలకు 300 యూనిట్ల వరకు ఉచితం"), description: t("Generate your own electricity from rooftop solar panels", "రూఫ్‌టాప్ సోలార్ ప్యానెల్స్ నుండి మీ స్వంత విద్యుత్ ఉత్పత్తి చేసుకోండి") },
    { icon: Banknote, title: t("Central Government Subsidy", "కేంద్ర ప్రభుత్వ సబ్సిడీ"), description: t("Direct subsidy transfer to your bank account", "మీ బ్యాంక్ ఖాతాకు నేరుగా సబ్సిడీ బదిలీ") },
    { icon: Zap, title: t("Reduced Grid Dependence", "గ్రిడ్ ఆధారపడటం తగ్గింపు"), description: t("Lower your monthly electricity bills significantly", "మీ నెలవారీ విద్యుత్ బిల్లులను గణనీయంగా తగ్గించండి") },
    { icon: Home, title: t("Net Metering", "నెట్ మీటరింగ్"), description: t("Sell surplus power back to the grid and earn", "అదనపు విద్యుత్‌ను గ్రిడ్‌కు అమ్మి సంపాదించండి") },
  ];

  const subsidySlabs = [
    { capacity: "0 - 2 kW", subsidy: t("Rs. 30,000 per kW", "kW కి Rs. 30,000"), example: t("2 kW = Rs. 60,000", "2 kW = Rs. 60,000") },
    { capacity: "2 - 3 kW", subsidy: t("Rs. 18,000 per kW (additional)", "kW కి Rs. 18,000 (అదనపు)"), example: t("3 kW = Rs. 78,000", "3 kW = Rs. 78,000") },
    { capacity: t("Above 3 kW", "3 kW పైన"), subsidy: t("Maximum Rs. 78,000", "గరిష్టం Rs. 78,000"), example: t("5 kW = Rs. 78,000 (capped)", "5 kW = Rs. 78,000 (పరిమితి)") },
  ];

  const calculateSubsidy = () => {
    setError("");
    setResult(null);

    const units = parseInt(avgUnits);
    const capacity = parseFloat(capacityKw);

    if (isNaN(units) || units < 0) {
      setError(t("Please enter a valid number of units", "దయచేసి చెల్లుబాటు అయ్యే యూనిట్ల సంఖ్యను నమోదు చేయండి"));
      return;
    }

    if (isNaN(capacity) || capacity <= 0) {
      setError(t("Please enter a valid capacity in kW", "దయచేసి kW లో చెల్లుబాటు అయ్యే సామర్థ్యాన్ని నమోదు చేయండి"));
      return;
    }

    let subsidy = 0;
    let recommendation = "";

    if (units <= 150) {
      recommendation = t("Based on your consumption, we recommend a 1-2 kW system", "మీ వినియోగం ఆధారంగా, మేము 1-2 kW సిస్టమ్‌ను సిఫార్సు చేస్తున్నాము");
    } else if (units <= 300) {
      recommendation = t("Based on your consumption, we recommend a 2-3 kW system", "మీ వినియోగం ఆధారంగా, మేము 2-3 kW సిస్టమ్‌ను సిఫార్సు చేస్తున్నాము");
    } else {
      recommendation = t("Based on your consumption, we recommend a 3+ kW system", "మీ వినియోగం ఆధారంగా, మేము 3+ kW సిస్టమ్‌ను సిఫార్సు చేస్తున్నాము");
    }

    if (capacity <= 2) {
      subsidy = 30000 * capacity;
    } else if (capacity <= 3) {
      subsidy = 30000 * 2 + 18000 * (capacity - 2);
    } else {
      subsidy = 78000;
    }

    setResult({ subsidy: Math.round(subsidy), recommendation });
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pm-surya-title">
            {t("PM Surya Ghar: Muft Bijli Yojana", "PM సూర్య ఘర్: ముఫ్త్ బిజ్లీ యోజన")}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t("Government scheme for rooftop solar installation with subsidy up to Rs. 78,000", "Rs. 78,000 వరకు సబ్సిడీతో రూఫ్‌టాప్ సోలార్ ఇన్‌స్టాలేషన్ కోసం ప్రభుత్వ పథకం")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{t("About the Scheme", "పథకం గురించి")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  {t(
                    "PM Surya Ghar was launched by the Ministry of New and Renewable Energy (MNRE) in February 2024 with a goal to install rooftop solar panels on",
                    "PM సూర్య ఘర్‌ను న్యూ అండ్ రిన్యూవబుల్ ఎనర్జీ మంత్రిత్వ శాఖ (MNRE) ఫిబ్రవరి 2024లో ప్రారంభించింది, లక్ష్యం"
                  )}{" "}
                  <strong className="text-foreground">{t("1 crore households by March 2027", "మార్చి 2027 నాటికి 1 కోటి గృహాలపై రూఫ్‌టాప్ సోలార్ ప్యానెల్స్ ఇన్‌స్టాల్ చేయడం")}</strong>.
                </p>
                <p className="leading-relaxed">
                  {t(
                    "The scheme has a total budget outlay of",
                    "ఈ పథకం మొత్తం బడ్జెట్ కేటాయింపు"
                  )}{" "}
                  <strong className="text-foreground">{t("Rs. 75,021 crore", "Rs. 75,021 కోట్లు")}</strong>{" "}
                  {t(
                    "and aims to make every household energy independent while contributing to India's clean energy goals.",
                    "మరియు భారతదేశ క్లీన్ ఎనర్జీ లక్ష్యాలకు సహకరిస్తూ ప్రతి గృహాన్ని ఎనర్జీ స్వతంత్రంగా చేయడం లక్ష్యం."
                  )}
                </p>
                <p className="leading-relaxed">
                  {t(
                    "Eligible households can get central government subsidy directly transferred to their bank accounts, along with access to low-interest loans (~7%) for the remaining cost.",
                    "అర్హులైన గృహాలు కేంద్ర ప్రభుత్వ సబ్సిడీని నేరుగా తమ బ్యాంక్ ఖాతాలకు బదిలీ చేయించుకోవచ్చు, మిగిలిన ఖర్చు కోసం తక్కువ వడ్డీ రుణాలు (~7%) కూడా పొందవచ్చు."
                  )}
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-solar/10 rounded-lg border border-solar/20">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-solar flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">{t("Official Portal", "అధికారిక పోర్టల్")}</p>
                    <p className="text-muted-foreground">
                      {t("Apply directly at", "నేరుగా దరఖాస్తు చేయండి")}{" "}
                      <a 
                        href="https://pmsuryaghar.gov.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        pmsuryaghar.gov.in
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-border/50">
                  <CardContent className="p-5">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{benefit.title}</h3>
                    <p className="text-muted-foreground text-xs">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("Subsidy Structure", "సబ్సిడీ నిర్మాణం")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("Central government subsidy based on solar system capacity", "సోలార్ సిస్టమ్ సామర్థ్యం ఆధారంగా కేంద్ర ప్రభుత్వ సబ్సిడీ")}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg overflow-hidden shadow-sm" data-testid="table-subsidy">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{t("System Capacity", "సిస్టమ్ సామర్థ్యం")}</th>
                  <th className="px-6 py-4 text-left font-semibold">{t("Subsidy Rate", "సబ్సిడీ రేటు")}</th>
                  <th className="px-6 py-4 text-left font-semibold">{t("Example", "ఉదాహరణ")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {subsidySlabs.map((slab, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{slab.capacity}</td>
                    <td className="px-6 py-4 text-muted-foreground">{slab.subsidy}</td>
                    <td className="px-6 py-4 text-solar font-medium">{slab.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-border">
              <CardTitle className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-primary" />
                <span>{t("Subsidy Calculator", "సబ్సిడీ కాలిక్యులేటర్")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="avgUnits" className="text-sm font-medium mb-2 block">
                    {t("Average Monthly Consumption (Units)", "సగటు నెలవారీ వినియోగం (యూనిట్లు)")}
                  </Label>
                  <Input
                    id="avgUnits"
                    type="number"
                    placeholder={t("e.g., 200", "ఉదా., 200")}
                    value={avgUnits}
                    onChange={(e) => setAvgUnits(e.target.value)}
                    data-testid="input-avg-units"
                  />
                </div>
                <div>
                  <Label htmlFor="capacityKw" className="text-sm font-medium mb-2 block">
                    {t("Desired System Capacity (kW)", "కావలసిన సిస్టమ్ సామర్థ్యం (kW)")}
                  </Label>
                  <Input
                    id="capacityKw"
                    type="number"
                    step="0.5"
                    placeholder={t("e.g., 3", "ఉదా., 3")}
                    value={capacityKw}
                    onChange={(e) => setCapacityKw(e.target.value)}
                    data-testid="input-capacity"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateSubsidy} 
                className="w-full bg-primary hover:bg-primary/90"
                data-testid="button-calculate"
              >
                {t("Calculate Subsidy", "సబ్సిడీ లెక్కించండి")}
              </Button>

              {error && (
                <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-lg text-sm" data-testid="text-error">
                  {error}
                </div>
              )}

              {result && (
                <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800" data-testid="result-box">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">{t("Estimated Subsidy", "అంచనా సబ్సిడీ")}</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                      Rs. {result.subsidy.toLocaleString('en-IN')}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">{result.recommendation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>{t("Disclaimer:", "నిరాకరణ:")}</strong>{" "}
              {t(
                "Final eligibility and approval decisions are made by the government. UdGEM only provides guidance, awareness, and support in the application process.",
                "తుది అర్హత మరియు ఆమోద నిర్ణయాలు ప్రభుత్వం తీసుకుంటుంది. UdGEM దరఖాస్తు ప్రక్రియలో మార్గదర్శకత్వం, అవగాహన మరియు మద్దతు మాత్రమే అందిస్తుంది."
              )}
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-solar text-primary hover:bg-solar/90 font-semibold">
                {t("Apply with UdGEM", "UdGEM తో దరఖాస్తు చేయండి")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
