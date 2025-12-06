import { Heart, Star, Sun, Shield, MessageCircle, Eye } from 'lucide-react'

export const Slide7 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-gradient-to-r from-red-500/30 to-pink-500/30 backdrop-blur-lg border border-pink-500/30 mb-4 animate-pulse">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-pink-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-200 to-red-200 bg-clip-text text-transparent">
          Богатство - искренне любить
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-pink-300/80 mt-2">
          Восторги не скрывать и счастье
        </p>
      </div>
      <div className="relative mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-3xl blur-xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-pink-900/30 to-red-900/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-pink-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-pink-500/40 to-red-500/40 flex items-center justify-center">
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-200" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500/50 to-pink-500/50 flex items-center justify-center animate-pulse">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-red-200" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-pink-100 mb-2">
                    Искренняя любовь
                  </h3>
                  <p className="text-lg sm:text-xl text-red-300/90">
                    Чтоб свет нести среди ненастья
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                  <p className="text-lg sm:text-xl text-red-300/90 text-left">
                    <span className="font-bold text-red-200">Богатство — правду говорить</span> без страха и прикрас
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
                  <p className="text-lg sm:text-xl text-red-300/90 text-left">
                    <span className="font-bold text-red-200">Восторги не скрывать</span> и делиться счастьем
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-500/30 to-pink-500/30 flex items-center justify-center animate-spin-slow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500/40 to-red-500/40 flex items-center justify-center animate-pulse">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-pink-200" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-500/40 to-red-500/40 flex items-center justify-center animate-bounce">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="group relative">
          <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-pink-500/20 transition-all duration-300 hover:border-pink-500/40 hover:from-pink-900/30 h-full">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pink-500/30 to-rose-500/30 flex items-center justify-center">
                  <Sun className="w-6 h-6 sm:w-7 sm:h-7 text-pink-200" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-pink-100 mb-3">
                  Свет в темноте
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                    <span className="text-sm text-pink-300/80">Глаза в глаза, как братья</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                    <span className="text-sm text-pink-300/80">Чтоб не искать контекст словам</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                    <span className="text-sm text-pink-300/80">Искренность в каждом взгляде</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative">
          <div className="bg-gradient-to-br from-rose-900/20 to-red-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-rose-500/20 transition-all duration-300 hover:border-rose-500/40 hover:from-rose-900/30 h-full">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-rose-500/30 to-red-500/30 flex items-center justify-center">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-rose-200" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-rose-100 mb-3">
                  Безусловная любовь
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-sm text-rose-300/80">Даже когда они капризны</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-sm text-rose-300/80">Ты любишь их еще сильней</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-sm text-rose-300/80">Гордость за детей — высшее богатство</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-rose-500/40 to-red-500/40 flex items-center justify-center animate-pulse">
            <MessageCircle className="w-3 h-3 text-rose-200 mx-auto mt-1.5" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent animate-shimmer" />
        <div className="relative bg-gradient-to-r from-pink-900/30 to-red-900/30 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-pink-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-4xl sm:text-5xl animate-bounce"><Heart /></div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-pink-100">
                Подлинные чувства — не скрывать восторг и счастье
              </p>
              <p className="text-sm sm:text-base text-pink-300/80 mt-2">
                Нести свет среди ненастья — вот истинное богатство
              </p>
            </div>
            <div className="text-4xl sm:text-5xl animate-bounce"><Heart /></div>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 opacity-70">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-pink-500/70">
          <div className="w-1 h-1 rounded-full bg-pink-400/40 animate-pulse" />
          Любовь, искренность, свет — истинные драгоценности жизни
          <div className="w-1 h-1 rounded-full bg-pink-400/40 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
)
