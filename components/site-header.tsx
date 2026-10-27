import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand" href="#inicio" aria-label="Instituto Semente do Amanhã — início">
      <span className="brand-logo"><Image src="/images/criancas-aprendendo.png" alt="" width={64} height={64} priority /></span>
      <span className="brand-name"><small>instituto</small><strong><span>semente</span> <i>do</i> <b>amanhã</b></strong></span>
    </Link>
    <nav aria-label="Navegação principal" className="main-nav">
      <Link href="#inicio">Início</Link><Link href="#sobre">Sobre</Link><Link href="#projeto">Nossos Pilares</Link><Link href="#projeto">Projetos</Link><Link href="#como-ajudar">Como Ajudar</Link><Link href="#contato">Contato</Link><Link className="nav-cta" href="#como-ajudar"><span aria-hidden="true">♡</span> Faça parte</Link>
    </nav>
  </div></header>;
}
