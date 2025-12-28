import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout, { useLanguage } from "@/components/Layout";

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-thankyou-title">
            {t("Thank You for Your Interest!", "మీ ఆసక్తికి ధన్యవాదాలు!")}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t(
              "Your application for PM Surya Ghar has been successfully submitted to UdGEM. Our team will review your information and contact you within",
              "PM సూర్య ఘర్ కోసం మీ దరఖాస్తు UdGEM కి విజయవంతంగా సమర్పించబడింది. మా బృందం మీ సమాచారాన్ని సమీక్షించి మీకు కాల్ చేస్తుంది"
            )}{" "}
            <strong className="text-foreground">{t("3-5 working days", "3-5 పని దినాలలో")}</strong>.
          </p>

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <h2 className="font-semibold text-foreground mb-4">{t("What happens next?", "తర్వాత ఏమి జరుగుతుంది?")}</h2>
              <ul className="text-left space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                  <span>{t("Our team will verify your details and assess your eligibility", "మా బృందం మీ వివరాలను ధృవీకరించి మీ అర్హతను అంచనా వేస్తుంది")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                  <span>{t("We'll call you to discuss the best solar solution for your home", "మీ ఇంటికి ఉత్తమ సోలార్ పరిష్కారాన్ని చర్చించడానికి మేము మీకు కాల్ చేస్తాము")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                  <span>{t("We'll guide you through the official government portal application", "అధికారిక ప్రభుత్వ పోర్టల్ దరఖాస్తు ద్వారా మేము మీకు మార్గదర్శకత్వం చేస్తాము")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                  <span>{t("After approval, we'll connect you with verified vendors for installation", "ఆమోదం తర్వాత, ఇన్‌స్టాలేషన్ కోసం ధృవీకరించిన వెండార్లతో మిమ్మల్ని కనెక్ట్ చేస్తాము")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t("Back to Home", "హోమ్‌కి తిరిగి వెళ్ళండి")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pm-surya-ghar">
              <Button size="lg" variant="outline">
                {t("Learn More About the Scheme", "పథకం గురించి మరింత తెలుసుకోండి")}
              </Button>
            </Link>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">{t("Need immediate assistance?", "తక్షణ సహాయం కావాలా?")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:+919399999047" className="flex items-center justify-center gap-2 text-primary hover:underline">
                <Phone className="h-4 w-4" />
                +91 93999 99047
              </a>
              <a href="mailto:info@udgem.in" className="flex items-center justify-center gap-2 text-primary hover:underline">
                <Mail className="h-4 w-4" />
                info@udgem.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
