import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="hero-portfolio">
        <div className="intro">
          <span className="eyebrow">Portfolio</span>
          <h1>Ashedbir Diriba</h1>
          <p className="title">Junior Developer</p>
          <p className="description">
            I build clean, responsive React applications with modern tooling and a strong focus on
            user experience.
          </p>
          <div className="cta-row">
            <a href="#work" className="button primary">
              View work
            </a>
            <a href="#contact" className="button secondary">
              Contact me
            </a>
          </div>
        </div>

        <div className="stats-card">
          <div className="stat">
            <span className="stat-value">3+</span>
            <span className="stat-label">Featured projects</span>
          </div>
          <div className="stat">
            <span className="stat-value">React</span>
            <span className="stat-label">Primary stack</span>
          </div>
          <div className="stat">
            <span className="stat-value">Clean</span>
            <span className="stat-label">Modern code</span>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <h2>About me</h2>
        <p>
          I am a motivated junior developer specializing in React and Vite. I enjoy turning ideas into
          intuitive interfaces and writing code that is easy to maintain.
        </p>
      </section>

      <section id="work" className="section cards">
        <h2>Featured work</h2>
        <div className="card-grid">
          <article className="card">
            <h3>React portfolio</h3>
            <p>A modern portfolio page that highlights skills, projects, and contact details.</p>
          </article>
          <article className="card">
            <h3>UI components</h3>
            <p>Reusable interface blocks built with accessibility and responsive layout in mind.</p>
          </article>
          <article className="card">
            <h3>Web app prototype</h3>
            <p>A fast prototype demonstrating user flows, polished layout, and clean design.</p>
          </article>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>Vite</li>
          <li>HTML & CSS</li>
          <li>Responsive design</li>
          <li>Clean code</li>
        </ul>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>
          I’m available for junior developer opportunities and small projects. Let’s work together to
          build something great.
        </p>
        <a href="mailto:hello@ashedbir.dev" className="button primary">
          Email me
        </a>
      </section>
    </main>
  )
}

export default App
