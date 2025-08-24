"use client";

import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiSpring,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";

// Array com referências aos ícones e suas props
export const icons = [
  { Icon: FaJava, color: "#f89820" },
  { Icon: SiPython, color: "#306998" },
  { Icon: SiJavascript, color: "#f7df1e" },
  { Icon: SiTypescript, color: "#3178c6" },
  { Icon: SiReact, color: "#61dafb" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: FaHtml5, color: "#e34f26" },
  { Icon: FaCss3Alt, color: "#1572b6" },
  { Icon: SiSpring, color: "#6DB33F" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiDocker, color: "#2496ED" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
];

export default function Carousel() {
  // duplicar os ícones para loop contínuo
  const repeatedIcons = [...icons, ...icons];

  return (
    <section className="w-full overflow-hidden py-8">
      <div className="flex min-w-full animate-scroll">
        {repeatedIcons.map(({ Icon, color }, idx) => (
          <div key={idx} className="flex-shrink-0 mx-8">
            <Icon size={50} color={color} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
