import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const variants = {
  morph: {
    geometry: () => new THREE.IcosahedronGeometry(1, 1),
    color: 0xaa3bff,
    speed: 0.6,
  },
  torus: {
    geometry: () => new THREE.TorusKnotGeometry(0.8, 0.25, 120, 18),
    color: 0x60a5fa,
    speed: 0.4,
  },
  waves: {
    geometry: () => new THREE.TorusGeometry(0.9, 0.3, 16, 80),
    color: 0xf472b6,
    speed: 0.7,
  },
  crystal: {
    geometry: () => new THREE.OctahedronGeometry(1, 0),
    color: 0x34d399,
    speed: 0.5,
  },
}

/**
 * Small, self-contained Three.js mini-scene used inside a feature card.
 * Renders a single rotating mesh with a soft halo behind it.
 */
export default function MiniScene({ variant = 'morph' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined
    const config = variants[variant] ?? variants.morph

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50)
    camera.position.set(0, 0, 4)

    scene.add(new THREE.AmbientLight(0xffffff, 0.5))
    const key = new THREE.PointLight(config.color, 3, 20)
    key.position.set(3, 3, 3)
    scene.add(key)
    const rim = new THREE.PointLight(0xffffff, 1, 20)
    rim.position.set(-3, -2, 2)
    scene.add(rim)

    const geometry = config.geometry()
    const material = new THREE.MeshPhysicalMaterial({
      color: config.color,
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 0.8,
      emissive: config.color,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.95,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Soft halo plane
    const haloGeometry = new THREE.PlaneGeometry(4, 4)
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: config.color,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const halo = new THREE.Mesh(haloGeometry, haloMaterial)
    halo.position.z = -0.5
    scene.add(halo)

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

    const clock = new THREE.Clock()
    let frameId
    const tick = () => {
      const elapsed = clock.getElapsedTime()
      mesh.rotation.x = elapsed * config.speed
      mesh.rotation.y = elapsed * config.speed * 0.8
      const scale = 1 + Math.sin(elapsed * 1.4) * 0.04
      mesh.scale.setScalar(scale)
      halo.rotation.z = -elapsed * 0.2
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      geometry.dispose()
      material.dispose()
      haloGeometry.dispose()
      haloMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [variant])

  return <div ref={containerRef} className="mini-scene" aria-hidden="true" />
}
