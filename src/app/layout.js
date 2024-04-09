import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "É tech, É Humano | Impulso",
  description: "Desafio Front-end da Impulso",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
