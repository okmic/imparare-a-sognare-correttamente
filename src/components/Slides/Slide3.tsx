import { Instagram, Gem, Car, Award, DollarSign } from 'lucide-react'

export const Slide3 = () => (
  <div className="overflow-auto text-center text-white px-4 h-full flex flex-col justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-purple-500/30 mb-4">
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
          Лишь посмотрев по сторонам
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-purple-300/80 mt-2">
          Мы стали словно Инстаграмм
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="group relative">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-purple-500/20 transition-all duration-300 hover:border-purple-500/40 hover:from-gray-800/60 h-full">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-3 sm:mb-4 mx-auto">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400/50 to-pink-400/50 rounded-lg rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Car className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-purple-100 mb-2">Машины</h3>
            <p className="text-sm sm:text-base text-purple-300/80 mb-3">
              Красиво, ярко
            </p>
            <div className="w-full h-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-purple-400 to-pink-400 animate-shimmer" />
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
            <div className="w-3 h-3 rounded-full bg-white/90" />
          </div>
        </div>

        <div className="group relative">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-yellow-500/20 transition-all duration-300 hover:border-yellow-500/40 hover:from-gray-800/60 h-full">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 mb-3 sm:mb-4 mx-auto">
              <div className="relative">
                <Gem className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-yellow-100 mb-2">Золотишко</h3>
            <p className="text-sm sm:text-base text-yellow-300/80 mb-3">
              Блеск и внешний лоск
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-1 rounded-full bg-gradient-to-r from-yellow-500/50 to-amber-500/50"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-400"
                    style={{ 
                      width: `${Math.random() * 60 + 40}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative sm:col-span-2 lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-blue-500/20 transition-all duration-300 hover:border-blue-500/40 hover:from-gray-800/60 h-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-0">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-2">Слава и деньги</h3>
                <p className="text-sm sm:text-base text-blue-300/80 mb-3">
                  Стремление к успеху и богатству
                </p>
                <div className="flex items-center justify-center gap-2">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                  <div className="w-full h-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-green-400 to-emerald-400 animate-shimmer" />
                  </div>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative mb-6 sm:mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-shimmer" />
        <div className="relative bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-purple-500/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-left">
              <p className="text-lg sm:text-xl font-bold text-purple-100 mb-2">
                Красиво, ярко, но пустышка
              </p>
              <p className="text-sm sm:text-base text-purple-300/80">
                Внешний блеск без внутреннего содержания
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 animate-pulse">
                  <div className="absolute inset-0.5 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="text-xs sm:text-sm text-purple-400/70">
            Эффект инстаграм-фильтра
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="text-xs sm:text-sm text-purple-400/70">
            Общество потребления
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-white/10">
          <div className="text-xs sm:text-sm text-purple-400/70">
            Внешняя оболочка
          </div>
        </div>
      </div>
    </div>
  </div>
)