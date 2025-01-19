import React, { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import client from "../Lib/sanityClient.jsx";

interface ContactProps {
  language: "pt" | "en";
}

export default function Contact({ language }: ContactProps) {
  const [contactData, setContactData] = useState<any>(null);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    // Récupération des données depuis Sanity
    client
      .fetch(
        `*[_type == "contact"][0]{
          address,
          phone,
          email,
          hours
        }`
      )
      .then((data) => setContactData(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      );
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(language === "pt" ? "Enviando..." : "Sending...");
    const formData = new FormData(event.currentTarget);

    // Ajouter la clé d'accès pour Web3Forms
    formData.append("access_key", "d21141c7-9bc0-47ae-b877-f79b5a37ff77");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          language === "pt"
            ? "Mensagem enviada com sucesso!"
            : "Message sent successfully!"
        );
      } else {
        setResult(
          language === "pt"
            ? "Ocorreu um erro ao enviar a mensagem."
            : "An error occurred while sending the message."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(
        language === "pt"
          ? "Ocorreu um erro ao enviar a mensagem."
          : "An error occurred while sending the message."
      );
    }
  };

  if (!contactData) return <div>Loading...</div>;

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de Contact */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-gray-900">
              {language === "pt" ? "Contacto" : "Contact"}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-600">
                <MapPin className="text-primary" />
                <span>{contactData.address}</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <Phone className="text-primary" />
                <span>{contactData.phone}</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <Mail className="text-primary" />
                <span>{contactData.email}</span>
              </div>
              <div className="flex items-start space-x-4 text-gray-600">
                <Clock className="text-primary mt-1" />
                <div>
                  {contactData.hours.map((hour: any, index: number) => (
                    <div key={index} className="mb-2">
                      <span>
                        {language === "pt" ? hour.pt.days : hour.en.days}
                      </span>
                      <span>
                        {language === "pt" ? hour.pt.times : hour.en.times}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire de Contact */}
            <form className="space-y-4 mt-8" onSubmit={onSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="d21141c7-9bc0-47ae-b877-f79b5a37ff77"
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "pt" ? "Nome" : "Name"}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "pt"
                    ? "Motivo do Contacto"
                    : "Reason for Contact"}
                </label>
                <select
                  name="reason"
                  id="reason"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="">
                    {language === "pt"
                      ? "Selecione um motivo"
                      : "Select a reason"}
                  </option>
                  {[
                    {
                      value: "reservation",
                      label: language === "pt" ? "Reserva" : "Reservation",
                    },
                    {
                      value: "group",
                      label:
                        language === "pt" ? "Evento de Grupo" : "Group Event",
                    },
                    {
                      value: "information",
                      label:
                        language === "pt"
                          ? "Informações Gerais"
                          : "General Information",
                    },
                    {
                      value: "feedback",
                      label: language === "pt" ? "Feedback" : "Feedback",
                    },
                    {
                      value: "other",
                      label: language === "pt" ? "Outro" : "Other",
                    },
                  ].map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {language === "pt" ? "Mensagem" : "Message"}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                {language === "pt" ? "Enviar Mensagem" : "Send Message"}
              </button>
              {result && (
                <div className="text-sm mt-2 text-gray-600">{result}</div>
              )}
            </form>
          </div>

          {/* Carte Google Maps */}
          <div className="h-[600px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8825046858088!2d-9.163843323794961!3d38.70781937176917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934a0bb8b9f85%3A0x383531b771889c0d!2sR.%20Ten.%20Ferreira%20Dur%C3%A3o%2026%2C%201350-315%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2sfr!4v1710272119607!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
