import { Brain, Target, Mountain, Shield, Heart, Users } from 'lucide-react'
import "./Slide2.css"
import "../../../index.css"

export const Slide2 = () => (
  <div className="text-white h-screen flex flex-col justify-center px-4 ios-tap-fix">
    <div className="max-w-3xl mx-auto w-full">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4 ios-border-fix">
          <Brain className="w-6 h-6 text-blue-300 ios-icon" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-2">
          Мечты, созданные умом
        </h1>
        <p className="text-lg text-blue-300/80">
          Поразмышляв о том, о сём
        </p>
      </div>

      {/* Основные этапы */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-5 border border-blue-500/20 ios-border-fix">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center mb-3 ios-icon-container">
              <Target className="w-7 h-7 text-blue-200 ios-icon" />
            </div>
            <h3 className="font-bold text-blue-100 mb-1">Цели как задачи</h3>
            <p className="text-sm text-blue-300/80">
              Быстро превращаем в задачи
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-5 border border-cyan-500/20 ios-border-fix">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center mb-3 ios-icon-container">
              <Mountain className="w-7 h-7 text-cyan-200 ios-icon" />
            </div>
            <h3 className="font-bold text-cyan-100 mb-1">Олимп мечтаний</h3>
            <p className="text-sm text-cyan-300/80">
              Безудержные стремления
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-5 border border-indigo-500/20 ios-border-fix">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center mb-3 ios-icon-container">
              <Shield className="w-7 h-7 text-indigo-200 ios-icon" />
            </div>
            <h3 className="font-bold text-indigo-100 mb-1">Испытания преград</h3>
            <p className="text-sm text-indigo-300/80">
              Множество преград на пути
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-5 border border-purple-500/20 ios-border-fix">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center mb-3 ios-icon-container">
              <Heart className="w-7 h-7 text-purple-200 ios-icon" />
            </div>
            <h3 className="font-bold text-purple-100 mb-1">Забытие близких</h3>
            <p className="text-sm text-purple-300/80">
              О тех, кто был любим
            </p>
          </div>
        </div>
      </div>

      {/* Ключевой вывод */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl ios-no-outline" />
        <div className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 border border-blue-500/30 ios-border-fix">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center ios-icon-container">
                <Users className="w-7 h-7 text-blue-200 ios-icon" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-100">
                  Путь от сердца к расчету
                </h3>
                <p className="text-blue-300/80 text-sm">
                  На вершине — одиночество
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Итоговые выводы */}
      <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-5 border border-blue-500/30 ios-border-fix">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 rounded-lg bg-blue-900/30 border border-blue-500/20 ios-border-fix">
            <div className="text-sm font-bold text-blue-300">Логика</div>
            <div className="text-xs text-blue-400/60">вместо чувств</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-cyan-900/30 border border-cyan-500/20 ios-border-fix">
            <div className="text-sm font-bold text-cyan-300">Цели</div>
            <div className="text-xs text-cyan-400/60">выше отношений</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-indigo-900/30 border border-indigo-500/20 ios-border-fix">
            <div className="text-sm font-bold text-indigo-300">Успех</div>
            <div className="text-xs text-indigo-400/60">ценой близких</div>
          </div>
        </div>
      </div>

      {/* Футер */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 ios-border-fix">
          <div className="w-2 h-2 rounded-full bg-blue-400/40 ios-no-outline" />
          <span className="text-sm text-blue-300">
            Вторая ступень: ум против сердца
          </span>
          <div className="w-2 h-2 rounded-full bg-blue-400/40 ios-no-outline" />
        </div>
      </div>
    </div>
  </div>
)