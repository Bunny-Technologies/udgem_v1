import { useState } from "react";
import { Sun, Zap, Banknote, Home, FileText, Calculator, ArrowRight, Info, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const benefits = [
  { icon: Sun, title: "Up to 300 Units/Month Free", description: "Generate your own electricity from rooftop solar panels" },
  { icon: Banknote, title: "Central Government Subsidy", description: "Direct subsidy transfer to your bank account" },
  { icon: Zap, title: "Reduced Grid Dependence", description: "Lower your monthly electricity bills significantly" },
  { icon: Home, title: "Net Metering", description: "Sell surplus power back to the grid and earn" },
];

const subsidySlabs = [
  { capacity: "0 - 2 kW", subsidy: "Rs. 30,000 per kW", example: "2 kW = Rs. 60,000" },
  { capacity: "2 - 3 kW", subsidy: "Rs. 18,000 per kW (additional)", example: "3 kW = Rs. 78,000" },
  { capacity: "Above 3 kW", subsidy: "Maximum Rs. 78,000", example: "5 kW = Rs. 78,000 (capped)" },
];

export default function PMSuryaGhar() {
  const [avgUnits, setAvgUnits] = useState<string>("");
  const [capacityKw, setCapacityKw] = useState<string>("");
  const [result, setResult] = useState<{ subsidy: number; recommendation: string } | null>(null);
  const [error, setError] = useState<string>("");

  const calculateSubsidy = () => {
    setError("");
    setResult(null);

    const units = parseInt(avgUnits);
    const capacity = parseFloat(capacityKw);

    if (isNaN(units) || units < 0) {
      setError("Please enter a valid number of units");
      return;
    }

    if (isNaN(capacity) || capacity <= 0) {
      setError("Please enter a valid capacity in kW");
      return;
    }

    let subsidy = 0;
    let recommendation = "";

    if (units <= 150) {
      recommendation = "Based on your consumption, we recommend a 1-2 kW system";
    } else if (units <= 300) {
      recommendation = "Based on your consumption, we recommend a 2-3 kW system";
    } else {
      recommendation = "Based on your consumption, we recommend a 3+ kW system";
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
            PM Surya Ghar: Muft Bijli Yojana
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Government scheme for rooftop solar installation with subsidy up to Rs. 78,000
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About the Scheme</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  PM Surya Ghar was launched by the Ministry of New and Renewable Energy (MNRE) 
                  in February 2024 with a goal to install rooftop solar panels on <strong className="text-foreground">1 crore households by March 2027</strong>.
                </p>
                <p className="leading-relaxed">
                  The scheme has a total budget outlay of <strong className="text-foreground">Rs. 75,021 crore</strong> and aims to 
                  make every household energy independent while contributing to India's clean energy goals.
                </p>
                <p className="leading-relaxed">
                  Eligible households can get central government subsidy directly transferred to 
                  their bank accounts, along with access to low-interest loans (~7%) for the remaining cost.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-solar/10 rounded-lg border border-solar/20">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-solar flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">Official Portal</p>
                    <p className="text-muted-foreground">
                      Apply directly at{" "}
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Subsidy Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Central government subsidy based on solar system capacity
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg overflow-hidden shadow-sm" data-testid="table-subsidy">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">System Capacity</th>
                  <th className="px-6 py-4 text-left font-semibold">Subsidy Rate</th>
                  <th className="px-6 py-4 text-left font-semibold">Example</th>
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
                <span>Subsidy Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="avgUnits" className="text-sm font-medium mb-2 block">
                    Average Monthly Consumption (Units)
                  </Label>
                  <Input
                    id="avgUnits"
                    type="number"
                    placeholder="e.g., 200"
                    value={avgUnits}
                    onChange={(e) => setAvgUnits(e.target.value)}
                    data-testid="input-avg-units"
                  />
                </div>
                <div>
                  <Label htmlFor="capacityKw" className="text-sm font-medium mb-2 block">
                    Desired System Capacity (kW)
                  </Label>
                  <Input
                    id="capacityKw"
                    type="number"
                    step="0.5"
                    placeholder="e.g., 3"
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
                Calculate Subsidy
              </Button>

              {error && (
                <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-lg text-sm" data-testid="text-error">
                  {error}
                </div>
              )}

              {result && (
                <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800" data-testid="result-box">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Subsidy</p>
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
              <strong>Disclaimer:</strong> Final eligibility and approval decisions are made by the government. 
              UdGEM only provides guidance, awareness, and support in the application process.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-solar text-primary hover:bg-solar/90 font-semibold">
                Apply with UdGEM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
