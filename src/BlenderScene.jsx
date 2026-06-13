import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Animated Three.js scene used as the hero backdrop.
 * Builds a self-rendering scene with:
 *   - A central iridescent icosahedron wrapped in a wireframe sphere
 *   - A swirling field of orbiting particles
 *   - Soft point lights and a gentle camera dolly
 */
export default function BlenderScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    // ---- Renderer --------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // ---- Scene & camera --------------------------------------------------
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 6)

    // ---- Lights ----------------------------------------------------------
    const ambient = new THREE.AmbientLight(0xffffff, 0.45)
    scene.add(ambient)

    const keyLight = new THREE.PointLight(0xaa3bff, 4, 30)
    keyLight.position.set(4, 3, 4)
    scene.add(keyLight)

    const rimLight = new THREE.PointLight(0x60a5fa, 3, 30)
    rimLight.position.set(-5, -2, 2)
    scene.add(rimLight)

    // ---- Hero mesh: icosahedron with shader-like material ----------------
    const coreGeometry = new THREE.IcosahedronGeometry(1.4, 1)
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a0b2e,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      iridescence: 1,
      iridescenceIOR: 1.6,
      iridescenceThicknessRange: [100, 800],
      emissive: 0x6b21a8,
      emissiveIntensity: 0.4,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(core)

    // Wireframe shell around the core
    const shellGeometry = new THREE.IcosahedronGeometry(1.9, 1)
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const shell = new THREE.Mesh(shellGeometry, shellMaterial)
    scene.add(shell)

    // Outer glowing ring
    const ringGeometry = new THREE.TorusGeometry(2.6, 0.015, 16, 200)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.7,
    })
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.rotation.x = Math.PI / 2.4
    scene.add(ring)

    const ring2Geometry = new THREE.TorusGeometry(3.0, 0.01, 16, 200)
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0xaa3bff,
      transparent: true,
      opacity: 0.5,
    })
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material)
    ring2.rotation.x = Math.PI / 1.7
    ring2.rotation.y = Math.PI / 5
    scene.add(ring2)

    // ---- Orbiting particles ---------------------------------------------
    const particleCount = 600
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const palette = [
      new THREE.Color(0xaa3bff),
      new THREE.Color(0x60a5fa),
      new THREE.Color(0xf472b6),
      new THREE.Color(0xc084fc),
    ]

    for (let i = 0; i < particleCount; i += 1) {
      // Spherical distribution with a slight bias to the equator
      const radius = 2.6 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // ---- Pointer interaction --------------------------------------------
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const onPointerMove = event => {
      const rect = container.getBoundingClientRect()
      pointer.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.targetY = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }
    window.addEventListener('pointermove', onPointerMove)

    // ---- Resize handling -------------------------------------------------
    const resize = () => {
      const { clientWidth, clientHeight } = container
      if (!clientWidth || !clientHeight) return
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    // ---- Animation loop --------------------------------------------------
    const clock = new THREE.Clock()
    let frameId
    const tick = () => {
      const elapsed = clock.getElapsedTime()

      // Smooth pointer follow
      pointer.x += (pointer.targetX - pointer.x) * 0.05
      pointer.y += (pointer.targetY - pointer.y) * 0.05

      // Core rotation & floating
      core.rotation.x = elapsed * 0.25 + pointer.y * 0.4
      core.rotation.y = elapsed * 0.35 + pointer.x * 0.4
      core.position.y = Math.sin(elapsed * 0.6) * 0.1

      shell.rotation.x = -elapsed * 0.15
      shell.rotation.y = -elapsed * 0.2

      ring.rotation.z = elapsed * 0.4
      ring2.rotation.z = -elapsed * 0.3

      // Particle drift
      particles.rotation.x = elapsed * 0.05 + pointer.y * 0.3
      particles.rotation.y = elapsed * 0.08 + pointer.x * 0.3

      // Subtle camera parallax
      camera.position.x = pointer.x * 0.4
      camera.position.y = pointer.y * 0.4
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(tick)
    }
    tick()

    // ---- Cleanup ---------------------------------------------------------
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', onPointerMove)
      resizeObserver.disconnect()

      coreGeometry.dispose()
      coreMaterial.dispose()
      shellGeometry.dispose()
      shellMaterial.dispose()
      ringGeometry.dispose()
      ringMaterial.dispose()
      ring2Geometry.dispose()
      ring2Material.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      renderer.dispose()

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="blender-canvas" aria-hidden="true" />
}
