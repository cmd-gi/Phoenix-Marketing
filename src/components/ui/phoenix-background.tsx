"use client"

import { Canvas } from "@react-three/fiber"
import { PhoenixShaderPlane, PhoenixEnergyRing } from "./background-shader"
import { Suspense } from "react"

export function PhoenixBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Multiple shader planes for depth */}
          <PhoenixShaderPlane
            position={[0, 0, -2]}
            color1="#050505"
            color2="#0f0f0f"
            color3="#fafafa"
          />
          <PhoenixShaderPlane
            position={[1.5, -1, -3]}
            color1="#0a0a0a"
            color2="#151515"
            color3="#e5e5e5"
          />
          <PhoenixShaderPlane
            position={[-1.8, 1.2, -4]}
            color1="#030303"
            color2="#121212"
            color3="#f0f0f0"
          />
          
          {/* Subtle energy rings */}
          <PhoenixEnergyRing radius={2.5} position={[0, 0, -1]} />
          <PhoenixEnergyRing radius={1.8} position={[2, -1.5, -2]} />
          <PhoenixEnergyRing radius={1.3} position={[-2.5, 1, -3]} />
          
          {/* Ambient light */}
          <ambientLight intensity={0.1} />
        </Suspense>
      </Canvas>

      {/* Additional CSS-based floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}