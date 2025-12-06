import React, { useEffect, useState } from 'react'

interface BackgroundProps {
  theme: 'cold' | 'warm'
  transitionProgress?: number
}

const Background: React.FC<BackgroundProps> = ({ theme, transitionProgress = 0 }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const [gridSize, setGridSize] = useState(40)

  useEffect(() => {
    const calculateGridSize = () => {
      if (window.innerWidth < 640) return 25
      if (window.innerWidth < 1024) return 35
      return 50
    }

    const createParticles = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 12000)
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.4 + Math.random() * 0.8,
      }))
    }

    setGridSize(calculateGridSize())
    setParticles(createParticles())

    const handleResize = () => {
      setGridSize(calculateGridSize())
      setParticles(createParticles())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Основной фон с глубоким цветом */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 ${
          theme === 'cold' 
            ? 'bg-gradient-to-br from-slate-900/95 via-slate-800 to-blue-900/90' 
            : 'bg-gradient-to-br from-amber-900/40 via-orange-800/30 to-amber-950/50'
        }`}
      />

      {/* Средний слой - насыщенность */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 ${
          theme === 'cold' 
            ? 'bg-gradient-to-tr from-blue-900/20 via-transparent to-cyan-800/15' 
            : 'bg-gradient-to-tr from-orange-800/15 via-transparent to-amber-800/20'
        }`}
      />

      {/* Верхний слой - детали */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 ${
          theme === 'cold' 
            ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent' 
            : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent'
        }`}
      />

      {/* Очень тонкая сетка */}
      <div 
        className="absolute inset-0 transition-opacity duration-1500"
        style={{
          backgroundImage: `
            linear-gradient(${theme === 'cold' ? 'rgba(96, 165, 250, 0.015)' : 'rgba(245, 158, 11, 0.015)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'cold' ? 'rgba(96, 165, 250, 0.015)' : 'rgba(245, 158, 11, 0.015)'} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity: 0.2,
        }}
      />

      {/* Акцентные свечения */}
      <div className="absolute inset-0">
        {/* Холодные акценты */}
        <div 
          className={`absolute -top-32 -left-32 w-64 h-64 rounded-full blur-[80px] transition-all duration-1500 ${
            theme === 'cold' ? 'opacity-20' : 'opacity-0'
          } ${theme === 'cold' ? 'bg-blue-500/15' : 'bg-transparent'}`}
        />
        <div 
          className={`absolute -bottom-32 -right-32 w-64 h-64 rounded-full blur-[80px] transition-all duration-1500 ${
            theme === 'cold' ? 'opacity-15' : 'opacity-0'
          } ${theme === 'cold' ? 'bg-indigo-500/10' : 'bg-transparent'}`}
        />

        {/* Теплые акценты */}
        <div 
          className={`absolute top-1/3 -right-32 w-80 h-80 rounded-full blur-[90px] transition-all duration-1500 ${
            theme === 'warm' ? 'opacity-25' : 'opacity-0'
          } ${theme === 'warm' ? 'bg-amber-500/20' : 'bg-transparent'}`}
        />
        <div 
          className={`absolute bottom-1/3 -left-32 w-80 h-80 rounded-full blur-[90px] transition-all duration-1500 ${
            theme === 'warm' ? 'opacity-20' : 'opacity-0'
          } ${theme === 'warm' ? 'bg-orange-500/15' : 'bg-transparent'}`}
        />
      </div>

      {/* Акцентные частицы */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full transition-all duration-1000 ${
              theme === 'cold' 
                ? 'bg-blue-400/20 hover:bg-blue-300/30' 
                : 'bg-amber-400/25 hover:bg-amber-300/35'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${20 + (particle.id % 20)}s ease-in-out infinite`,
              animationDelay: `${(particle.id * 0.2) % 10}s`,
              filter: `blur(${particle.size * 0.3}px)`,
            }}
          />
        ))}
      </div>

      {/* Эффект глубины */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 pointer-events-none ${
          theme === 'cold' 
            ? 'bg-gradient-to-t from-slate-950/30 via-transparent to-transparent' 
            : 'bg-gradient-to-t from-amber-950/25 via-transparent to-transparent'
        }`}
      />

      {/* Виньетирование для фокуса */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 pointer-events-none ${
          theme === 'cold' 
            ? 'shadow-[inset_0_0_100px_rgba(2,6,23,0.4)]' 
            : 'shadow-[inset_0_0_100px_rgba(28,25,23,0.3)]'
        }`}
      />

      {/* Градиентные края для контраста */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 pointer-events-none ${
          theme === 'cold' 
            ? 'shadow-[0_0_80px_rgba(59,130,246,0.1)_inset]' 
            : 'shadow-[0_0_80px_rgba(245,158,11,0.1)_inset]'
        }`}
      />

      {/* Эффект перехода */}
      {transitionProgress > 0 && transitionProgress < 100 && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at center, 
                transparent ${100 - transitionProgress}%, 
                ${theme === 'cold' 
                  ? 'rgba(255, 255, 255, 0.05)' 
                  : 'rgba(0, 0, 0, 0.03)'} 
                ${100 - transitionProgress}%
              )`,
              opacity: Math.min(transitionProgress / 100, 0.3),
            }}
          />
        </div>
      )}

      {/* Акцентные линии для динамики */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 pointer-events-none ${
          theme === 'cold' 
            ? 'bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_50%,transparent_52%)]' 
            : 'bg-[linear-gradient(45deg,transparent_48%,rgba(245,158,11,0.03)_50%,transparent_52%)]'
        }`}
        style={{
          backgroundSize: '200px 200px',
          opacity: 0.1,
        }}
      />
    </div>
  )
}

export default Background