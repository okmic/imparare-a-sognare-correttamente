import { Heart, Target, Sparkles, CheckCircle, Star } from 'lucide-react'

export const Slide8 = () => (
  <div className="text-white h-screen flex flex-col justify-center px-4">
    <div className="max-w-3xl mx-auto w-full">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-4">
          <Heart className="w-6 h-6 text-emerald-300" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent mb-2">
          Главный вывод
        </h1>
        <p className="text-lg text-emerald-300/80">
          Счастье не стоит ни рубля
        </p>
      </div>

      {/* Основные тезисы */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center mb-3">
              <Target className="w-7 h-7 text-emerald-200" />
            </div>
            <h3 className="font-bold text-emerald-100 mb-1">Вывод</h3>
            <p className="text-sm text-emerald-300/80">
              Истинные ценности бесплатны
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center mb-3">
              <Sparkles className="w-7 h-7 text-green-200" />
            </div>
            <h3 className="font-bold text-green-100 mb-1">Итог</h3>
            <p className="text-sm text-green-300/80">
              Вы это уже поняли
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center mb-3">
              <CheckCircle className="w-7 h-7 text-emerald-200" />
            </div>
            <h3 className="font-bold text-emerald-100 mb-1">Решение</h3>
            <p className="text-sm text-emerald-300/80">
              От ума к сердцу
            </p>
          </div>
        </div>
      </div>

      {/* Главный посыл */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl blur-xl" />
        <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-4xl animate-bounce">😊</div>
              <div>
                <h3 className="text-xl font-bold text-emerald-100">
                  Засыпайте с улыбкой
                </h3>
                <p className="text-emerald-300/80 text-sm">
                  Просыпайтесь с теплотой
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ключевое сообщение */}
      <div className="bg-gradient-to-br from-emerald-900/40 to-green-900/40 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 mb-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                <Star className="w-6 h-6 text-green-200" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
              Мечтайте не умом,
            </span>
            {' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              а сердцем
            </span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full my-4" />
          
          <p className="text-emerald-300/90 mb-4">
            Путь от ложных целей к истинным ценностям
          </p>
          
          <div className="flex items-center gap-3 text-sm text-emerald-400/70">
            <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
            Любовь
            <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
            Дружба
            <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
            Верность
            <div className="w-1 h-1 rounded-full bg-emerald-400/50" />
          </div>
        </div>
      </div>

      {/* Футер */}
      <div className="text-center opacity-70">
        <a 
          href="https://okmic.github.io/okmic/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-emerald-400/60 hover:text-emerald-300/80 transition-colors inline-flex items-center gap-2"
        >
          <span>❤️</span>
          <span>created by okmic</span>
          <span>❤️</span>
        </a>
      </div>
    </div>
  </div>
)