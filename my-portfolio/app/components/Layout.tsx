"use client";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors">
      <header className="p-4 flex justify-between items-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-bold text-white dark:text-gray-100">Cauan Ferreira</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:scale-105 transition"
        >
          {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
        </button>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
