import { Users, Globe, Heart, Shield, Clock, ArrowRight } from 'lucide-react'

export const Slide6 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full mb-4">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300 border-none" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent">
          Кто в черной полосе препятствий
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-orange-300/80 mt-2">
          Подставит вам свое плечо
        </p>
      </div>
      
      <div className="relative mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl blur-xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-orange-900/30 to-amber-900/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-orange-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500/40 to-amber-500/40 flex items-center justify-center">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-orange-200 border-none" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500/50 to-yellow-500/50 flex items-center justify-center animate-pulse">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200 border-none" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-orange-100 mb-2">
                    Настоящее богатство
                  </h3>
                  <p className="text-lg sm:text-xl text-amber-300/90">
                    Не попросит ни о чем
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                  <p className="text-lg sm:text-xl text-amber-300/90 text-left">
                    <span className="font-bold text-amber-200">Ищите в нем свое богатство</span> — не в деньгах, а в людях
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                  <p className="text-lg sm:text-xl text-amber-300/90 text-left">
                    <span className="font-bold text-amber-200">Богатство — просто доверять</span> без страха и сомнений
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-500/30 to-yellow-500/30 flex items-center justify-center animate-spin-slow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-500/40 to-amber-500/40 flex items-center justify-center animate-pulse">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-200 border-none" />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 flex items-center justify-center animate-bounce">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-200 border-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="group relative">
          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-amber-500/20 transition-all duration-300 hover:border-amber-500/40 hover:from-amber-900/30 h-full">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-amber-200 border-none" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-100 mb-3">
                  На край света
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-sm text-amber-300/80">С кем всегда с улыбкой ждете</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-sm text-amber-300/80">И на край света с ним пойдете</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-sm text-amber-300/80">Богаты не рублем, а доверием</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/40 hover:from-yellow-900/30 h-full">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-200 border-none" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-100 mb-3">
                  Без оглядки
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-sm text-yellow-300/80">Легко, наивно, без оглядки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-sm text-yellow-300/80">Чтоб не искать нигде догадки</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-sm text-yellow-300/80">Ответы прямо получать</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 right-4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500/40 to-orange-500/40 flex items-center justify-center animate-pulse">
            <div className="w-3 h-3 rounded-full bg-amber-200/90" />
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-shimmer" />
        <div className="relative bg-gradient-to-r from-amber-900/30 to-yellow-900/30 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-amber-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-4xl sm:text-5xl animate-bounce">🤝</div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-amber-100">
                Богатство дружеских объятий и разговоров по душам
              </p>
              <p className="text-sm sm:text-base text-amber-300/80 mt-2">
                Когда глаза в глаза, как братья — вот настоящее сокровище
              </p>
            </div>
            <div className="text-4xl sm:text-5xl animate-bounce">🤝</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-12 opacity-70 border-none">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-500/70 border-none">
          <div className="w-1 h-1 rounded-full bg-amber-400/40 animate-pulse border-none" />
          Истинное богатство — в доверии и поддержке, а не в материальном
          <div className="w-1 h-1 rounded-full bg-amber-400/40 animate-pulse border-none" />
        </div>
      </div>
    </div>
  </div>
)