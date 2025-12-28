import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, label: t("Phone", "ఫోన్"), value: "+91 93999 99047 / +91 73372 63156" },
    { icon: Mail, label: t("Email", "ఇమెయిల్"), value: "info@udgem.in" },
    { icon: MapPin, label: t("Location", "స్థానం"), value: t("Andhra Pradesh & Telangana, India", "ఆంధ్రప్రదేశ్ & తెలంగాణ, భారతదేశం") },
    { icon: Clock, label: t("Working Hours", "పని గంటలు"), value: t("Mon - Sat: 9:00 AM - 6:00 PM", "సోమ - శని: 9:00 AM - 6:00 PM") },
  ];

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
      toast({
        title: t("Message Sent", "సందేశం పంపబడింది"),
        description: t("We'll get back to you within 24-48 hours.", "24-48 గంటలలో మేము మీకు తిరిగి వస్తాము."),
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: t("Failed to send message", "సందేశం పంపడం విఫలమైంది"),
        description: error.message || t("Please try again later", "దయచేసి తర్వాత మళ్ళీ ప్రయత్నించండి"),
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    mutation.mutate(data);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            {t("Contact Us", "మమ్మల్ని సంప్రదించండి")}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t("Have questions about PM Surya Ghar or our services? We're here to help!", "PM సూర్య ఘర్ లేదా మా సేవల గురించి ప్రశ్నలు ఉన్నాయా? మేము సహాయం చేయడానికి ఇక్కడ ఉన్నాము!")}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-foreground mb-6">{t("Get in Touch", "సంప్రదించండి")}</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50"
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-solar/10 rounded-lg border border-solar/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t("Quick Response:", "త్వరిత ప్రతిస్పందన:")}</strong>{" "}
                  {t("We typically respond to all inquiries within 24-48 hours during business days.", "వ్యాపార దినాలలో అన్ని విచారణలకు మేము సాధారణంగా 24-48 గంటలలో స్పందిస్తాము.")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="bg-primary/5 border-b border-border">
                  <CardTitle className="flex items-center gap-3">
                    <Send className="h-5 w-5 text-primary" />
                    <span>{t("Send us a Message", "మాకు సందేశం పంపండి")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="h-16 w-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{t("Message Sent!", "సందేశం పంపబడింది!")}</h3>
                      <p className="text-muted-foreground mb-6">
                        {t("Thank you for reaching out. Our team will get back to you shortly.", "సంప్రదించినందుకు ధన్యవాదాలు. మా బృందం త్వరలో మీకు తిరిగి వస్తుంది.")}
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline">
                        {t("Send Another Message", "మరో సందేశం పంపండి")}
                      </Button>
                    </div>
                  ) : (
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
                                  <Input placeholder={t("Your name", "మీ పేరు")} {...field} data-testid="input-contact-name" />
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
                                  <Input type="email" placeholder="your@email.com" {...field} data-testid="input-contact-email" />
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
                                <FormLabel>{t("Phone Number *", "ఫోన్ నంబర్ *")}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t("10-digit mobile number", "10 అంకెల మొబైల్ నంబర్")} {...field} data-testid="input-contact-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t("Subject *", "విషయం *")}</FormLabel>
                                <FormControl>
                                  <Input placeholder={t("What's this about?", "ఇది దేని గురించి?")} {...field} data-testid="input-contact-subject" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("Message *", "సందేశం *")}</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder={t("How can we help you?", "మేము మీకు ఎలా సహాయం చేయగలం?")} 
                                  className="resize-none" 
                                  rows={5}
                                  {...field} 
                                  data-testid="input-contact-message"
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
                          data-testid="button-contact-submit"
                        >
                          {mutation.isPending ? t("Sending...", "పంపుతోంది...") : t("Send Message", "సందేశం పంపండి")}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
