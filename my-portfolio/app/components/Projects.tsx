"use client";

import { useState } from "react";
import Image from "next/image";
import { FaReact, FaJava, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  details: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Carcheck",
    description: "Sistema de verificação de integridade e identificação de problemas com IA.",
    images: ["/projetos/carcheck-web.png", "/projetos/carcheck-web2.png"],
    technologies: ["React", "Next.js", "Java"],
    details:
      "Carcheck é uma aplicação web que permite identificar problemas dos veículos apenas com perguntas e respostas utilizando IA. Conta com dashboards intuitivos e relatórios detalhados.",
    link: "https://carcheck-wine.vercel.app/"
  },
  {
    title: "FROST WAVE",
    description: "Vitrine digital de gelo saborizado.",
    images: ["/projetos/fw-web.png", "/projetos/fw-web2.png"],
    technologies: ["React Native", "TypeScript"],
    details:
      "Projeto desenvolvido como vitrine digital, exibindo produtos e sabores de gelo. O fluxo de compra é direcionado para o WhatsApp da empresa.",
    link: "https://www.frostwave.com.br/home", 
  },
  {
    title: "Omega Frio",
    description: "Vitrine digital para empresa de refrigeração.",
    images: ["/projetos/om-web.png", "/projetos/om-web2.png"],
    technologies: ["React Native", "TypeScript"],
    details:
      "Site vitrine digital para a Omega Frio. O foco é a apresentação da marca e dos produtos, com direcionamento de contato via WhatsApp.",
    link: "https://www.omegafrio.com.br/home", 
  },
  {
    title: "EcoFleet",
    description: "Plataforma acadêmica de gestão de frotas.",
    images: ["/projetos/eco-web.png", "/projetos/eco-web2.png"],
    technologies: ["React Native", "TypeScript"],
    details:
      "EcoFleet foi desenvolvido como projeto acadêmico, com foco na gestão sustentável de frotas. Inclui monitoramento de veículos, relatórios básicos e simulação de boas práticas ambientais aplicadas à logística.",
    link: "https://ecofleet-lime.vercel.app/"
  },
];

// Corrigido: ReactNode no lugar de JSX.Element
const techIcons: Record<string, ReactNode> = {
  React: <FaReact size={20} color="#61dafb" />,
  "Next.js": <SiNextdotjs size={20} color="#ffffff" />,
  Java: <FaJava size={20} color="#f89820" />,
  TypeScript: <SiTypescript size={20} color="#3178c6" />,
  "React Native": <MdPhoneIphone size={20} color="#61dafb" />,
  JavaScript: <FaJsSquare size={20} color="#f7df1e" />,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="p-8 bg-gradient-to-b from-blue-900 to-black rounded-lg m-4 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fadeIn">
        Projetos de Relevância
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:rotate-1 cursor-pointer group perspective-1000"
          >
            <div className="relative w-full h-60 md:h-64 overflow-hidden">
              <Image
                src={proj.images[0]}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-sm mb-3">{proj.description}</p>
                <div className="flex gap-2 justify-center flex-wrap mb-3">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1 bg-gray-700/60 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {techIcons[tech]} {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Ver Projeto
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          key={selectedProject.title}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 rounded-lg"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-lg shadow-2xl max-w-5xl w-full overflow-y-auto max-h-[90vh] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 pr-10">
              <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Acessar Site
                </a>
              )}
            </div>

            <p className="mb-4">{selectedProject.details}</p>

            <div className="flex gap-4 flex-wrap mb-4">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1 bg-gray-700/60 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {techIcons[tech]} {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.images.map((img, i) => (
                <div key={i} className="relative w-full h-64">
                  <Image
                    src={img}
                    alt={`${selectedProject.title} screenshot ${i + 1}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
