import './App.css'
import vanthrabitLogo from './assets/vanthrabit-logo-transparent.png'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-brand">VANTHRABIT</div>

        <nav className="navbar-links">
          <a href="#projects">PROJETOS</a>
          <a href="#downloads">DOWNLOADS</a>
          <a href="#store">LOJA</a>
          <a href="#ai">VANTHRABIT AI</a>
          <a href="#about">SOBRE</a>
        </nav>
      </header>

      <main>
        <img
          className="vanthrabit-logo"
          src={vanthrabitLogo}
          alt="VANTHRABIT"
        />

        <p>Build. Learn. Share. Evolve.</p>
      </main>
      <section className="labs" id="projects">
  <div className="labs-header">
    <span>VANTHRABIT LABS</span>
    <h2>Projetos construídos para serem explorados.</h2>
    <p className="section-description">
      Eletrônica, sistemas embarcados, programação e ideias transformadas
      em projetos reais.
    </p>
    <div className="labs-status">
  <span className="status-dot"></span>

  <div>
    <strong>EM DESENVOLVIMENTO</strong>
    <p>
      Novos projetos estão sendo desenvolvidos, testados e documentados
      antes da publicação.
    </p>
  </div>
</div>
  </div>
</section>

<section className="about-section" id="about">
  <div className="about-content">
    <span className="about-label">O QUE É A VANTHRABIT</span>

    <h2>Ideias transformadas em tecnologia.</h2>

    <p>
      A VANTHRABIT é um laboratório independente de tecnologia dedicado à
      eletrônica, sistemas embarcados, programação, inteligência artificial
      e robótica.
    </p>

    <p>
      Um espaço para construir, experimentar, aprender e compartilhar
      projetos reais — do conceito ao hardware.
    </p>
  </div>
</section>
<section className="areas-section">
  <div className="areas-header">
    <span>ÁREAS VANTHRABIT</span>
    <h2>Tecnologia sem fronteiras.</h2>
    <p>
      Hardware e software desenvolvidos como partes de um mesmo ecossistema.
    </p>
  </div>

  <div className="areas-grid">
    <article className="area-card">
      <span className="area-number">01</span>
      <h3>ELETRÔNICA</h3>
      <p>PCBs • Sistemas embarcados • Hardware • IoT</p>
      <span className="area-arrow">→</span>
    </article>

    <article className="area-card">
      <span className="area-number">02</span>
      <h3>SOFTWARE</h3>
      <p>Firmware • Aplicações • Ferramentas • Sistemas</p>
      <span className="area-arrow">→</span>
    </article>

    <article className="area-card">
      <span className="area-number">03</span>
      <h3>INTELIGÊNCIA ARTIFICIAL</h3>
      <p>IA • Visão computacional • Automação • Ferramentas</p>
      <span className="area-arrow">→</span>
    </article>

    <article className="area-card">
      <span className="area-number">04</span>
      <h3>ROBÓTICA</h3>
      <p>Controle • Automação • Sensores • Máquinas inteligentes</p>
      <span className="area-arrow">→</span>
    </article>
  </div>
</section>

<section className="ai-section" id="ai">
  <div className="ai-content">
    <span className="ai-label">VANTHRABIT AI</span>

    <h2>
      Inteligência construída
      <br />
      para quem constrói.
    </h2>

    <p>
      Uma inteligência artificial em desenvolvimento para auxiliar
      eletrônica, programação, sistemas embarcados e criação de tecnologia.
    </p>

    <div className="ai-status">
      <span className="ai-status-dot"></span>
      EM DESENVOLVIMENTO
    </div>
  </div>
</section>

<section className="process-section">
  <div className="process-content">
    <span className="process-label">PROCESSO VANTHRABIT</span>

    <h2>Do conceito ao hardware.</h2>

    <p className="process-description">
      Cada projeto evolui através de desenvolvimento, prototipagem,
      testes e documentação antes de ser publicado.
    </p>

    <div className="process-flow">
      <div className="process-step">
        <span>01</span>
        <strong>IDEIA</strong>
      </div>

      <div className="process-step">
        <span>02</span>
        <strong>PROJETO</strong>
      </div>

      <div className="process-step">
        <span>03</span>
        <strong>PROTÓTIPO</strong>
      </div>

      <div className="process-step">
        <span>04</span>
        <strong>TESTES</strong>
      </div>

      <div className="process-step">
        <span>05</span>
        <strong>DOCUMENTAÇÃO</strong>
      </div>

      <div className="process-step">
        <span>06</span>
        <strong>PUBLICAÇÃO</strong>
      </div>
    </div>
  </div>
</section>

<footer className="footer">
  <div className="footer-main">

    <div className="footer-brand">
      <h2>VANTHRABIT</h2>
      <p>BUILD. LEARN. SHARE. EVOLVE.</p>
    </div>

    <div className="footer-nav">
      <span>NAVEGAÇÃO</span>
      <a href="#projects">Projetos</a>
      <a href="#downloads">Downloads</a>
      <a href="#store">Loja</a>
      <a href="#ai">VANTHRABIT AI</a>
      <a href="#about">Sobre</a>
    </div>

    <div className="footer-social">
      <span>CONECTE-SE</span>
      <a href="https://github.com/vanthrabit" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.instagram.com/vanthrabit/" target="_blank" rel="noreferrer">Instagram</a>
      <a href="https://www.youtube.com/@vanthrabit" target="_blank" rel="noreferrer">YouTube</a>
      <a href="mailto:contact@vanthrabit.com">contact@vanthrabit.com</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 VANTHRABIT</p>
    <p>Tecnologia construída na prática.</p>
  </div>
</footer>
    </>
  )
}

export default App