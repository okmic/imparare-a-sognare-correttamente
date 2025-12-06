import React from 'react'

interface SlideProps {
  children: React.ReactNode
  isActive: boolean
}

const Slide: React.FC<SlideProps> = ({ children, isActive }) => {
  return (
    <div className={`
      absolute inset-0 w-full h-full transition-all duration-700 ease-out
      ${isActive 
        ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto' 
        : 'opacity-0 scale-95 translate-x-4 pointer-events-none'
      }
    `}>
      <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Slide