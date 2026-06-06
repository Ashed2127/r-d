import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './App.css'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)

    const wrapper = canvas.parentElement
    const resize = () => {
      if (!wrapper) return
      const width = wrapper.clientWidth
      const height = wrapper.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 180, 32)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x8f6eff,
      roughness: 0.35,
      metalness: 0.65,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      emissive: 0x5128ff,
      emissiveIntensity: 0.15,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const light1 = new THREE.PointLight(0xffffff, 1.2, 8)
    light1.position.set(2.5, 2, 2)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x9b7eff, 0.9, 10)
    light2.position.set(-2.3, -1.4, 2.8)
    scene.add(light2)

    const ambient = new THREE.AmbientLight(0x9a8aff, 0.35)
    scene.add(ambient)

    resize()
    window.addEventListener('resize', resize)

    let frameId = null
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      mesh.rotation.x += 0.006
      mesh.rotation.y += 0.009
      mesh.rotation.z += 0.004
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      scene.clear()
    }
  }, [])

  return (
    <main className="portfolio">
      <section className="hero-wrapper">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        <header className="hero-portfolio">
          <div className="intro">
            <span className="eyebrow">Portfolio</span>
            <h1>Ashedbir Diriba</h1>
            <p className="title">Junior Developer</p>
            <p className="description">
              I build clean, responsive React applications with modern tooling and modern 3D visuals.
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
      </section>

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
