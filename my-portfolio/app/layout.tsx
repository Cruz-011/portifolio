import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cauan Ferreira - Desenvolvedor",
  description: "Portfólio pessoal de Cauan Ferreira",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-all`}>
        {children}
      </body>
    </html>
  );
}
