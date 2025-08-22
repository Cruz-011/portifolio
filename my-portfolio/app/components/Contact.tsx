"use client";

import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com",
      bg: "bg-blue-700 hover:bg-blue-600",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com",
      bg: "bg-gray-700 hover:bg-gray-600",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={24} />,
      url: "https://wa.me/SEUNUMERO",
      bg: "bg-green-600 hover:bg-green-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:SEUEMAIL@example.com",
      bg: "bg-yellow-700 hover:bg-yellow-600",
    },
  ];

  return (
    <section className="p-8 m-4 bg-gradient-to-b from-blue-900  to-blackrounded-lg animate-fadeIn text-white rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Entre em Contato
      </h2>

      <p className="text-center text-lg md:text-xl mb-8">
        Clique em uma das opções abaixo para me contatar diretamente:
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.url}
            target="_blank"
            className={`flex items-center justify-center gap-3 ${contact.bg} text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
          >
            {contact.icon}
            {contact.name}
          </a>
        ))}
      </div>
    </section>
  );
}
