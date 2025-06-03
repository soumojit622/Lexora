import { Brain, Target, TrendingUp, Globe, Star } from "lucide-react"

export default function AboutLexora() {
  return (
    <section className="bg-gradient-to-br from-indigo-300 to-indigo-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-white border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-black border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-8">
              <div className="bg-indigo-500 border-4 border-black p-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-black">ABOUT LEXORA</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
                <p className="text-lg font-bold text-black leading-relaxed">
                  Born from the frustration of scattered thoughts and messy notebooks, Lexora is the digital workspace
                  that finally makes sense of your creative chaos.
                </p>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
                <p className="text-base font-bold text-black leading-relaxed">
                  We believe that great ideas shouldn't be limited by the tools you use. That's why we built Lexora to
                  be as flexible as your imagination and as powerful as your ambition.
                </p>
              </div>

              <div className="bg-white border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-indigo-500 border-4 border-black p-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-black">Our Mission</h3>
                </div>
                <p className="text-base font-bold text-black leading-relaxed">
                  To democratize creativity and make visual thinking accessible to everyone, from students to CEOs, from
                  artists to engineers, empowering them to bring their ideas to life.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-yellow-600 border-4 border-black p-3">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black">10M+</h3>
              </div>
              <p className="text-base font-bold text-black">Notes Created Daily</p>
            </div>

            <div className="bg-gradient-to-r from-pink-400 to-pink-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-pink-600 border-4 border-black p-3">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black">150+</h3>
              </div>
              <p className="text-base font-bold text-black">Countries Using Lexora</p>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-green-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-600 border-4 border-black p-3">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black">4.9/5</h3>
              </div>
              <p className="text-base font-bold text-black">User Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
