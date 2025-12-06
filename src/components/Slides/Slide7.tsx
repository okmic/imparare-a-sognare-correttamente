import { Heart, Star, MessageCircle, Eye, Sun, Shield } from 'lucide-react'

export const Slide7 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 backdrop-blur-lg border border-red-500/30 mb-4 animate-pulse">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent">
          Богатство - искренне любить
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-red-300/80 mt-2">
          Восторги не скрывать и счастье
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div className="group relative">
          <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-red-500/20 transition-all duration-300 hover:border-red-500/40 hover:from-red-900/30 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500/30 to-pink-500/30 flex items-center justify-center mb-4 animate-pulse">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-100 mb-3">
                Искренность
              </h3>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-red-300/90">
                  Чтоб свет нести среди ненастья
                </p>
                <p className="text-sm sm:text-base text-red-300/90">
                  Богатство - правду говорить
                </p>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-red-500/40 to-pink-500/40 flex items-center justify-center animate-bounce">
              <div className="w-4 h-4 rounded-full bg-red-200/90" />
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-orange-500/20 transition-all duration-300 hover:border-orange-500/40 hover:from-orange-900/30 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 flex items-center justify-center mb-4 animate-spin-slow">
                <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-orange-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-orange-100 mb-3">
                Свет
              </h3>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-orange-300/90">
                  Глаза в глаза, как братья
                </p>
                <p className="text-sm sm:text-base text-orange-300/90">
                  Чтоб не искать контекст словам
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500/40 to-yellow-500/40 animate-pulse">
              <div className="absolute inset-1 rounded-full bg-orange-200/90" />
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/40 hover:from-yellow-900/30 h-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-500/30 flex items-center justify-center mb-4">
                <div className="relative">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-200" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 animate-ping" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-100 mb-3">
                Наследие
              </h3>
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-yellow-300/90">
                  Богатство - гордость за детей
                </p>
                <p className="text-sm sm:text-base text-yellow-300/90">
                  Когда их любишь больше жизни
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 left-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500/40 to-amber-500/40 animate-pulse">
              <MessageCircle className="w-3 h-3 text-yellow-200 mx-auto mt-1.5" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl blur-xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-red-900/30 via-orange-900/30 to-yellow-900/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-red-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-red-500/30 to-orange-500/30">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-red-200" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-red-100">
                    Даже когда они капризны
                  </h3>
                  <p className="text-lg sm:text-xl text-orange-300/90 mt-1">
                    Ты любишь их еще сильней
                  </p>
                </div>
              </div>
              <div className="pl-4 border-l-2 border-red-500/30">
                <p className="text-lg sm:text-xl text-yellow-300/90 italic">
                  Безусловная любовь — высшая форма богатства
                </p>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-500/20 to-yellow-500/20 flex items-center justify-center animate-spin-slow">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center animate-pulse">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-200" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-500/40 to-pink-500/40 flex items-center justify-center animate-bounce">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-red-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-red-500/20">
          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl sm:text-4xl animate-pulse">💖</div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-red-100">
                Подлинные чувства
              </p>
              <p className="text-sm sm:text-base text-red-300/80">
                Не скрывать восторг и счастье
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 backdrop-blur-lg rounded-xl p-4 sm:p-5 border border-orange-500/20">
          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl sm:text-4xl animate-bounce">✨</div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-orange-100">
                Свет в темноте
              </p>
              <p className="text-sm sm:text-base text-orange-300/80">
                Нести добро среди ненастья
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-12 opacity-70">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-red-500/70">
          <div className="w-1 h-1 rounded-full bg-red-400/40 animate-pulse" />
          Любовь, искренность, свет — истинные драгоценности жизни
          <div className="w-1 h-1 rounded-full bg-red-400/40 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
)