"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Custom shader material for advanced effects - Phoenix Crest theme
const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    
    vec3 pos = position;
    pos.y += sin(pos.x * 8.0 + time * 0.8) * 0.05 * intensity;
    pos.x += cos(pos.y * 6.0 + time * 1.2) * 0.03 * intensity;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Create subtle animated patterns
    float wave1 = sin(uv.x * 12.0 + time * 0.5) * cos(uv.y * 10.0 + time * 0.3);
    float wave2 = sin(uv.x * 18.0 - time * 0.7) * cos(uv.y * 15.0 + time * 0.4) * 0.5;
    float pattern = wave1 + wave2 * 0.5;
    
    // Create depth with subtle gradients
    float depth = length(uv - 0.5) * 2.0;
    depth = 1.0 - smoothstep(0.3, 1.2, depth);
    
    // Mix colors based on pattern and position - monochromatic palette
    vec3 baseColor = mix(color1, color2, pattern * 0.3 + 0.5);
    baseColor = mix(baseColor, color3, depth * 0.4);
    
    // Add subtle glow effect
    float glow = 1.0 - length(uv - 0.5) * 1.5;
    glow = smoothstep(0.0, 1.0, glow);
    
    // Very subtle opacity for background effect
    float alpha = glow * 0.15 * intensity;
    
    gl_FragColor = vec4(baseColor, alpha);
  }
`

export function PhoenixShaderPlane({
  position,
  color1 = "#0a0a0a",
  color2 = "#1a1a1a", 
  color3 = "#ffffff",
}: {
  position: [number, number, number]
  color1?: string
  color2?: string
  color3?: string
}) {
  const mesh = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 0.8 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
      color3: { value: new THREE.Color(color3) },
    }),
    [color1, color2, color3],
  )

  useFrame((state) => {
    if (mesh.current) {
      uniforms.time.value = state.clock.elapsedTime
      uniforms.intensity.value = 0.6 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
    }
  })

  return (
    <mesh ref={mesh} position={position}>
      <planeGeometry args={[4, 4, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

export function PhoenixEnergyRing({
  radius = 1.5,
  position = [0, 0, 0],
}: {
  radius?: number
  position?: [number, number, number]
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = state.clock.elapsedTime * 0.3
      const opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      ;(mesh.current.material as THREE.MeshBasicMaterial).opacity = opacity
    }
  })

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.85, radius, 64]} />
      <meshBasicMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.08} 
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}