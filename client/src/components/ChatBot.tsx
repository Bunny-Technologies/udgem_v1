import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface FAQ {
  question: { en: string; te: string };
  answer: { en: string; te: string };
}

const faqs: FAQ[] = [
  {
    question: {
      en: "What is PM Surya Ghar scheme?",
      te: "PM సూర్య ఘర్ పథకం అంటే ఏమిటి?"
    },
    answer: {
      en: "PM Surya Ghar: Muft Bijli Yojana is a government scheme to install rooftop solar panels on households. It aims to reduce electricity bills and promote clean energy. You can get solar power up to 300 units per month and may export surplus to the grid where net-metering is available.",
      te: "PM సూర్య ఘర్: ముఫ్త్ బిజ్లీ యోజన అనేది గృహాలపై రూఫ్‌టాప్ సోలార్ ప్యానెల్‌లను ఇన్‌స్టాల్ చేయడానికి ప్రభుత్వ పథకం. ఇది విద్యుత్ బిల్లులను తగ్గించడానికి మరియు స్వచ్ఛమైన శక్తిని ప్రోత్సహించడానికి లక్ష్యంగా పెట్టుకుంది. మీరు నెలకు 300 యూనిట్ల వరకు సోలార్ పవర్ పొందవచ్చు."
    }
  },
  {
    question: {
      en: "What is the subsidy amount?",
      te: "సబ్సిడీ మొత్తం ఎంత?"
    },
    answer: {
      en: "The government provides subsidy support per kW with a total cap of around ₹78,000 for 3 kW systems. Approximately ₹30,000 per kW up to 2 kW. Exact amounts depend on latest government and DISCOM notifications.",
      te: "ప్రభుత్వం kW కు సబ్సిడీ మద్దతు అందిస్తుంది, 3 kW సిస్టమ్‌లకు మొత్తం ₹78,000 వరకు. 2 kW వరకు kW కు సుమారు ₹30,000. ఖచ్చితమైన మొత్తాలు తాజా ప్రభుత్వ మరియు DISCOM నోటిఫికేషన్‌లపై ఆధారపడి ఉంటాయి."
    }
  },
  {
    question: {
      en: "Who is eligible for this scheme?",
      te: "ఈ పథకానికి ఎవరు అర్హులు?"
    },
    answer: {
      en: "To be eligible, you need: your own roof suitable for solar installation, a valid electricity connection, and you should be from a poor or middle-income family. The scheme is mainly for residential households.",
      te: "అర్హత కోసం మీకు అవసరం: సోలార్ ఇన్‌స్టాలేషన్‌కు తగిన సొంత పైకప్పు, చెల్లుబాటు అయ్యే విద్యుత్ కనెక్షన్, మరియు మీరు పేద లేదా మధ్య-ఆదాయ కుటుంబం నుండి ఉండాలి. ఈ పథకం ప్రధానంగా గృహ గృహాలకు."
    }
  },
  {
    question: {
      en: "How do I apply?",
      te: "నేను ఎలా దరఖాస్తు చేయాలి?"
    },
    answer: {
      en: "To apply: 1) Register on the official portal pmsuryaghar.gov.in, 2) Choose an empanelled vendor, 3) Site inspection by technician, 4) Installation of solar panels, 5) Meter installation, 6) Subsidy credited to your bank account. UdGEM can help you with registrations and document collection.",
      te: "దరఖాస్తు చేయడానికి: 1) అధికారిక పోర్టల్ pmsuryaghar.gov.in లో నమోదు చేయండి, 2) ఎంపనెల్డ్ వెండర్‌ను ఎంచుకోండి, 3) టెక్నీషియన్ ద్వారా సైట్ తనిఖీ, 4) సోలార్ ప్యానెల్స్ ఇన్‌స్టాలేషన్, 5) మీటర్ ఇన్‌స్టాలేషన్, 6) మీ బ్యాంక్ ఖాతాకు సబ్సిడీ. UdGEM నమోదులు మరియు డాక్యుమెంట్ సేకరణలో మీకు సహాయం చేయగలదు."
    }
  },
  {
    question: {
      en: "What does UdGEM do?",
      te: "UdGEM ఏమి చేస్తుంది?"
    },
    answer: {
      en: "UdGEM (Uday Green Energy Mission) helps at the village level by: explaining the PM Surya Ghar scheme, helping with registrations and document collection, connecting you with approved vendors, and providing awareness, training and grievance support.",
      te: "UdGEM (ఉదయ గ్రీన్ ఎనర్జీ మిషన్) గ్రామ స్థాయిలో సహాయం చేస్తుంది: PM సూర్య ఘర్ పథకాన్ని వివరించడం, నమోదులు మరియు డాక్యుమెంట్ సేకరణలో సహాయం, ఆమోదించబడిన వెండర్లతో అనుసంధానం, మరియు అవగాహన, శిక్షణ మరియు ఫిర్యాదు మద్దతు అందించడం."
    }
  },
  {
    question: {
      en: "What size solar system do I need?",
      te: "నాకు ఎంత పరిమాణం సోలార్ సిస్టమ్ అవసరం?"
    },
    answer: {
      en: "A typical small house might use a 2-3 kW system. However, the final size must be confirmed by a technician after site inspection. It depends on your electricity usage and roof space available.",
      te: "ఒక సాధారణ చిన్న ఇంటికి 2-3 kW సిస్టమ్ అవసరం కావచ్చు. అయితే, సైట్ తనిఖీ తర్వాత టెక్నీషియన్ ద్వారా తుది పరిమాణాన్ని నిర్ధారించాలి. ఇది మీ విద్యుత్ వాడకం మరియు అందుబాటులో ఉన్న పైకప్పు స్థలంపై ఆధారపడి ఉంటుంది."
    }
  }
];

