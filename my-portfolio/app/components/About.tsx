"use client";

import Image from "next/image";

export default function About() {
  const skills: string[] = [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js / Express",
    "C# / .NET Core",
    "Java / Spring Boot",
    "SQL / PL/SQL",
    "Tailwind CSS / CSS3",
    "Git / GitHub",
    "Marketing Digital / Facebook Ads",
    "Gestão e Conhecimento Empresarial",
    "Liderança e Gestão de Equipes",
  ];

  return (
    <section className="p-8 bg-gradient-to-b from-blue-900 to-black rounded-lg m-4 animate-fadeIn text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fadeIn">
        Sobre Mim
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Avatar otimizado */}
        <div className="flex-shrink-0 animate-fadeIn delay-200">
          <Image
            src="/avatar2.png"
            alt="Foto de Cauan"
            width={240}
            height={240}
            className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-blue-400 object-cover"
            priority
          />
        </div>

        {/* Texto + Skills */}
        <div className="flex-1 animate-fadeIn delay-400">
          <p className="mb-6 text-white/90 text-lg md:text-xl leading-relaxed">
            Olá! Sou Cauan, desenvolvedor Full Stack de Santo André com experiência em aplicações web, mobile e corporativas.  
            Tenho conhecimentos em marketing digital, incluindo campanhas no Facebook Ads, e experiência em liderança e gestão de equipes.  
            Meu foco é entregar soluções completas e estratégicas, unindo habilidades técnicas e visão empresarial.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Habilidades & Tecnologias</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-gray-800/50 hover:bg-blue-500 transition-colors text-center py-2 px-4 rounded-lg cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
