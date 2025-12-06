import { Brain, Target, Crown, ArrowRight, XCircle, Sparkles, Motorbike, Award } from 'lucide-react'

export const Slide4 = () => (
  <div className="text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-gray-500/20 backdrop-blur-lg border border-gray-500/30 mb-4">
          <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-200 to-blue-200 bg-clip-text text-transparent">
          Мечты придумали умом
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300/80 mt-2">
          И в этом ты сумей признаться
        </p>
      </div>
      
      <div className="relative mb-8 sm:mb-12">
        <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-gray-700/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-600/50">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100">
                  Когда их будешь добиваться
                </h3>
              </div>
              <p className="text-lg sm:text-xl text-gray-300/90 mb-4">
                <span className="text-gray-200 font-medium">Надеюсь, миром и добром</span> — не ценой других
              </p>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center animate-spin-slow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 flex items-center justify-center animate-pulse">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/20">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-300" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-100">Иллюзия стоимости</div>
                  <div className="text-sm sm:text-base text-gray-400">Цели ценой отношений</div>
                </div>
              </div>
              
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent hidden sm:block" />
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-100">Мнимая корона</div>
                  <div className="text-sm sm:text-base text-gray-400">Успех в отрыве от смысла</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-600/30 to-gray-700/30 backdrop-blur-lg border border-gray-600/50 flex items-center justify-center animate-pulse">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="group relative">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-gray-700/30 transition-all duration-300 hover:border-blue-500/40 hover:from-gray-800/70 h-full">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-600/50 mb-3 sm:mb-4 mx-auto">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">Разумный расчет</h3>
            <p className="text-sm sm:text-base text-gray-400/90">
              Логичные, но бездушные цели
            </p>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-600/50 animate-pulse" />
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-gray-700/30 transition-all duration-300 hover:border-red-500/40 hover:from-gray-800/70 h-full">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-600/50 mb-3 sm:mb-4 mx-auto">
              <Motorbike />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">Бесконечная гонка</h3>
            <p className="text-sm sm:text-base text-gray-400/90">
              Новые задачи вместо осмысления
            </p>
          </div>
          <div className="absolute -top-2 right-4 w-2 h-2 rounded-full bg-red-500/50 animate-ping" />
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-gray-700/30 transition-all duration-300 hover:border-gray-500/40 hover:from-gray-800/70 h-full">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-600/50 mb-3 sm:mb-4 mx-auto">
              <Award />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2">Пустота достижений</h3>
            <p className="text-sm sm:text-base text-gray-400/90">
              Победы, не наполненные смыслом
            </p>
          </div>
          <div className="absolute bottom-4 right-4 w-1 h-4 bg-gray-500/50 rotate-45 animate-pulse" />
          <div className="absolute bottom-4 right-4 w-1 h-4 bg-gray-500/50 -rotate-45 animate-pulse" />
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent animate-shimmer" />
        <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-gray-700/30">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              ↓
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-100">
              Не стоим даже хлебной крошки
            </p>
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              ↓
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-400/80 mt-3">
            В погоне за ложными целями теряется настоящая ценность
          </p>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-12 opacity-60">
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <div className="w-1 h-1 rounded-full bg-gray-600/40 animate-pulse" />
          Кульминация: осознание пустоты искусственных целей
          <div className="w-1 h-1 rounded-full bg-gray-600/40 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
)