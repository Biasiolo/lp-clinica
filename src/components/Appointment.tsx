import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

import clinicBg from "@/assets/clinic.jpg";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState<string>("");

  const services = [
    "Psicoterapia Individual",
    "Terapia de Casal", 
    "Terapia Familiar",
    "Psicologia Infantil"
  ];

  const generateWhatsAppLink = () => {
    if (!selectedDate || !selectedService) return;

    const formattedDate = format(selectedDate, "dd/MM/yyyy", { locale: ptBR });
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar uma consulta de ${selectedService} para o dia ${formattedDate}. Poderia me informar os horários disponíveis?`
    );
    
    const phoneNumber = "5512999999999"; // Substitua pelo número real da clínica
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const isFormValid = selectedDate && selectedService;

  return (
    <section
  id="agendamento"
  className="relative py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${clinicBg})` }}
>
  {/* Overlay escurecido */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-indigo-900/60 to-purple-900/70 z-0" />

  {/* Conteúdo sobre o overlay */}
  <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Escolha o serviço desejado e a data de sua preferência. 
            Entraremos em contato via WhatsApp para confirmar o horário.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">
                Solicitar Agendamento
              </CardTitle>
              <CardDescription>
                Preencha as informações abaixo para iniciar seu agendamento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Escolha o Serviço
                  </h3>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Escolha a Data
                  </h3>
                  <div className="border rounded-lg p-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                      className={cn("w-full justify-center pointer-events-auto")}
                    />
                  </div>
                </div>
              </div>

              {/* Selected Information */}
              {(selectedService || selectedDate) && (
                <div className="bg-primary-soft p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3">
                    Resumo do Agendamento:
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    {selectedService && (
                      <p><span className="font-medium">Serviço:</span> {selectedService}</p>
                    )}
                    {selectedDate && (
                      <p><span className="font-medium">Data:</span> {format(selectedDate, "PPP", { locale: ptBR })}</p>
                    )}
                  </div>
                </div>
              )}

              {/* WhatsApp Button */}
              <div className="text-center">
                <Button
                  onClick={generateWhatsAppLink}
                  disabled={!isFormValid}
                  className="px-8 py-6 text-lg"
                  variant={isFormValid ? "hero" : "outline"}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isFormValid ? "Enviar via WhatsApp" : "Selecione serviço e data"}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Você será redirecionado para o WhatsApp para finalizar o agendamento
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Appointment;