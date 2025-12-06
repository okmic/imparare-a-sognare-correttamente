import { Heart, Target, Sparkles, CheckCircle, Star } from 'lucide-react'

export const Slide8 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-3xl mx-auto w-full">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-pink-500/30 to-red-500/30 backdrop-blur-lg border border-red-500/30 mb-4 animate-pulse">
          <Heart className="w-6 h-6 text-red-300" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-200 to-red-200 bg-clip-text text-transparent">
          Главный вывод
        </h2>
        <p className="text-base md:text-lg text-pink-300/80 mt-1">
          Счастье не стоит ни рубля
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/40 to-red-500/40 flex items-center justify-center mb-3 animate-pulse">
            <Target className="w-6 h-6 text-red-200" />
          </div>
          <h3 className="text-lg font-bold text-pink-100 mb-1">Вывод</h3>
          <p className="text-sm text-red-300/80">
            Ценности бесплатны
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/40 to-pink-500/40 flex items-center justify-center mb-3 animate-bounce">
            <Sparkles className="w-6 h-6 text-pink-200" />
          </div>
          <h3 className="text-lg font-bold text-red-100 mb-1">Итог</h3>
          <p className="text-sm text-pink-300/80">
            Вы это поняли
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/40 to-red-500/40 flex items-center justify-center mb-3">
            <CheckCircle className="w-6 h-6 text-pink-200" />
          </div>
          <h3 className="text-lg font-bold text-pink-100 mb-1">Решение</h3>
          <p className="text-sm text-red-300/80">
            К сердцу
          </p>
        </div>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl blur-lg" />
        <div className="relative bg-gradient-to-br from-pink-900/30 to-red-900/30 backdrop-blur-md rounded-xl p-4 border border-pink-500/30">
          <div className="flex items-center justify-center gap-3">
            <div className="text-2xl animate-bounce">😊</div>
            <div>
              <h3 className="text-base font-bold text-pink-100">
                С улыбкой засыпать
              </h3>
              <p className="text-sm text-red-300/80">
                С теплотой просыпаться
              </p>
            </div>
            <div className="text-2xl animate-bounce">😊</div>
          </div>
        </div>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-red-500/5 rounded-xl blur-lg" />
        <div className="relative bg-gradient-to-br from-pink-900/40 to-red-900/40 backdrop-blur-md rounded-xl p-5 border border-pink-500/30">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/30 to-red-500/30 flex items-center justify-center mb-3 animate-spin-slow">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/40 to-pink-500/40 flex items-center justify-center">
                <Star className="w-6 h-6 text-red-200" />
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent">
                Мечтайте не умом,
              </span>
              {' '}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                а сердцем
              </span>
            </h2>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full my-2" />
            
            <p className="text-sm text-pink-300/90 mb-3">
              От ложных целей к истинным ценностям
            </p>
            
            <div className="flex items-center gap-2 text-xs text-pink-400/70">
              <div className="w-1 h-1 rounded-full bg-pink-400/50" />
              Любовь
              <div className="w-1 h-1 rounded-full bg-pink-400/50" />
              Дружба
              <div className="w-1 h-1 rounded-full bg-pink-400/50" />
              Верность
            </div>
          </div>
        </div>
      </div>
      
      <div className="opacity-60">
        <a 
          href="https://okmic.github.io/okmic/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-pink-400/60 hover:text-pink-300/80 transition-colors inline-flex items-center gap-1"
        >
          <div className="w-1 h-1 rounded-full bg-pink-400/40 animate-pulse" />
          created with ❤️ by okmic
          <div className="w-1 h-1 rounded-full bg-pink-400/40 animate-pulse" />
        </a>
      </div>
    </div>
  </div>
)