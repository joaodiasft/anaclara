"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MessageCircle,
  Instagram,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle,
  Award,
  Clock,
  Phone,
  Copy,
  Check,
  Image as ImageIcon,
  DollarSign,
  Navigation,
  Heart,
  MessageSquare,
  HelpCircle,
  Star,
  X,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const addUTMs = (url: string) => {
  if (url.includes("?"))
    return `${url}&utm_source=instagram&utm_medium=bio&utm_campaign=studio_clara`;
  return `${url}?utm_source=instagram&utm_medium=bio&utm_campaign=studio_clara`;
};

export default function Home() {
  const [lastClicked, setLastClicked] = useState<string | null>(null);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [pricesOpen, setPricesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastClicked");
    if (saved) setLastClicked(saved);
  }, []);

  // Fechar modais com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (portfolioOpen) {
          setPortfolioOpen(false);
        } else if (pricesOpen) {
          setPricesOpen(false);
        } else if (locationOpen) {
          setLocationOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage, portfolioOpen, pricesOpen, locationOpen]);

  const testimonials = [
    {
      text: "Unhas perfeitas e duradouras! A Clara é incrível, super atenciosa e caprichosa. Recomendo de olhos fechados! 💗",
      author: "Ana Silva",
      rating: 5,
    },
    {
      text: "Ambiente super acolhedor e trabalho impecável. Minhas unhas estão lindas há mais de 3 semanas! Amo cada detalhe. ✨",
      author: "Julia Mendes",
      rating: 5,
    },
    {
      text: "Melhor nail designer da cidade! Sempre caprichada, profissional e super paciente. Vale cada centavo! 💎",
      author: "Mariana Costa",
      rating: 5,
    },
    {
      text: "Já fiz várias vezes e nunca me decepcionei. O Studio Clara é sinônimo de qualidade e dedicação. Super recomendo! 🌟",
      author: "Fernanda Lima",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const trackClick = (buttonName: string, url: string) => {
    console.log(`[Track] Clicked: ${buttonName}`, {
      url,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("lastClicked", buttonName);
    setLastClicked(buttonName);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "engagement",
        event_label: buttonName,
        value: 1,
      });
    }
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", { content_name: buttonName });
    }
  };

  const handleWhatsApp = (message?: string) => {
    const defaultMessage = "Olá! Gostaria de agendar um horário.";
    const finalMessage = encodeURIComponent(message || defaultMessage);
    const url = addUTMs(`https://wa.me/5562992846993?text=${finalMessage}`);
    trackClick("whatsapp_main", url);
    window.open(url, "_blank");
  };

  const portfolioImages = [
    "https://i.im.ge/2026/01/05/GT7eUW.7.jpeg",
    "https://i.im.ge/2026/01/05/GT7njf.4.jpeg",
    "https://i.im.ge/2026/01/05/GTDQBT.3.jpeg",
    "https://i.im.ge/2026/01/06/GTLzs6.WhatsApp-Image-2026-01-05-at-15-51-30-1.jpeg",
    "https://i.im.ge/2026/01/06/GTLf4z.WhatsApp-Image-2026-01-05-at-15-51-30-2.jpeg",
    "https://i.im.ge/2026/01/06/GTLVYS.WhatsApp-Image-2026-01-05-at-15-51-30.jpeg",
  ];

  const localImages = [
    "https://i.im.ge/2026/01/06/GTDaaF.l8.jpeg",
    "https://i.im.ge/2026/01/06/GTDdYz.l7.jpeg",
    "https://i.im.ge/2026/01/06/GTDqB6.l6.jpeg",
    "https://i.im.ge/2026/01/06/GTDShS.l5.jpeg",
    "https://i.im.ge/2026/01/06/GTD2oy.l4.jpeg",
    "https://i.im.ge/2026/01/06/GTD7yK.l3.jpeg",
    "https://i.im.ge/2026/01/06/GTDDH9.l2.jpeg",
    "https://i.im.ge/2026/01/06/GTDL1X.l1.jpeg",
  ];

  const services = [
    { name: "Banho de Gel", description: "Na unha natural", price: "R$ 80" },
    {
      name: "Gel na Tips",
      description: "Acabamento Natural",
      price: "R$ 110",
    },
    { name: "Fibra de Vidro", description: "Mais pedida", price: "R$ 120" },
    {
      name: "Manutenção Gel",
      description: "Até 25 dias",
      price: "R$ 110",
    },
    {
      name: "Manutenção Fibra",
      description: "Até 25 dias",
      price: "R$ 120",
    },
    {
      name: "Esmaltação em gel",
      description: "Completo",
      price: "R$ 45",
    },
    {
      name: "Nail Art",
      description: "Encapsulada / un",
      price: "R$ 20",
    },
  ];

  const nailModels = [
    {
      name: "Classic French",
      description: "O clássico que nunca sai de moda",
      image: portfolioImages[0],
      popular: true,
    },
    {
      name: "Ombré",
      description: "Degradê suave e elegante",
      image: portfolioImages[1],
      popular: false,
    },
    {
      name: "Nude com Detalhes",
      description: "Natural com toque especial",
      image: portfolioImages[2],
      popular: true,
    },
    {
      name: "Nail Art Colorida",
      description: "Designs únicos e personalizados",
      image: portfolioImages[3],
      popular: false,
    },
    {
      name: "Dourado Premium",
      description: "Luxo e sofisticação",
      image: portfolioImages[4],
      popular: true,
    },
    {
      name: "Minimalista",
      description: "Simplicidade e elegância",
      image: portfolioImages[5],
      popular: false,
    },
    {
      name: "Stiletto",
      description: "Formato alongado e moderno",
      image: portfolioImages[6],
      popular: false,
    },
    {
      name: "Almond",
      description: "Formato amendoado elegante",
      image: portfolioImages[7],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo dura?",
      answer:
        "O procedimento dura de 2 a 3 horas, dependendo do tipo de serviço escolhido. A durabilidade das unhas varia de 20 a 30 dias com os cuidados adequados.",
    },
    {
      question: "Precisa de manutenção? Com qual frequência?",
      answer:
        "Sim! Recomendamos manutenção a cada 20-25 dias para manter suas unhas sempre impecáveis. A manutenção ajuda a preservar a integridade e o visual das unhas.",
    },
    {
      question: "Como funciona o sinal/agenda?",
      answer:
        "O agendamento só é confirmado mediante pagamento de 50% do valor do procedimento (PIX ou link de cartão). O restante é pago no dia do atendimento. Para agendar, envie UMA mensagem no WhatsApp com: dia desejado, procedimento e preferência de horário (Manhã/Tarde/Noite).",
    },
    {
      question: "Política de atraso/cancelamento?",
      answer:
        "Tolerância máxima de 10 minutos. Atrasos acima disso terão acréscimo de R$ 10,00. Cancelamentos acima de 30 minutos de atraso não serão realizados e o sinal não será reembolsado. Pedimos que saia de casa com tempo - cada minuto é importante!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFF7FB]">
      {/* Hero Section */}
      <section className="pt-8 pb-6 px-4 max-w-md mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg bg-white">
            <Image
              src="https://i.im.ge/2025/12/04/4YS7PC.Stuido-Clara2.png"
              alt="Studio Clara Logo"
              fill
              className="object-cover"
              priority
              sizes="128px"
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#111827]">Studio Clara</h1>
            <a
              href={addUTMs(
                "https://www.instagram.com/studio_claraa1?igsh=d3pweGsxM21ubnMx"
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackClick(
                  "instagram",
                  "https://www.instagram.com/studio_claraa1"
                )
              }
              className="text-primary-support hover:text-primary inline-flex items-center gap-1 text-sm"
            >
              <Instagram className="w-4 h-4" />
              @studio_claraa1
            </a>
          </div>

          <p className="text-center text-[#111827]/80 text-lg font-medium">
            Transforme suas unhas com acabamento premium ✨
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#111827] shadow-sm border border-primary/20">
              ✅ Hora marcada
            </span>
            <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#111827] shadow-sm border border-primary/20">
              💎 Acabamento premium
            </span>
            <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#111827] shadow-sm border border-primary/20">
              ✨ Durabilidade
            </span>
            <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-[#111827] shadow-sm border border-primary/20">
              📍 Goiânia
            </span>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="px-4 pb-6 max-w-md mx-auto">
        <Button
          size="lg"
          variant="primary"
          className="w-full h-16 text-lg font-semibold bg-gradient-to-r from-[#FAD1E8] to-[#F7B7D2] hover:from-[#F7B7D2] hover:to-[#FAD1E8] text-[#111827] shadow-xl"
          onClick={() => handleWhatsApp()}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          AGENDAR AGORA no WhatsApp
        </Button>
        <p className="text-center text-sm text-[#111827]/70 mt-2">
          Respondo rapidinho ✨
        </p>
      </section>

      {/* Comece por aqui */}
      <section className="px-4 pb-8 max-w-md mx-auto space-y-3">
        <h2 className="text-xl font-semibold text-[#111827] text-center mb-4">
          Comece por aqui
        </h2>

        {/* Modal Portfólio */}
        <Dialog open={portfolioOpen} onOpenChange={setPortfolioOpen}>
          <DialogTrigger asChild>
            <Card
              className={`border-2 ${
                lastClicked === "portfolio"
                  ? "border-accent shadow-lg"
                  : "border-primary/30"
              } transition-all cursor-pointer hover:shadow-md`}
              onClick={(e) => {
                e.preventDefault();
                trackClick("portfolio", "#portfolio");
                setPortfolioOpen(true);
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <ImageIcon className="w-6 h-6 text-primary-support" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-[#111827]">
                      Ver Portfólio
                    </div>
                    <div className="text-sm text-[#111827]/70">
                      Veja trabalhos recentes
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto bg-gradient-to-b from-white via-[#FFF7FB] to-white p-0 rounded-3xl shadow-2xl border-2 border-primary/20">
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#FAD1E8] to-[#F7B7D2] p-6 border-b border-primary/20 rounded-t-3xl">
              <DialogHeader className="mb-0">
                <DialogTitle className="text-3xl font-bold text-[#111827] flex items-center gap-3">
                  <div className="p-2 bg-white/80 rounded-lg">
                    <ImageIcon className="w-7 h-7 text-primary-support" />
                  </div>
                  Meu Portfólio
                </DialogTitle>
                <DialogDescription className="text-[#111827]/80 text-base mt-2">
                  Confira alguns dos meus trabalhos mais recentes. Clique em
                  qualquer imagem para ampliar.
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioImages.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer bg-gray-100 group border-2 border-primary/20 hover:border-accent/50"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src}
                      alt={`Trabalho ${idx + 1} - Studio Clara`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-sm font-medium">
                        Ver em tamanho maior
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/30 text-center">
                <p className="text-sm text-[#111827]/70">
                  💡 <strong>Dica:</strong> Clique em qualquer foto para ver em
                  tamanho completo
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal Preços */}
        <Dialog open={pricesOpen} onOpenChange={setPricesOpen}>
          <DialogTrigger asChild>
            <Card
              className={`border-2 ${
                lastClicked === "precos"
                  ? "border-accent shadow-lg"
                  : "border-primary/30"
              } transition-all cursor-pointer hover:shadow-md`}
              onClick={(e) => {
                e.preventDefault();
                trackClick("precos", "#precos");
                setPricesOpen(true);
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <DollarSign className="w-6 h-6 text-primary-support" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-[#111827]">
                      Tabela de Preços
                    </div>
                    <div className="text-sm text-[#111827]/70">
                      Confira valores e serviços
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-white via-[#FFF7FB] to-white p-0 rounded-3xl shadow-2xl border-2 border-primary/20">
            <div className="sticky top-0 z-10 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 p-6 border-b border-primary/20 rounded-t-3xl">
              <DialogHeader className="mb-0">
                <DialogTitle className="text-3xl font-bold text-[#111827] flex items-center gap-3">
                  <div className="p-2 bg-white/80 rounded-lg">
                    <DollarSign className="w-7 h-7 text-accent" />
                  </div>
                  Tabela de Preços
                </DialogTitle>
                <DialogDescription className="text-[#111827]/80 text-base mt-2">
                  Valores atualizados - Consulte disponibilidade e agende seu
                  horário
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="p-6 space-y-3">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-5 px-6 bg-white rounded-2xl border-2 border-primary/30 shadow-md hover:shadow-xl hover:border-accent/50 transition-all group"
                >
                  <div className="flex-1">
                    <div className="font-bold text-[#111827] text-xl mb-1.5 group-hover:text-accent transition-colors">
                      {service.name}
                    </div>
                    <div className="text-sm text-[#111827]/60 font-medium">
                      {service.description}
                    </div>
                  </div>
                  <div className="ml-6 px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/30">
                    <div className="font-bold text-accent text-2xl">
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="p-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-xl border-2 border-primary/30">
                <p className="text-sm text-[#111827]/80 text-center font-semibold flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  ⚠️ Os preços podem passar por atualização. Esteja atenta a
                  esse fator.
                </p>
              </div>
              <Button
                size="lg"
                className="w-full mt-6 h-16 text-lg font-bold bg-gradient-to-r from-[#FAD1E8] via-[#F7B7D2] to-[#FAD1E8] text-[#111827] hover:from-[#F7B7D2] hover:via-[#FAD1E8] hover:to-[#F7B7D2] shadow-xl hover:shadow-2xl transition-all"
                onClick={() => {
                  setPricesOpen(false);
                  handleWhatsApp(
                    "Olá! Gostaria de saber mais sobre os preços."
                  );
                }}
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Agendar Agora no WhatsApp
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal Como Chegar */}
        <Dialog open={locationOpen} onOpenChange={setLocationOpen}>
          <DialogTrigger asChild>
            <Card
              className={`border-2 ${
                lastClicked === "local"
                  ? "border-accent shadow-lg"
                  : "border-primary/30"
              } transition-all cursor-pointer hover:shadow-md`}
              onClick={(e) => {
                e.preventDefault();
                trackClick(
                  "local",
                  "https://maps.app.goo.gl/v4MWrAfoe8bS2Fgx8"
                );
                setLocationOpen(true);
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Navigation className="w-6 h-6 text-primary-support" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold text-[#111827]">
                      Como Chegar
                    </div>
                    <div className="text-sm text-[#111827]/70">
                      Veja no Google Maps
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto bg-gradient-to-b from-white via-[#FFF7FB] to-white p-0 rounded-3xl shadow-2xl border-2 border-primary/20">
            <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-6 border-b border-primary/20 rounded-t-3xl">
              <DialogHeader className="mb-0">
                <DialogTitle className="text-3xl font-bold text-[#111827] flex items-center gap-3">
                  <div className="p-2 bg-white/80 rounded-lg">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                  Como Chegar ao Studio Clara
                </DialogTitle>
                <DialogDescription className="text-[#111827]/80 text-base mt-2">
                  Localização, fotos do estúdio e todas as informações que você
                  precisa
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-white rounded-2xl p-4 border-2 border-primary/30 shadow-lg">
                <h3 className="font-bold text-[#111827] text-xl mb-4 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-accent" />
                  Localização no Mapa
                </h3>
                <div className="relative w-full h-96 rounded-xl overflow-hidden border-2 border-primary/30 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3822.821562342544!2d-49.298!3d-16.6357222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDM4JzA4LjYiUyA0OcKwMTcnNTIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1765217547624!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    title="Mapa do Studio Clara - Localização"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 border-0 rounded-xl"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border-2 border-primary/30 shadow-lg">
                <h3 className="font-bold text-[#111827] text-xl mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-accent" />
                  Fotos do Estúdio
                </h3>
                <p className="text-sm text-[#111827]/70 mb-4">
                  Conheça nosso espaço antes de vir! Ambiente acolhedor e
                  equipado para seu conforto.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {localImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group border-2 border-primary/20 hover:border-accent/50"
                      onClick={() => setSelectedImage(src)}
                    >
                      <Image
                        src={src}
                        alt={`Studio Clara - Foto do estúdio ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                        unoptimized
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                        <span className="text-white text-xs font-medium">
                          Clique para ampliar
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-white to-primary/5 rounded-2xl border-2 border-primary/30 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary-support" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#111827] text-lg mb-1">
                        Endereço
                      </p>
                      <p className="text-sm text-[#111827]/70 leading-relaxed">
                        Goiânia, GO
                      </p>
                      <p className="text-xs text-[#111827]/60 mt-2">
                        Consulte o endereço completo no WhatsApp para facilitar
                        sua chegada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-white to-primary/5 rounded-2xl border-2 border-primary/30 shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <Clock className="w-6 h-6 text-primary-support" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-[#111827] text-lg mb-1">
                        Horário de Funcionamento
                      </p>
                      <p className="text-sm text-[#111827]/70 leading-relaxed">
                        Segunda a Sábado
                      </p>
                      <p className="text-xs text-[#111827]/60 mt-2">
                        Agendamento necessário - Entre em contato para verificar
                        disponibilidade
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 h-14 text-lg font-bold bg-gradient-to-r from-[#FAD1E8] to-[#F7B7D2] text-[#111827] hover:from-[#F7B7D2] hover:to-[#FAD1E8] shadow-xl"
                  onClick={() => {
                    window.open(
                      addUTMs("https://maps.app.goo.gl/v4MWrAfoe8bS2Fgx8"),
                      "_blank"
                    );
                  }}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Abrir no Google Maps
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-14 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent/10"
                  onClick={() => {
                    setLocationOpen(false);
                    handleWhatsApp(
                      "Olá! Gostaria de saber o endereço completo do estúdio."
                    );
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Pedir Endereço no WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Qual modelo você prefere */}
      <section className="px-4 pb-8 max-w-md mx-auto">
        <Card className="bg-gradient-to-br from-accent/10 via-primary/10 to-transparent border-2 border-accent/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#111827] text-2xl">
              <Sparkles className="w-6 h-6 text-accent" />
              Qual modelo você prefere?
            </CardTitle>
            <CardDescription className="text-[#111827]/80 text-base">
              Escolha o estilo que mais combina com você ou veja mais opções
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {nailModels.slice(0, 4).map((model, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-primary/20 hover:border-accent/50"
                  onClick={() => {
                    trackClick(`model_${model.name}`, "#");
                    handleWhatsApp(
                      `Olá! Gostaria de fazer o modelo "${model.name}". Gostaria de saber mais informações e valores.`
                    );
                  }}
                >
                  <Image
                    src={model.image}
                    alt={`Modelo ${model.name} - ${model.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-3">
                    <div className="w-full">
                      {model.popular && (
                        <span className="inline-block mb-1 px-2 py-0.5 bg-accent/90 text-white text-xs font-bold rounded-full">
                          ⭐ Mais Pedido
                        </span>
                      )}
                      <p className="text-white font-bold text-sm mb-0.5">
                        {model.name}
                      </p>
                      <p className="text-white/90 text-xs">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                className="w-full border-2 border-accent text-accent hover:bg-accent/10 font-semibold"
                onClick={() => {
                  setPortfolioOpen(true);
                  trackClick("ver_mais_modelos", "#");
                }}
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Ver todos os modelos no portfólio
              </Button>
              <p className="text-xs text-center text-[#111827]/60">
                💡 Clique em qualquer modelo para agendar ou ver mais opções no
                portfólio completo
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* O que dizem */}
      <section className="px-4 pb-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#111827] text-center mb-6">
          O que dizem sobre nós
        </h2>
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/30">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center min-h-[100px] flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>
                <p className="text-[#111827] italic text-lg leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#111827] font-semibold">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm text-[#111827]/60 mt-1">
                  Cliente Verificada
                </p>
              </div>
              <div className="flex justify-center gap-1 pt-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`rounded-full transition-all ${
                      idx === currentTestimonial
                        ? "bg-accent w-8 h-2"
                        : "bg-primary/30 w-2 h-2"
                    }`}
                    aria-label={`Ver depoimento ${idx + 1} de ${
                      testimonials[currentTestimonial].author
                    }`}
                    title={`Depoimento ${idx + 1}`}
                  >
                    <span className="sr-only">Depoimento {idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-8 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-[#111827] text-center mb-6 flex items-center justify-center gap-2">
          <HelpCircle className="w-6 h-6 text-primary-support" />
          Dúvidas Frequentes
        </h2>
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/30">
          <CardContent className="p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-semibold text-[#111827]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#111827]/80 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Informações Importantes */}
      <section className="px-4 pb-8 max-w-md mx-auto">
        <Card className="bg-gradient-to-br from-white via-secondary to-white border-2 border-primary/30 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-[#111827] text-2xl flex items-center gap-2">
              <Award className="w-7 h-7 text-accent" />
              Informações Importantes
            </CardTitle>
            <CardDescription className="text-[#111827]/70 mt-2">
              Tudo que você precisa saber antes de agendar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Formas de Pagamento */}
            <div className="p-4 bg-gradient-to-br from-white to-primary/5 rounded-xl border-2 border-primary/20">
              <h4 className="font-bold text-[#111827] text-lg mb-3 flex items-center gap-2">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <DollarSign className="w-5 h-5 text-primary-support" />
                </div>
                Formas de Pagamento
              </h4>
              <div className="pl-8 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111827]">PIX</p>
                    <p className="text-sm text-[#111827]/70">
                      Transferência instantânea - Confirmação imediata
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111827]">
                      Cartão de Crédito
                    </p>
                    <p className="text-sm text-[#111827]/70">
                      Via link seguro enviado por WhatsApp
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#111827]">Dinheiro</p>
                    <p className="text-sm text-[#111827]/70">
                      Apenas no dia do atendimento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmação de Agendamento */}
            <div className="p-4 bg-gradient-to-br from-white to-primary/5 rounded-xl border-2 border-primary/20">
              <h4 className="font-bold text-[#111827] text-lg mb-3 flex items-center gap-2">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary-support" />
                </div>
                Confirmação de Agendamento
              </h4>
              <div className="pl-8 space-y-3">
                <p className="text-[#111827]">
                  O agendamento só é confirmado mediante pagamento de{" "}
                  <strong className="text-accent text-lg">50% do valor</strong>{" "}
                  do procedimento.
                </p>
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                  <p className="font-semibold text-[#111827] mb-2">
                    Formas de pagamento do sinal:
                  </p>
                  <ul className="space-y-1.5 ml-2">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-sm">
                        <strong>PIX</strong> - Preferencial (confirmação
                        imediata)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-sm">
                        <strong>Link de cartão</strong> - Enviado por WhatsApp
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-[#111827]/70">
                  💳 O restante do valor será pago no dia do atendimento.
                </p>
              </div>
            </div>

            {/* Como Agendar */}
            <div className="p-4 bg-gradient-to-br from-white to-primary/5 rounded-xl border-2 border-primary/20">
              <h4 className="font-bold text-[#111827] text-lg mb-3 flex items-center gap-2">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-primary-support" />
                </div>
                Como Agendar?
              </h4>
              <div className="pl-8 space-y-3">
                <p className="text-[#111827]">
                  Envie{" "}
                  <strong className="text-accent">APENAS 1 MENSAGEM</strong> no
                  WhatsApp com:
                </p>
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">📅</span>
                    <div>
                      <p className="font-semibold text-[#111827]">
                        Dia desejado
                      </p>
                      <p className="text-xs text-[#111827]/70">
                        Data que você gostaria de agendar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">💅</span>
                    <div>
                      <p className="font-semibold text-[#111827]">
                        Procedimento
                      </p>
                      <p className="text-xs text-[#111827]/70">
                        Qual serviço você deseja fazer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">🕐</span>
                    <div>
                      <p className="font-semibold text-[#111827]">
                        Preferência de horário
                      </p>
                      <p className="text-xs text-[#111827]/70">
                        Manhã / Tarde / Noite
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/30">
                  <p className="text-xs text-[#111827] font-medium flex items-start gap-2">
                    <span className="text-lg">💡</span>
                    <span>
                      <strong>Dica:</strong> Quanto mais informações você
                      enviar, mais rápido conseguiremos encontrar o melhor
                      horário para você!
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Política de Pontualidade */}
            <div className="p-4 bg-gradient-to-br from-white to-primary/5 rounded-xl border-2 border-primary/20">
              <h4 className="font-bold text-[#111827] text-lg mb-3 flex items-center gap-2">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-support" />
                </div>
                Política de Pontualidade
              </h4>
              <div className="pl-8 space-y-3">
                <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/30 space-y-2">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#111827]">Tolerância</p>
                      <p className="text-sm text-[#111827]/70">
                        Máximo de 10 minutos de atraso
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#111827]">
                        Atraso acima de 10 minutos
                      </p>
                      <p className="text-sm text-[#111827]/70">
                        Acréscimo de{" "}
                        <strong className="text-accent">R$ 10,00</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-[#111827]">
                        Cancelamento por atraso
                      </p>
                      <p className="text-sm text-[#111827]/70">
                        Acima de 30 minutos: procedimento não será realizado e o
                        sinal não será reembolsado
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#111827]/70 italic flex items-start gap-2">
                  <span>⏰</span>
                  <span>
                    Pedimos que saia de casa com tempo - cada minuto é
                    importante para garantir a qualidade do seu atendimento!
                  </span>
                </p>
              </div>
            </div>

            {/* Cuidados Pós-Procedimento */}
            <div className="p-4 bg-gradient-to-br from-white to-primary/5 rounded-xl border-2 border-primary/20">
              <h4 className="font-bold text-[#111827] text-lg mb-3 flex items-center gap-2">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary-support" />
                </div>
                Cuidados Pós-Procedimento
              </h4>
              <div className="pl-8 space-y-2">
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      Evite usar as unhas como ferramentas (abrir latas, rasgar
                      embalagens, etc.)
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      Use luvas ao realizar tarefas domésticas (lavar louça,
                      limpeza, jardinagem)
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      Hidrate as cutículas diariamente com óleo ou creme
                      específico
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      Agende a manutenção entre 20-25 dias para manter as unhas
                      sempre impecáveis
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      Evite contato prolongado com água quente nas primeiras 24
                      horas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Durabilidade */}
            <div className="p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border-2 border-accent/30">
              <h4 className="font-bold text-[#111827] text-lg mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Durabilidade
              </h4>
              <p className="text-sm text-[#111827]/80 pl-7">
                Com os cuidados adequados, suas unhas podem durar de{" "}
                <strong className="text-accent">20 a 30 dias</strong>. A
                manutenção regular garante que elas permaneçam sempre lindas e
                saudáveis!
              </p>
            </div>

            <Button
              size="lg"
              className="w-full h-16 text-lg font-bold bg-gradient-to-r from-[#FAD1E8] via-[#F7B7D2] to-[#FAD1E8] text-[#111827] hover:from-[#F7B7D2] hover:via-[#FAD1E8] hover:to-[#F7B7D2] shadow-xl hover:shadow-2xl transition-all"
              onClick={() => handleWhatsApp()}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Agendar Agora no WhatsApp
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Rodapé */}
      <footer className="px-4 pb-24 pt-8 max-w-md mx-auto text-center space-y-4">
        <div className="flex justify-center gap-4">
          <a
            href={addUTMs(
              "https://www.instagram.com/studio_claraa1?igsh=d3pweGsxM21ubnMx"
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackClick(
                "instagram_footer",
                "https://www.instagram.com/studio_claraa1"
              )
            }
            className="p-3 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors"
            aria-label="Instagram Studio Clara"
          >
            <Instagram className="w-5 h-5 text-primary-support" />
          </a>
        </div>
        <p className="text-sm text-[#111827]/70 flex items-center justify-center gap-1">
          Feito com carinho{" "}
          <Heart className="w-4 h-4 text-primary-support fill-primary-support" />{" "}
          Studio Clara
        </p>
        <p className="text-xs text-[#111827]/50">
          © 2026 Studio Clara. Todos os direitos reservados.
        </p>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={addUTMs("https://wa.me/5562992846993")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackClick("whatsapp_float", "https://wa.me/5562992846993")
        }
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Modal de Imagem Grande */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar imagem"
            title="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Imagem ampliada - Studio Clara"
              fill
              className="object-contain"
              sizes="100vw"
              priority
              unoptimized
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
