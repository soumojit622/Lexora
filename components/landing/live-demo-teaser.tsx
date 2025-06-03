"use client"

import { useState } from "react"
import { Play, Eye, Lightbulb, FileText, BarChart3, CheckCircle } from "lucide-react"

export default function LiveDemoTeaser() {
    const [isPressed, setIsPressed] = useState(false)

    const handlePress = () => {
        setIsPressed(true)
        setTimeout(() => setIsPressed(false), 150)
    }

    return (
        <section className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 py-24 px-4 border-b-8 border-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-16 left-16 w-32 h-32 bg-black border-4 border-white transform rotate-12"></div>
                <div className="absolute bottom-16 right-16 w-28 h-28 bg-white border-4 border-black transform -rotate-12"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-12">
                    <div className="bg-orange-500 border-4 border-black p-3">
                        <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-black">SEE LEXORA IN ACTION</h2>
                </div>

                <div className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_#000] p-10 mb-12 max-w-5xl mx-auto transform hover:rotate-1 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-black p-8 mb-8">
                        <div className="flex gap-3 mb-6">
                            <div className="w-5 h-5 bg-red-500 border-2 border-black rounded-full"></div>
                            <div className="w-5 h-5 bg-yellow-500 border-2 border-black rounded-full"></div>
                            <div className="w-5 h-5 bg-green-500 border-2 border-black rounded-full"></div>
                        </div>

                        <div className="bg-white border-4 border-black p-10 min-h-[400px] relative">
                            <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-yellow-500 border-4 border-black p-6 transform rotate-3 shadow-[6px_6px_0px_0px_#000]">
                                <div className="flex items-center space-x-3">
                                    <Lightbulb className="w-6 h-6 text-black" />
                                    <div className="text-black font-bold text-base">Project Goals</div>
                                </div>
                            </div>

                            <div className="absolute top-24 right-8 bg-gradient-to-r from-pink-400 to-pink-500 border-4 border-black p-6 transform -rotate-2 shadow-[6px_6px_0px_0px_#000]">
                                <div className="flex items-center space-x-3">
                                    <FileText className="w-6 h-6 text-black" />
                                    <div className="text-black font-bold text-base">Brainstorm</div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-500 border-4 border-black p-8 shadow-[6px_6px_0px_0px_#000]">
                                <div className="flex items-center space-x-3 mb-4">
                                    <BarChart3 className="w-6 h-6 text-black" />
                                    <div className="text-black font-bold text-base text-center">Analytics Dashboard</div>
                                </div>
                                <div className="flex gap-3 justify-center">
                                    <div className="w-10 h-20 bg-green-500 border-2 border-black"></div>
                                    <div className="w-10 h-16 bg-yellow-500 border-2 border-black"></div>
                                    <div className="w-10 h-24 bg-red-500 border-2 border-black"></div>
                                </div>
                            </div>

                            <div className="absolute bottom-6 right-6 bg-gradient-to-r from-green-400 to-green-500 border-4 border-black p-4 rounded-full shadow-[4px_4px_0px_0px_#000]">
                                <CheckCircle className="w-8 h-8 text-black" />
                            </div>
                        </div>
                    </div>

                    <button
                        onMouseDown={handlePress}
                        className={`bg-gradient-to-r from-red-500 to-red-600 text-white font-black text-xl px-16 py-8 border-4 border-black transition-all duration-150 flex items-center space-x-4 mx-auto ${isPressed
                                ? "shadow-[3px_3px_0px_0px_#000] translate-x-[3px] translate-y-[3px]"
                                : "shadow-[8px_8px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                            }`}
                    >
                        <Play className="w-8 h-8" />
                        <span>PLAY DEMO</span>
                    </button>
                </div>

                <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 max-w-4xl mx-auto">
                    <p className="text-lg font-bold text-black leading-relaxed">
                        Watch how Lexora transforms chaotic thoughts into organized brilliance with our intuitive interface and
                        powerful features!
                    </p>
                </div>
            </div>
        </section>
    )
}
