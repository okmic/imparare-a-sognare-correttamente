import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Play, Pause, BookOpen, Heart, RotateCcw, Headphones, Sparkles } from 'lucide-react'
import Slide from '../Slide/Slide'
import Background from '../ui/Background/Background'
import Text from '../Text/Text'
import voice from "../../media/voice.mp3"
import type { SlideProps } from './types'

interface SliderProps {
  children: React.ReactElement<SlideProps>[]
  timeMarks: number[]
}

type AppState = 'initial' | 'playing' | 'finished'

const Slider: React.FC<SliderProps> = ({ children, timeMarks }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [appState, setAppState] = useState<AppState>('initial')
  const [showText, setShowText] = useState(false)
  const [showAudioAlert, setShowAudioAlert] = useState(false)
  const [showControls, setShowControls] = useState(true)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const animationRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const currentTimeRef = useRef<number>(0)
  const controlsTimeoutRef = useRef<any>(0)
  const interactionRef = useRef<number>(0)

  const getThemeForSlide = (slideIndex: number): 'cold' | 'warm' => {
    return slideIndex >= 4 ? 'warm' : 'cold'
  }

  const showControlsTemporarily = () => {
    setShowControls(true)
    interactionRef.current = Date.now()
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      if (Date.now() - interactionRef.current > 2900) {
        setShowControls(false)
      }
    }, 3000)
  }

  const resetControlsTimer = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (appState === 'playing') {
        setShowControls(false)
      }
    }, 3000)
  }

  // Инициализация аудио
  useEffect(() => {
    audioRef.current = new Audio(voice)
    audioRef.current.preload = 'metadata'

    const handleEnded = () => {
      setIsPlaying(false)
      setAppState('finished')
      setCurrentSlide(0)
      setShowControls(true)
    }

    audioRef.current.addEventListener('ended', handleEnded)

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded)
        audioRef.current.pause()
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [])

  // Обработчик взаимодействия для показа контролов
  useEffect(() => {
    const handleInteraction = () => {
      if (appState === 'playing') {
        showControlsTemporarily()
      }
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [appState])

  const updateSlide = useCallback(() => {
    if (!isPlaying) return

    const elapsed = Date.now() - startTimeRef.current
    currentTimeRef.current = elapsed
    
    let newSlide = 0
    for (let i = timeMarks.length - 1; i >= 0; i--) {
      if (elapsed >= timeMarks[i]) {
        newSlide = i + 1
        break
      }
    }

    if (newSlide !== currentSlide) {
      setCurrentSlide(newSlide)
    }

    animationRef.current = requestAnimationFrame(updateSlide)
  }, [isPlaying, currentSlide, timeMarks])

  useEffect(() => {
    if (isPlaying) {
      startTimeRef.current = Date.now() - currentTimeRef.current
      animationRef.current = requestAnimationFrame(updateSlide)
      resetControlsTimer()
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying, updateSlide])

  const togglePlayPause = async () => {
    if (!audioRef.current) return

    showControlsTemporarily()

    if (isPlaying) {
      setIsPlaying(false)
      audioRef.current.pause()
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        setAppState('playing')
        setShowText(false)
        setShowAudioAlert(false)
      } catch (error) {
        setShowAudioAlert(true)
      }
    }
  }

  const resetPresentation = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentSlide(0)
    currentTimeRef.current = 0
    setAppState('initial')
    setShowAudioAlert(false)
    setShowControls(true)
  }

  const startPresentation = async () => {
    if (!audioRef.current) return
    
    try {
      audioRef.current.currentTime = 0
      await audioRef.current.play()
      setIsPlaying(true)
      setAppState('playing')
      setShowText(false)
      setShowAudioAlert(false)
      currentTimeRef.current = 0
      startTimeRef.current = Date.now()
      showControlsTemporarily()
    } catch (error) {
      setShowAudioAlert(true)
    }
  }

  useEffect(() => {
    const blockKeys = (e: KeyboardEvent) => {
      if (appState === 'playing' && [
        'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
        'PageUp', 'PageDown'
      ].includes(e.key)) {
        e.preventDefault()
      }
      if (appState === 'playing' && e.key === ' ') {
        e.preventDefault()
        togglePlayPause()
      }
    }

    window.addEventListener('keydown', blockKeys)
    
    return () => {
      window.removeEventListener('keydown', blockKeys)
    }
  }, [appState])

  const currentTheme = getThemeForSlide(currentSlide)
  const isColdTheme = currentTheme === 'cold'
  const transitionProgress = currentSlide === 4 ? 100 : 0

  const handleScreenClick = () => {
    if (appState === 'playing') {
      showControlsTemporarily()
    }
  }

  if (appState === 'initial' && showText) {
    return (
      <div className="relative w-full min-h-screen overflow-y-auto select-none">
        <Background theme="warm" />
        <div className="py-8 pb-32">
          <Text />
        </div>
        
        <div className="fixed bottom-6 left-4 right-4 flex flex-col sm:flex-row gap-3 z-50 px-4">
          <button
            onClick={() => setShowText(false)}
            className="flex-1 px-5 py-4 rounded-xl bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-xl border border-slate-600/30 transition-all duration-300 active:scale-95 text-slate-100 text-base font-medium hover:from-slate-700/40 hover:to-slate-800/50 hover:border-slate-500/40 shadow-lg"
          >
            Вернуться назад
          </button>
          <button
            onClick={startPresentation}
            className="flex-1 px-5 py-4 rounded-xl bg-gradient-to-br from-amber-600/40 to-orange-600/40 backdrop-blur-xl border border-amber-500/40 transition-all duration-300 active:scale-95 text-amber-50 text-base font-medium hover:from-amber-600/50 hover:to-orange-600/50 hover:border-amber-400/50 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-3"
          >
            <Heart className="w-5 h-5" />
            <span>Начать путешествие</span>
          </button>
        </div>
      </div>
    )
  }

  if (appState === 'initial' && !showText) {
    return (
      <div className="relative w-full h-screen overflow-hidden select-none">
        <Background theme="cold" />
        
        <div className="flex items-center justify-center h-full px-4">
          <div className="text-white text-center backdrop-blur-xl bg-gradient-to-br from-slate-800/40 to-slate-900/50 p-8 sm:p-10 rounded-3xl border border-slate-700/40 max-w-lg w-full shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center animate-pulse shadow-lg">
                  <Heart className="w-10 h-10 text-blue-300" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/50 to-blue-500/50 flex items-center justify-center animate-bounce">
                  <Sparkles className="w-5 h-5 text-cyan-200" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Учитесь мечтать сердцем
            </h1>
            
            <p className="mb-8 text-slate-300 text-base leading-relaxed">
              Путешествие от ложных целей к истинным ценностям: дружба, любовь, верность
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-4 mb-8 border border-blue-500/30">
              <p className="text-blue-100 text-sm flex items-center justify-center gap-2">
                <Headphones className="w-4 h-4 flex-shrink-0" />
                <span>Найдите тихое место и наденьте наушники</span>
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={startPresentation}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600/40 to-cyan-600/40 backdrop-blur-lg border border-blue-500/40 transition-all duration-300 active:scale-95 text-white hover:from-blue-600/50 hover:to-cyan-600/50 hover:border-blue-400/50 flex items-center justify-center gap-3 text-base font-medium shadow-lg hover:shadow-blue-500/25"
              >
                <Play className="w-5 h-5" />
                <span>Начать погружение</span>
              </button>
              
              <button
                onClick={() => setShowText(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-br from-slate-700/30 to-slate-800/40 backdrop-blur-lg border border-slate-600/30 transition-all duration-300 active:scale-95 text-slate-100 hover:from-slate-700/40 hover:to-slate-800/50 hover:border-slate-500/40 flex items-center justify-center gap-3 text-base"
              >
                <BookOpen className="w-5 h-5" />
                <span>Сначала прочитать</span>
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-700/40">
              <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" />
                <span>Время просмотра: 3 минуты • 8 смысловых слайдов</span>
                <div className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (appState === 'finished') {
    return (
      <div className="relative w-full h-screen overflow-hidden select-none">
        <Background theme="warm" />
        
        <div className="flex items-center justify-center h-full px-4">
          <div className="text-white text-center backdrop-blur-xl bg-gradient-to-br from-amber-900/40 to-orange-900/50 p-8 sm:p-10 rounded-3xl border border-amber-700/40 max-w-lg w-full shadow-2xl">
            
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-600/40 to-orange-600/40 flex items-center justify-center animate-pulse shadow-lg">
                  <Heart className="w-12 h-12 text-amber-300" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/50 to-red-500/50 flex items-center justify-center animate-bounce">
                  <Sparkles className="w-6 h-6 text-orange-200" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 bg-clip-text text-transparent">
              Спасибо за путешествие
            </h1>
            
            <p className="mb-8 text-amber-300 text-base leading-relaxed">
              Надеюсь, эта история напомнила о самом важном — о тех, кто делает нас богаче не рублём, а доверием
            </p>
            
            <div className="bg-gradient-to-r from-amber-600/25 to-orange-600/25 backdrop-blur-lg rounded-xl p-5 mb-8 border border-amber-500/30">
              <p className="text-amber-100 text-lg italic">
                "Мечтайте не умом, а сердцем"
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={resetPresentation}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600/40 to-orange-600/40 backdrop-blur-lg border border-amber-500/40 transition-all duration-300 active:scale-95 text-white hover:from-amber-600/50 hover:to-orange-600/50 hover:border-amber-400/50 flex items-center justify-center gap-3 text-base font-medium shadow-lg hover:shadow-amber-500/25"
              >
                <Play className="w-5 h-5" />
                <span>Прожить снова</span>
              </button>
              
              <button
                onClick={() => {
                  setShowText(true)
                  setAppState('initial')
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-br from-amber-800/30 to-orange-800/40 backdrop-blur-lg border border-amber-700/30 transition-all duration-300 active:scale-95 text-amber-100 hover:from-amber-800/40 hover:to-orange-800/50 hover:border-amber-600/40 flex items-center justify-center gap-3 text-base"
              >
                <BookOpen className="w-5 h-5" />
                <span>Вернуться к тексту</span>
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-amber-700/40">
              <div className="text-amber-500/80 text-sm">
                Поделитесь этим чувством с тем, о ком подумали во время просмотра
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="relative w-full h-screen overflow-hidden select-none cursor-pointer"
      onClick={handleScreenClick}
    >
      <Background 
        theme={currentTheme} 
        transitionProgress={transitionProgress}
      />
      
      <div className="w-full h-full">
        <div className="h-full flex items-center justify-center">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement<SlideProps>(child)) {
              return (
                <Slide key={index} isActive={index === currentSlide}>
                  {React.cloneElement(child, {
                    theme: getThemeForSlide(index),
                    key: index
                  })}
                </Slide>
              )
            }
            return (
              <Slide key={index} isActive={index === currentSlide}>
                {child}
              </Slide>
            )
          })}
        </div>
      </div>
      
      {showAudioAlert && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 px-4 max-w-md w-full">
          <div className="bg-gradient-to-r from-red-600/30 to-pink-600/30 backdrop-blur-xl border border-red-500/40 rounded-xl p-4 shadow-lg">
            <p className="text-red-100 text-sm text-center">
              Нажмите на экран, чтобы разрешить воспроизведение, затем попробуйте снова
            </p>
          </div>
        </div>
      )}

      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={togglePlayPause}
          className={`
            p-4 sm:p-5 rounded-xl transition-all duration-300 active:scale-95 shadow-2xl backdrop-blur-xl
            ${isPlaying 
              ? isColdTheme
                ? 'bg-gradient-to-r from-red-600/50 to-pink-600/50 border border-red-500/60 hover:from-red-600/60 hover:to-pink-600/60 hover:border-red-400/70' 
                : 'bg-gradient-to-r from-red-600/50 to-orange-600/50 border border-red-500/60 hover:from-red-600/60 hover:to-orange-600/60 hover:border-red-400/70'
              : isColdTheme
                ? 'bg-gradient-to-r from-emerald-600/50 to-green-600/50 border border-emerald-500/60 hover:from-emerald-600/60 hover:to-green-600/60 hover:border-emerald-400/70'
                : 'bg-gradient-to-r from-emerald-600/50 to-amber-600/50 border border-emerald-500/60 hover:from-emerald-600/60 hover:to-amber-600/60 hover:border-emerald-400/70'
            }
          `}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
          ) : (
            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg ml-0.5" />
          )}
        </button>
      </div>

      <div className={`absolute bottom-6 right-6 z-50 transition-all duration-300 ${
        showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={resetPresentation}
          className={`
            p-3 sm:p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 active:scale-95 shadow-xl
            ${isColdTheme
              ? 'bg-gradient-to-r from-blue-600/50 to-cyan-600/50 border border-blue-500/60 hover:from-blue-600/60 hover:to-cyan-600/60 hover:border-blue-400/70'
              : 'bg-gradient-to-r from-amber-600/50 to-orange-600/50 border border-amber-500/60 hover:from-amber-600/60 hover:to-orange-600/60 hover:border-amber-400/70'
            }
          `}
          title="С начала"
        >
          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg" />
        </button>
      </div>

      <div className={`absolute top-6 left-6 z-40 transition-all duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${isColdTheme ? 'bg-blue-400' : 'bg-amber-400'} animate-pulse shadow-md`} />
          <span className={`text-sm font-medium backdrop-blur-lg px-3 py-1.5 rounded-lg border ${
            isColdTheme
              ? 'text-blue-100 bg-blue-900/30 border-blue-700/40'
              : 'text-amber-100 bg-amber-900/30 border-amber-700/40'
          }`}>
            Слайд <span className="font-bold">{currentSlide + 1}</span> из {children.length}
          </span>
        </div>
      </div>

      <div className={`absolute bottom-28 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`flex gap-2 sm:gap-3 px-4 py-2 backdrop-blur-xl rounded-xl border shadow-lg ${
          isColdTheme
            ? 'bg-blue-900/20 border-blue-700/40'
            : 'bg-amber-900/20 border-amber-700/40'
        }`}>
          {children.map((_, index) => (
            <div
              key={index}
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-500 ${
                index <= currentSlide 
                  ? getThemeForSlide(index) === 'cold' 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                    : 'bg-gradient-to-r from-amber-400 to-orange-400'
                  : isColdTheme ? 'bg-blue-400/30' : 'bg-amber-400/30'
              } ${index === currentSlide ? 'scale-150' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className={`absolute top-6 right-6 z-40 transition-all duration-300 ${
        showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`flex items-center gap-2 backdrop-blur-lg px-3 py-1.5 rounded-lg border ${
          isColdTheme
            ? 'bg-blue-900/20 border-blue-700/40'
            : 'bg-amber-900/20 border-amber-700/40'
        }`}>
          <div className={`w-2 h-2 rounded-full ${isColdTheme ? 'bg-blue-400' : 'bg-amber-400'}`} />
          <span className={`text-xs ${
            isColdTheme ? 'text-blue-300/80' : 'text-amber-300/80'
          }`}>
            {isColdTheme ? 'Холодная тема' : 'Теплая тема'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Slider