export default function ChatBot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneCollected, setIsPhoneCollected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const welcomeMessage = t(
    "Namaste! I'm UdGEM Assistant. Please share your mobile number so our team can contact you if needed.",
    "నమస్తే! నేను UdGEM అసిస్టెంట్. మా టీమ్ మిమ్మల్ని సంప్రదించగలిగేలా దయచేసి మీ మొబైల్ నంబర్ షేర్ చేయండి."
  );

  const afterPhoneMessage = t(
    "Thank you! How can I help you today? Please select a question below or type your query.",
    "ధన్యవాదాలు! నేను మీకు ఈ రోజు ఎలా సహాయం చేయగలను? దయచేసి క్రింద ఒక ప్రశ్నను ఎంచుకోండి లేదా మీ ప్రశ్నను టైప్ చేయండి."
  );

  const unknownQuestionResponse = t(
    "I don't have that exact information right now. I have forwarded your question to our support team at info@udgem.in. They will reach out to you shortly at the phone number you provided.",
    "నాకు ఆ సమాచారం ఇప్పుడు లేదు. మీ ప్రశ్నను మా సపోర్ట్ టీమ్‌కు info@udgem.in వద్ద ఫార్వార్డ్ చేసాను. మీరు అందించిన ఫోన్ నంబర్‌కు వారు త్వరలో మిమ్మల్ని సంప్రదిస్తారు."
  );

  // Listen for product inquiry events from AdBanner
  useEffect(() => {
    const handleProductInquiry = (event: CustomEvent<{ company: string; costInfo: string }>) => {
      const { company, costInfo } = event.detail;
      
      // Open chat
      setIsOpen(true);
      
      // If phone not collected, we need to wait for that first
      if (!isPhoneCollected) {
        // Store the pending message to show after phone collection
        const pendingMessage = t(
          `Tell me about ${company} solar prices`,
          `${company} సోలార్ ధరల గురించి చెప్పండి`
        );
        
        // Add a listener for when phone is collected
        const checkPhoneInterval = setInterval(() => {
          if (isPhoneCollected) {
            clearInterval(checkPhoneInterval);
            setMessages(prev => [
              ...prev,
              { id: Date.now(), text: pendingMessage, isBot: false },
              { id: Date.now() + 1, text: costInfo, isBot: true }
            ]);
          }
        }, 500);
        
        // Clear after 30 seconds if phone not collected
        setTimeout(() => clearInterval(checkPhoneInterval), 30000);
      } else {
        // Phone already collected, add message immediately
        const userQuestion = t(
          `Tell me about ${company} solar prices`,
          `${company} సోలార్ ధరల గురించి చెప్పండి`
        );
        
        setMessages(prev => [
          ...prev,
          { id: Date.now(), text: userQuestion, isBot: false },
          { id: Date.now() + 1, text: costInfo, isBot: true }
        ]);
      }
    };

    window.addEventListener('openChatWithProduct', handleProductInquiry as EventListener);
    return () => {
      window.removeEventListener('openChatWithProduct', handleProductInquiry as EventListener);
    };
  }, [isPhoneCollected, t]);

  const isValidPhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const handlePhoneSubmit = () => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (isValidPhone(phoneNumber)) {
      setIsPhoneCollected(true);
      setMessages([
        { id: 1, text: welcomeMessage, isBot: true },
        { id: 2, text: cleaned, isBot: false },
        { id: 3, text: afterPhoneMessage, isBot: true }
      ]);
    }
  };

  const handleFAQClick = (faq: FAQ) => {
    const question = language === "en" ? faq.question.en : faq.question.te;
    const answer = language === "en" ? faq.answer.en : faq.answer.te;
    
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: question, isBot: false },
      { id: Date.now() + 1, text: answer, isBot: true }
    ]);
  };

  const handleCustomQuestion = () => {
    if (!inputValue.trim()) return;
    
    const userQuestion = inputValue.trim();
    setInputValue("");
    
    const matchedFAQ = faqs.find(faq => {
      const q = language === "en" ? faq.question.en : faq.question.te;
      return userQuestion.toLowerCase().includes(q.toLowerCase().split(" ").slice(0, 3).join(" ").toLowerCase());
    });
    
    if (matchedFAQ) {
      const answer = language === "en" ? matchedFAQ.answer.en : matchedFAQ.answer.te;
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: userQuestion, isBot: false },
        { id: Date.now() + 1, text: answer, isBot: true }
      ]);
    } else {
      setMessages(prev => [
        ...prev,
        { id: Date.now(), text: userQuestion, isBot: false },
        { id: Date.now() + 1, text: unknownQuestionResponse, isBot: true }
      ]);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-solar text-primary pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-solar/90 transition-colors"
          data-testid="button-chat-open"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="font-semibold text-sm">{t("Talk to us", "మాతో మాట్లాడండి")}</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-xl shadow-2xl flex flex-col" style={{ height: "500px" }} data-testid="chatbot-container">
          <div className="bg-primary text-white p-4 rounded-t-xl flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-solar" />
              <span className="font-semibold">UdGEM Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              data-testid="button-chat-close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
            {!isPhoneCollected ? (
              <div className="space-y-4">
                <div className="bg-primary/10 text-foreground p-3 rounded-lg rounded-tl-none text-sm">
                  {welcomeMessage}
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder={t("Enter mobile number", "మొబైల్ నంబర్ నమోదు చేయండి")}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="pl-10"
                      data-testid="input-phone"
                    />
                  </div>
                  <Button
                    onClick={handlePhoneSubmit}
                    disabled={!isValidPhone(phoneNumber)}
                    data-testid="button-phone-submit"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div
                    key={msg.id}
                    data-testid={msg.isBot ? `text-bot-message-${index}` : `text-user-message-${index}`}
                    className={`p-3 rounded-lg text-sm ${
                      msg.isBot
                        ? "bg-primary/10 text-foreground rounded-tl-none"
                        : "bg-solar/20 text-foreground ml-auto rounded-tr-none max-w-[80%]"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </>
            )}
          </div>

          {isPhoneCollected && (
            <div className="p-3 border-t border-border bg-card space-y-2">
              <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleFAQClick(faq)}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                    data-testid={`button-faq-${index}`}
                  >
                    {language === "en" ? faq.question.en : faq.question.te}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder={t("Type your question...", "మీ ప్రశ్న టైప్ చేయండి...")}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleCustomQuestion()}
                  className="text-sm"
                  data-testid="input-question"
                />
                <Button onClick={handleCustomQuestion} size="icon" data-testid="button-send">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
