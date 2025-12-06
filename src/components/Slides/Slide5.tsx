import { Heart, DoorOpen, Eye, Sparkles, Users } from 'lucide-react'

export const Slide5 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 backdrop-blur-lg border border-orange-500/30 mb-4 animate-pulse">
          <DoorOpen className="w-5 h-5 sm:w-6 sm:h-6 text-orange-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
          Я приоткрою тайны дверцу
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-orange-300/80 mt-2">
          О чем хочу я вам сказать
        </p>
      </div>
      <div className="relative mb-8 sm:mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-orange-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 animate-pulse">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-100">
                  Учитесь правильно мечтать
                </h3>
              </div>
              <div className="relative">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent leading-tight">
                  Мечтайте не умом,
                </p>
                <p className="mb-5 text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
                  а сердцем
                </p>
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-amber-400 to-orange-400 animate-shimmer" />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center animate-spin-slow">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center animate-pulse">
                  <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-orange-200" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500/40 to-orange-500/40 flex items-center justify-center animate-bounce">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div className="group relative">
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-amber-500/20 transition-all duration-300 hover:border-amber-500/40 hover:from-amber-900/30 h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-amber-200" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-amber-100 mb-2">
                  Кого хотите встретить
                </h3>
                <p className="text-sm sm:text-base text-amber-300/90">
                  Каких людей вокруг себя
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-amber-300/80">О ком, скучая и любя</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-amber-300/80">Прошедших дней вам не заметить</span>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-lg rounded-2xl p-5 sm:p-6 border border-orange-500/20 transition-all duration-300 hover:border-orange-500/40 hover:from-orange-900/30 h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
                  <DoorOpen className="w-6 h-6 sm:w-7 sm:h-7 text-orange-200" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-orange-100 mb-2">
                  Дверь в новое
                </h3>
                <p className="text-sm sm:text-base text-orange-300/90">
                  От мечт ума — к мечтам сердца
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-sm text-orange-300/80">Переход к истинным ценностям</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-sm text-orange-300/80">Осмысление настоящих богатств</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 rounded-full bg-amber-200/90" />
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-shimmer" />
        <div className="relative bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-amber-500/30">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="text-3xl sm:text-4xl animate-bounce">❤️</div>
            <p className="text-lg sm:text-xl font-bold text-amber-100">
              Подумайте сейчас о них — о тех, кто делает жизнь богатой
            </p>
            <div className="text-3xl sm:text-4xl animate-bounce">❤️</div>
          </div>
          <p className="text-sm sm:text-base text-amber-300/80 mt-3">
            Не о деньгах и статусе, а о людях и чувствах
          </p>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-12 opacity-70">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-500/70">
          <div className="w-1 h-1 rounded-full bg-amber-400/40 animate-pulse" />
          Первый шаг к теплой теме: от холодного расчета к сердечным мечтам
          <div className="w-1 h-1 rounded-full bg-amber-400/40 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
)