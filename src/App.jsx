import { useEffect, useState } from 'react'
import './App.css'
import BlenderScene from './BlenderScene.jsx'
import MiniScene from './MiniScene.jsx'

const features = [
  {
    id: 'morph',
    title: 'Generative Morphing',
    description:
      'Procedural geometry that re-shapes itself based on your prompt — perfect for character reveals, logo intros, and product transformations.',
  },
  {
    id: 'torus',
    title: 'Knot Rigging',
    description:
      'Auto-rigged spline motion paths allow you to weave any mesh along elegant curves with full timeline control.',
  },
  {
    id: 'waves',
    title: 'Liquid Simulation',
    description:
      'Real-time fluid and wave systems that blend physics with style, ideal for transitions and abstract loops.',
  },
  {
    id: 'crystal',
    title: 'Crystal Shading',
    description:
      'AI-tuned refraction and dispersion that delivers hyper-real gem materials straight from a text description.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Describe your vision',
    text: 'Type a prompt like “neon crystal drifting through a synthwave void” and watch Blender AI sketch the first frame.',
  },
  {
    step: '02',
    title: 'Refine with intent',
    text: 'Use natural language to tweak lighting, materials, and motion. The scene re-generates in seconds while you keep creating.',
  },
  {
    step: '03',
    title: 'Export anywhere',
    text: 'Render to MP4, GIF, transparent WebM, or push directly to social. All powered by the same cloud render farm you already trust.',
  },
]

const showcase = [
  {
    title: 'Neon Reef',
    tag: 'Loop · 12s',
    accent: '#aa3bff',
  },
  {
    title: 'Liquid Mercury',
    tag: 'Transition · 4s',
    accent: '#60a5fa',
  },
  {
    title: 'Crystal Bloom',
    tag: 'Reveal · 6s',
    accent: '#f472b6',
  },
  {
    title: 'Solar Drift',
    tag: 'Loop · 30s',
    accent: '#34d399',
  },
  {
    title: 'Glass Pulse',
    tag: 'Loop · 8s',
    accent: '#fbbf24',
  },
  {
    title: 'Quantum Veil',
    tag: 'Reveal · 10s',
    accent: '#c084fc',
  },
]

const stats = [
  { label: 'Average render time', value: '4.2s' },
  { label: 'Material presets', value: '320+' },
  { label: 'Cloud GPUs', value: '1,800' },
]

function App() {
  const [prompt, setPrompt] = useState('A glowing crystal floating through a synthwave void')
  const [submitted, setSubmitted] = useState(null)

  // Simple reveal-on-scroll animations for sections
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleGenerate = event => {
    event.preventDefault()
    setSubmitted(prompt)
  }

  return (
    <div className="blender-page">
      <header className="top-nav">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <span /> <span /> <span />
          </span>
          <span className="brand-name">
            Blender<span>AI</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#showcase">Showcase</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="button ghost" href="#start">
          Sign in
        </a>
      </header>

      <main id="top">
        {/* ============================ HERO ============================ */}
        <section className="hero">
          <div className="hero-canvas-wrap">
            <BlenderScene />
            <div className="hero-canvas-fade" />
          </div>

          <div className="hero-content">
            <span className="eyebrow">AI-powered motion studio</span>
            <h1>
              Create stunning <span className="gradient-text">3D animation</span>
              <br />
              in seconds, not hours.
            </h1>
            <p className="description">
              Blender AI turns your ideas into cinematic loops, transitions, and
              reveals. Describe a scene, refine with natural language, and ship
              beautiful motion for the web, social, and product.
            </p>

            <form className="prompt-form" onSubmit={handleGenerate}>
              <label htmlFor="prompt" className="sr-only">
                Animation prompt
              </label>
              <div className="prompt-input-wrap">
                <span className="prompt-icon" aria-hidden="true">✦</span>
                <input
                  id="prompt"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  placeholder="Describe the animation you want to create…"
                />
                <button type="submit" className="button primary">
                  Generate
                </button>
              </div>
              <div className="prompt-suggestions" role="list">
                {[
                  'Iridescent jellyfish drifting in space',
                  'Cinematic product reveal on a marble stage',
                  'Looping sci-fi corridor with neon lights',
                ].map(suggestion => (
                  <button
                    key={suggestion}
                    type="button"
                    className="chip"
                    onClick={() => setPrompt(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </form>

            {submitted && (
              <p className="prompt-feedback">
                <span className="dot" /> Queued “{submitted}” — your render is warming up.
              </p>
            )}

            <div className="hero-stats">
              {stats.map(stat => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ FEATURES ============================ */}
        <section className="section features reveal" id="features">
          <header className="section-head">
            <span className="eyebrow">Core toolkit</span>
            <h2>Everything you need to animate in 3D</h2>
            <p>
              From generative geometry to smart shading, Blender AI brings the
              most-loved parts of Blender into a guided, AI-assisted workflow.
            </p>
          </header>

          <div className="feature-grid">
            {features.map(feature => (
              <article className="feature-card" key={feature.id}>
                <div className="feature-canvas">
                  <MiniScene variant={feature.id} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============================ WORKFLOW ============================ */}
        <section className="section workflow reveal" id="workflow">
          <header className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>From idea to render in three steps</h2>
            <p>
              A frictionless pipeline designed for designers, marketers, and
              storytellers who want motion without the steep learning curve.
            </p>
          </header>

          <ol className="workflow-steps">
            {workflow.map(item => (
              <li className="workflow-step" key={item.step}>
                <span className="step-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ============================ SHOWCASE ============================ */}
        <section className="section showcase reveal" id="showcase">
          <header className="section-head">
            <span className="eyebrow">Made with Blender AI</span>
            <h2>A library of cinematic motion</h2>
            <p>
              Explore loops, transitions, and reveals crafted by our community.
              Click any tile to preview the animation and remix the prompt.
            </p>
          </header>

          <div className="showcase-grid">
            {showcase.map(item => (
              <article
                className="showcase-card"
                key={item.title}
                style={{ '--accent': item.accent }}
              >
                <div className="showcase-preview" aria-hidden="true">
                  <MiniScene
                    variant={['morph', 'torus', 'waves', 'crystal'][item.title.length % 4]}
                  />
                </div>
                <div className="showcase-meta">
                  <h3>{item.title}</h3>
                  <span>{item.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================ CTA ============================ */}
        <section className="cta reveal" id="start">
          <div className="cta-card">
            <div>
              <h2>Start animating with AI today</h2>
              <p>
                Free for personal projects. No credit card required. Render up to
                10 minutes of motion every month on us.
              </p>
            </div>
            <div className="cta-actions">
              <a className="button primary" href="#start">
                Get Blender AI
              </a>
              <a className="button secondary" href="#showcase">
                View showcase
              </a>
            </div>
          </div>
        </section>

        {/* ============================ FOOTER ============================ */}
        <footer className="site-footer">
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Blender AI · Motion for everyone</span>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#workflow">Workflow</a>
              <a href="#showcase">Showcase</a>
              <a href="#pricing">Pricing</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
