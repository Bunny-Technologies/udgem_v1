import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

export default function ThankYou() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-thankyou-title">
            Thank You for Your Interest!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Your application for PM Surya Ghar has been successfully submitted to UdGEM. 
            Our team will review your information and contact you within <strong className="text-foreground">3-5 working days</strong>.
          </p>

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <h2 className="font-semibold text-foreground mb-4">What happens next?</h2>
              <ul className="text-left space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                  <span>Our team will verify your details and assess your eligibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                  <span>We'll call you to discuss the best solar solution for your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                  <span>We'll guide you through the official government portal application</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</span>
                  <span>After approval, we'll connect you with verified vendors for installation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pm-surya-ghar">
              <Button size="lg" variant="outline">
                Learn More About the Scheme
              </Button>
            </Link>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
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
