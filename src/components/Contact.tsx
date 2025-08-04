import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}. ${formData.message ? `Mensagem: ${formData.message}` : "Gostaria de mais informações sobre os serviços."}`
    );
    const phoneNumber = "5512999999999"; // Substitua pelo número real da clínica
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent("Contato - Site Bem Star Psicologia");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nTelefone: ${formData.phone}\n\nMensagem:\n${formData.message}`
    );
    window.open(`mailto:contato@bemstarpsicologia.com.br?subject=${subject}&body=${body}`);
  };

  const isFormValid = formData.name && formData.message;

  return (
    <section id="contato" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem alguma dúvida ou gostaria de mais informações? 
            Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Envie uma Mensagem
              </CardTitle>
              <CardDescription>
                Preencha o formulário e escolha como prefere ser contactado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(12) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Como podemos ajudá-lo?"
                    className="min-h-32"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-3">
                  <Button
                    onClick={handleWhatsAppContact}
                    disabled={!isFormValid}
                    className="w-full"
                    variant={isFormValid ? "hero" : "outline"}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>
                  <Button
                    onClick={handleEmailContact}
                    disabled={!isFormValid}
                    variant="secondary"
                    className="w-full"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar por E-mail
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  * Campos obrigatórios
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Outras Formas de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div 
                  className="flex items-center gap-4 p-4 bg-primary-soft rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open("https://wa.me/5512999999999", "_blank")}
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm opacity-90">(12) 99999-9999</p>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-4 p-4 bg-secondary-soft rounded-lg cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  onClick={() => window.open("tel:+5512999999999")}
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-sm opacity-90">(12) 99999-9999</p>
                  </div>
                </div>

                <div 
                  className="flex items-center gap-4 p-4 bg-accent-soft rounded-lg cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  onClick={() => window.open("mailto:contato@bemstarpsicologia.com.br")}
                >
                  <Mail className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-sm opacity-90">contato@bemstarpsicologia.com.br</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Respondemos todas as mensagens em até 24 horas durante os dias úteis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;