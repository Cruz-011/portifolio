"use client";
"use client";
import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiPython, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiMysql, SiPostgresql, SiMongodb, SiGit, SiSpring, SiTailwindcss, SiAngular, SiDocker } from "react-icons/si";

export const icons = [
  <FaJava size={50} color="#f89820" />,
  <SiPython size={50} color="#306998" />,
  <SiJavascript size={50} color="#f7df1e" />,
  <SiTypescript size={50} color="#3178c6" />,
  <SiReact size={50} color="#61dafb" />,
  <SiNextdotjs size={50} color="#ffffff" />,
  <FaHtml5 size={50} color="#e34f26" />,
  <FaCss3Alt size={50} color="#1572b6" />,
  <SiSpring size={50} color="#6DB33F" />,
  <FaNodeJs size={50} color="#339933" />,
  <SiMysql size={50} color="#4479A1" />,
  <SiPostgresql size={50} color="#336791" />,
  <SiMongodb size={50} color="#47A248" />,
  <SiDocker size={50} color="#2496ED" />,
  <SiGit size={50} color="#F05032" />,
  <SiTailwindcss size={50} color="#38BDF8" />,
];

export default function Carousel() {
  // duplicar os ícones para loop contínuo
  const repeatedIcons = [...icons, ...icons];

  return (
    <section className="w-full overflow-hidden py-8 ">
      <div className="flex min-w-full animate-scroll">
        {repeatedIcons.map((icon, idx) => (
          <div key={idx} className="flex-shrink-0 mx-8">
            {icon}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
