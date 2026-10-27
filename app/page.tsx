import Image from "next/image";
import Link from "next/link";

const pillars = [
  { title: "Educação", text: "Aprender abre caminhos para novas descobertas.", icon: "▤", color: "green" },
  { title: "Acolhimento", text: "Um ambiente de cuidado, respeito e confiança.", icon: "♡", color: "yellow" },
  { title: "Inclusão", text: "Valorizar cada criança e suas possibilidades.", icon: "◎", color: "pink" },
  { title: "Oportunidades", text: "Cultivar experiências para um futuro promissor.", icon: "✳", color: "blue" }
];

export default function HomePage() {
 return <main id="conteudo">
  <section className="hero" id="inicio"><div className="hero-background" aria-hidden="true"/><div className="hero-shade" aria-hidden="true"/>
   <div className="container hero-inner"><div className="hero-copy">
    <span className="eyebrow"><span className="eyebrow-dot"/> Instituto em preparação · Praia Grande, SP</span>
    <h1>Plantando hoje,<br/><span className="orange">transformando</span><br/><span className="teal">amanhã!</span></h1>
    <p className="hero-lead">Um projeto que nasce com carinho para cultivar educação, acolhimento e oportunidades para crianças da Zona 3.</p>
    <div className="hero-tags" aria-label="Temas do projeto"><span><b className="tag-icon orange">▤</b> Educação</span><span><b className="tag-icon yellow">♡</b> Acolhimento</span><span><b className="tag-icon green">✳</b> Inclusão</span></div>
    <div className="hero-actions"><Link className="button button-primary" href="#projeto">Conheça o projeto <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="#como-ajudar">Como ajudar <span aria-hidden="true">♡</span></Link></div>
    <p className="hero-slogan">Juntos, podemos semear esperança e transformar vidas!</p>
   </div><a className="scroll-cue" href="#sobre" aria-label="Rolar para a seção Sobre o Instituto"><span/> Role para conhecer</a></div>
  </section>
  <section className="about section-pad" id="sobre"><div className="container about-grid">
   <div className="about-copy"><div className="section-label"><span className="leaf-mark" aria-hidden="true">❧</span> SOBRE O INSTITUTO</div>
    <h2>Um lugar para <em>crescer, aprender</em> e sonhar.</h2>
    <p>O Instituto Semente do Amanhã está sendo preparado em Praia Grande, SP, com o propósito de contribuir com crianças da Zona 3 e ajudar a cultivar novas possibilidades para o futuro.</p>
    <p>Uma iniciativa que nasce com dedicação e acredita na força do cuidado, da educação e da comunidade.</p>
    <div className="mini-values"><div><span className="mini-icon mini-pink">♡</span><strong>Mais acolhimento</strong><small>para se sentir bem</small></div><div><span className="mini-icon mini-teal">◎</span><strong>Mais oportunidades</strong><small>para desenvolver talentos</small></div><div><span className="mini-icon mini-green">✳</span><strong>Mais possibilidades</strong><small>para construir o amanhã</small></div></div>
    <Link className="inline-link" href="#projeto">Saiba mais sobre o projeto <span aria-hidden="true">→</span></Link>
   </div>
   <div className="about-art"><div className="art-blob" aria-hidden="true"/><Image src="/images/criancas-aprendendo.png" alt="Ilustração de crianças lendo livros e plantando mudas juntas sob uma árvore colorida." width={1536} height={1024} sizes="(max-width: 800px) 100vw, 48vw"/><span className="art-sticker sticker-heart" aria-hidden="true">♡</span><span className="art-sticker sticker-star" aria-hidden="true">✦</span></div>
  </div></section>
  <section className="pillars-section section-pad" id="projeto"><div className="container">
   <div className="section-heading"><div><div className="section-label"><span className="leaf-mark" aria-hidden="true">❧</span> NOSSO PROPÓSITO</div><h2>Pequenas sementes.<br/><em>Grandes possibilidades.</em></h2></div><p>Queremos contribuir para um ambiente em que cada criança possa descobrir, aprender e desenvolver seu potencial.</p></div>
   <div className="pillars-grid">{pillars.map((pillar,index)=><article className={`pillar-card pillar-${pillar.color}`} key={pillar.title}><span className="pillar-icon" aria-hidden="true">{pillar.icon}</span><span className="pillar-number">0{index+1}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
   <p className="content-note">Os pilares acima representam a proposta de comunicação do projeto e poderão ser ajustados conforme as atividades oficiais forem definidas.</p>
  </div></section>
  <section className="help-section" id="como-ajudar"><div className="help-image" role="img" aria-label="Ilustração de crianças aprendendo juntas"/><div className="container help-content">
   <div className="help-copy"><div className="section-label"><span className="leaf-mark" aria-hidden="true">❧</span> FAÇA PARTE</div><h2>O futuro floresce quando <em>cuidamos juntos.</em></h2><p>Estamos preparando os próximos passos do instituto. Em breve, serão divulgadas informações oficiais sobre atividades, parcerias e formas de participação.</p><Link className="button button-primary" href="#contato">Acompanhe o projeto <span aria-hidden="true">→</span></Link></div>
   <div className="help-quote"><span aria-hidden="true">✳</span><blockquote>“Juntos, podemos semear esperança e transformar vidas!”</blockquote><small>Instituto Semente do Amanhã</small></div>
  </div></section>
 </main>;
}
