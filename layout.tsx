import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Instituto Semente do Amanhã | Plantando hoje, transformando amanhã",
  description: "Conheça o propósito do Instituto Semente do Amanhã, projeto em preparação em Praia Grande, SP.",
  applicationName: "Instituto Semente do Amanhã",
  openGraph: { title: "Instituto Semente do Amanhã", description: "Juntos, podemos semear esperança e transformar vidas.", images: ["/images/criancas-aprendendo.png"], locale: "pt_BR", type: "website" }
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fffefa" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
