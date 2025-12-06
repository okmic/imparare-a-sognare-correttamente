import React from 'react'
import "./Slide1.css"
import "../../../index.css"

interface SlideProps {
  theme?: 'cold' | 'warm'
}

export const Slide1: React.FC<SlideProps> = ({ theme = 'cold' }) => {
  const isCold = theme === 'cold'
  
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 ios-tap-fix">
      <div className="text-center max-w-4xl mx-auto">
        <div className="relative inline-block mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
            <div className={`transition-colors duration-700 ${
              isCold ? 'text-blue-100' : 'text-amber-100'
            }`}>
              Учитесь правильно мечтать
            </div>
          </h1>
          
          <div className="relative">
            <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed transition-colors duration-700 ${
              isCold ? 'text-blue-200' : 'text-amber-200'
            }`}>
              <div className="relative inline-block">
                <span className="opacity-70">Мы очень жадно</span>
                <div className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full opacity-50 transition-all duration-1000 ${
                  isCold ? 'bg-blue-400' : 'bg-amber-400'
                } animate-pulse ios-no-outline`} />
              </div>
              {' '}
              <span className="font-bold">все</span>
              {' '}
              <span className="relative">
                мечтаем
                <div className={`absolute -bottom-1 left-0 w-0 h-1 rounded-full transition-all duration-1000 delay-300 animate-growLine ios-no-outline ${
                  isCold ? 'bg-blue-400' : 'bg-amber-400'
                }`} />
              </span>
            </div>
          </div>
        </div>

        <div className={`text-lg sm:text-xl md:text-2xl font-light transition-colors duration-700 ${
          isCold ? 'text-blue-300' : 'text-amber-300'
        }`}>
          <div className="opacity-90 leading-relaxed max-w-2xl mx-auto">
            Начало пути от ума к сердцу
          </div>
        </div>

        <div className={`mt-8 sm:mt-12 md:mt-16 flex justify-center transition-opacity duration-1000 delay-500 ${
          isCold ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative">
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 ${
              isCold ? 'border-blue-400' : 'border-amber-400'
            } animate-spin-slow ios-no-outline`} />
            <div className={`absolute inset-2 rounded-full ${
              isCold ? 'bg-blue-400/30' : 'bg-amber-400/30'
            } animate-pulse ios-no-outline`} />
          </div>
        </div>
      </div>
    </div>
  )
}