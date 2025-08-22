"use client";
import Layout from "./components/Layout";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Layout>
      <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-md text-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl md:text-2xl font-bold">Meu Portfólio</h1>
          <div className="hidden md:flex gap-8 text-lg">
            <a href="#projects" className="hover:text-blue-400 transition">Projetos</a>
            <a href="#certificates" className="hover:text-blue-400 transition">Certificados</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contato</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-gray-800 flex flex-col items-center py-4 space-y-3 text-white">
            <a onClick={() => setMenuOpen(false)} href="#projects">Projetos</a>
            <a onClick={() => setMenuOpen(false)} href="#certificates">Certificados</a>
            <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contato</a>
          </div>
        )}
      </header>

<section className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-b from-blue-900 to-gray-900 text-white">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fadeIn">
    Olá, eu sou <span className="text-blue-400">Cauan</span>
  </h1>
  <p className="text-md sm:text-lg md:text-xl lg:text-2xl max-w-4xl mb-10 text-gray-300 animate-fadeIn delay-200">
Desenvolvedor Full Stack com experiência em aplicações web, mobile e corporativas  </p>
  <div className="flex gap-4 animate-fadeIn delay-400">
    <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold transition">
      Meus Projetos
    </a>
    <a href="#contact" className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md font-semibold transition">
      Contato
    </a>
  </div>
</section>



      <section className="py-12 bg-black text-white">
        <Carousel />
      </section>

      <section id="about" className="py-12 px-4 sm:px-8 md:px-16 bg-black text-white">
        <About />
      </section>

      <section id="skills" className="py-12 px-4 sm:px-8 md:px-16 bg-black text-white">
        <Skills />
      </section>

      <section id="projects" className="py-12 px-4 sm:px-8 md:px-16 bg-black text-white">
        <Projects />
      </section>

      <section id="certificates" className="py-12 px-4 sm:px-8 md:px-16 bg-black text-white">
        <Certificates />
      </section>

      <section id="contact" className="py-12 px-4 sm:px-8 md:px-16 bg-black text-white">
        <Contact />
      </section>

      <footer className="bg-black text-gray-400 py-6 text-center">
        © {new Date().getFullYear()} Cauan. Todos os direitos reservados.
      </footer>
    </Layout>
  );
}
