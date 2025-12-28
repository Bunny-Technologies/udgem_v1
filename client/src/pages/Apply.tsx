import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { FileText, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  state: z.string().min(1, "Please select a state"),
  district: z.string().min(2, "Please enter your district/city"),
  address: z.string().min(10, "Please enter your full address"),
  householdType: z.string().min(1, "Please select household type"),
  ownership: z.string().min(1, "Please select ownership status"),
  monthlyUnits: z.string().min(1, "Please enter your monthly consumption"),
  proposedKw: z.string().min(1, "Please enter proposed capacity"),
  discomNumber: z.string().optional(),
  category: z.string().min(1, "Please select a category"),
  referralSource: z.string().min(1, "Please select how you heard about us"),
  notes: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function Apply() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      state: "",
      district: "",
      address: "",
      householdType: "",
      ownership: "",
      monthlyUnits: "",
      proposedKw: "",
      discomNumber: "",
      category: "",
      referralSource: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ApplicationForm) => {
      return await apiRequest("POST", "/api/applications", data);
    },
    onSuccess: () => {
      setLocation("/thank-you");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: t("Submission Failed", "సమర్పణ విఫలమైంది"),
        description: error.message || t("Please try again later", "దయచేసి తర్వాత మళ్ళీ ప్రయత్నించండి"),
      });
    },
  });

  const onSubmit = (data: ApplicationForm) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-apply-title">
            {t("Apply for PM Surya Ghar", "PM సూర్య ఘర్ కోసం దరఖాస్తు చేయండి")}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t("Register your interest and get guidance from our team", "మీ ఆసక్తిని నమోదు చేసి మా బృందం నుండి మార్గదర్శకత్వం పొందండి")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-4 bg-solar/10 rounded-lg border border-solar/20">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-solar flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">{t("Important Note", "ముఖ్యమైన గమనిక")}</p>
                <p className="text-muted-foreground">
                  {t(
                    "This form is for interest registration and guidance only. The formal subsidy application happens on the official government portal (pmsuryaghar.gov.in). UdGEM helps with awareness, documentation, and vendor linking.",
                    "ఈ ఫారమ్ ఆసక్తి నమోదు మరియు మార్గదర్శకత్వం కోసం మాత్రమే. అధికారిక సబ్సిడీ దరఖాస్తు ప్రభుత్వ పోర్టల్ (pmsuryaghar.gov.in) లో జరుగుతుంది. UdGEM అవగాహన, డాక్యుమెంటేషన్ మరియు వెండార్ లింకింగ్‌లో సహాయపడుతుంది."
                  )}
                </p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader className="bg-primary/5 border-b border-border">
              <CardTitle className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <span>{t("Application Form", "దరఖాస్తు ఫారమ్")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Full Name *", "పూర్తి పేరు *")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("Enter your full name", "మీ పూర్తి పేరు నమోదు చేయండి")} {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Mobile Number *", "మొబైల్ నంబర్ *")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("10-digit mobile number", "10 అంకెల మొబైల్ నంబర్")} {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Email Address *", "ఇమెయిల్ చిరునామా *")}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("State *", "రాష్ట్రం *")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-state">
                                <SelectValue placeholder={t("Select state", "రాష్ట్రాన్ని ఎంచుకోండి")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="andhra-pradesh">{t("Andhra Pradesh", "ఆంధ్రప్రదేశ్")}</SelectItem>
                              <SelectItem value="telangana">{t("Telangana", "తెలంగాణ")}</SelectItem>
                              <SelectItem value="other">{t("Other", "ఇతర")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("District / City *", "జిల్లా / నగరం *")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("Enter your district or city", "మీ జిల్లా లేదా నగరాన్ని నమోదు చేయండి")} {...field} data-testid="input-district" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="householdType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Household Type *", "గృహ రకం *")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-household">
                                <SelectValue placeholder={t("Select type", "రకాన్ని ఎంచుకోండి")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="independent">{t("Independent House", "స్వతంత్ర ఇల్లు")}</SelectItem>
                              <SelectItem value="apartment">{t("Apartment", "అపార్ట్‌మెంట్")}</SelectItem>
                              <SelectItem value="other">{t("Other", "ఇతర")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ownership"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Ownership Status *", "యాజమాన్య స్థితి *")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-ownership">
                                <SelectValue placeholder={t("Select status", "స్థితిని ఎంచుకోండి")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="owner">{t("Owner", "యజమాని")}</SelectItem>
                              <SelectItem value="tenant">{t("Tenant", "అద్దెదారు")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="monthlyUnits"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Monthly Consumption (Units) *", "నెలవారీ వినియోగం (యూనిట్లు) *")}</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder={t("e.g., 200", "ఉదా., 200")} {...field} data-testid="input-units" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="proposedKw"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Proposed Capacity (kW) *", "ప్రతిపాదిత సామర్థ్యం (kW) *")}</FormLabel>
                          <FormControl>
                            <Input type="number" step="0.5" placeholder={t("e.g., 3", "ఉదా., 3")} {...field} data-testid="input-kw" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="discomNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("DISCOM / Consumer Number", "DISCOM / వినియోగదారు సంఖ్య")}</FormLabel>
                          <FormControl>
                            <Input placeholder={t("Optional", "ఐచ్ఛికం")} {...field} data-testid="input-discom" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("Category *", "వర్గం *")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-category">
                                <SelectValue placeholder={t("Select category", "వర్గాన్ని ఎంచుకోండి")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">{t("General", "జనరల్")}</SelectItem>
                              <SelectItem value="obc">OBC</SelectItem>
                              <SelectItem value="sc">SC</SelectItem>
                              <SelectItem value="st">ST</SelectItem>
                              <SelectItem value="other">{t("Other", "ఇతర")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="referralSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("How did you hear about us? *", "మా గురించి మీకు ఎలా తెలిసింది? *")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-referral">
                                <SelectValue placeholder={t("Select source", "సోర్స్ ఎంచుకోండి")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="friend">{t("Friend / Family", "స్నేహితుడు / కుటుంబం")}</SelectItem>
                              <SelectItem value="social-media">{t("Social Media", "సోషల్ మీడియా")}</SelectItem>
                              <SelectItem value="ngo">NGO</SelectItem>
                              <SelectItem value="newspaper">{t("Newspaper", "వార్తాపత్రిక")}</SelectItem>
                              <SelectItem value="other">{t("Other", "ఇతర")}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Full Address *", "పూర్తి చిరునామా *")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("Enter your complete address with pincode", "పిన్‌కోడ్‌తో సహా మీ పూర్తి చిరునామాను నమోదు చేయండి")} 
                            className="resize-none" 
                            rows={3}
                            {...field} 
                            data-testid="input-address"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("Questions or Notes", "ప్రశ్నలు లేదా గమనికలు")}</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder={t("Any questions or additional information", "ఏవైనా ప్రశ్నలు లేదా అదనపు సమాచారం")} 
                            className="resize-none" 
                            rows={3}
                            {...field} 
                            data-testid="input-notes"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90" 
                    size="lg"
                    disabled={mutation.isPending}
                    data-testid="button-submit"
                  >
                    {mutation.isPending ? t("Submitting...", "సమర్పిస్తోంది...") : t("Submit Application", "దరఖాస్తు సమర్పించండి")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
