"use client";

import { useState } from "react";

const certificates = [
  {
    title:
      "Certificado de Qualificação Profissional em Desenvolvimento e Designer Web 2.0",
    date: "2024",
    image: "/certificates/01.png",
  },
  {
    title:
      "Certificado de Qualificação Profissional em Análise de Sistemas e Prototipação Web",
    date: "2024",
    image: "/certificates/02.png",
  },
  {
    title:
      "Certificado de Qualificação Profissional em Desenvolvimento de Aplicações Móveis",
    date: "2025",
    image: "/certificates/03.png",
  },
  { title: "Design Gráfico", date: "2025", image: "/certificates/04.png" },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="p-8 bg-gradient-to-b from-blue-900 to-black m-4 animate-fadeIn text-white rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Certificados
      </h2>

      {/* Grid de certificados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            onClick={() => setSelected(cert)}
            className="bg-gray-800/60 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-blue-500/40 transition-transform duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-52 object-contain bg-black/40"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-base mb-1 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-300">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para ampliar o certificado */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
          onClick={() => setSelected(null)} // Fecha ao clicar fora
        >
          <div
            className="relative bg-gray-900 rounded-lg shadow-2xl w-full max-w-7xl max-h-[70vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              &times;
            </button>

            <div className="p-6 flex flex-col items-center">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4 mb-2">{selected.title}</h3>
              <p className="text-gray-300">{selected.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
