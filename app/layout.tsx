import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Studio Clara | Nail Designer Premium",
  description: "Alongamento, gel, fibra de vidro e nail art. Agende seu horário e transforme suas unhas com acabamento premium.",
  openGraph: {
    title: "Studio Clara | Nail Designer Premium",
    description: "Alongamento, gel, fibra de vidro e nail art. Agende seu horário e transforme suas unhas com acabamento premium.",
    images: ["https://i.im.ge/2025/12/04/4YS7PC.Stuido-Clara2.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

