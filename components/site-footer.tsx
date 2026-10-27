import Link from "next/link";

export function SiteFooter() {
 return <footer className="site-footer" id="contato">
  <div className="container footer-grid">
   <div className="footer-brand-column"><Link className="brand footer-brand" href="#inicio"><span className="brand-logo footer-logo"><span aria-hidden="true">✳</span></span><span className="brand-name"><small>instituto</small><strong><span>semente</span> <i>do</i> <b>amanhã</b></strong></span></Link><p>Plantando hoje, transformando amanhã.</p></div>
   <div className="footer-info"><h2>Vamos cultivar um futuro melhor?</h2><p>Em breve, divulgaremos os canais oficiais de contato e as formas de participação.</p><span className="footer-location"><span aria-hidden="true">⌖</span> Praia Grande — SP</span></div>
   <div className="footer-links"><strong>Explore</strong><Link href="#inicio">Início</Link><Link href="#sobre">Sobre o Instituto</Link><Link href="#projeto">Nossos Pilares</Link><Link href="#como-ajudar">Como Ajudar</Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Instituto Semente do Amanhã.</span><span>Feito com cuidado, propósito e esperança <b aria-hidden="true">✳</b></span></div>
 </footer>;
}
