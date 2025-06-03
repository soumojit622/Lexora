"use client"

import { SetStateAction, useState } from "react"
import { Rocket, Play, Lightbulb, FileText, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
    const [isPressed, setIsPressed] = useState("")

    const handlePress = (button: SetStateAction<string>) => {
        setIsPressed(button)
        setTimeout(() => setIsPressed(""), 150)
    }

    return (
        <section className="bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 py-24 px-4 border-b-8 border-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-white border-4 border-black transform rotate-12"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-400 border-4 border-black transform -rotate-12"></div>
                <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-pink-400 border-4 border-black transform rotate-45"></div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight">
                            THINK.
                            <br />
                            <span className="text-yellow-300">DRAW.</span>
                            <br />
                            <span className="text-pink-300">CREATE.</span>
                        </h1>

                        <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
                            <p className="text-lg font-bold text-white leading-relaxed">
                                The ultimate note-taking and whiteboard app that transforms your ideas into visual masterpieces with
                                unlimited creative freedom!
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="/dashboard" passHref>
                            <button
                                onMouseDown={() => handlePress("start")}
                                className={`bg-gradient-to-r from-green-400 to-green-500 text-black font-black text-lg px-12 py-6 border-4 border-black transition-all duration-150 flex items-center justify-center space-x-3 ${isPressed === "start"
                                    ? "shadow-[3px_3px_0px_0px_#000] translate-x-[3px] translate-y-[3px]"
                                    : "shadow-[8px_8px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                                    }`}
                            >
                                <span>START FREE</span>
                                <Rocket className="w-6 h-6" />
                            </button>
                        </Link>

                        <button
                            onMouseDown={() => handlePress("demo")}
                            className={`bg-gradient-to-r from-orange-400 to-orange-500 text-black font-black text-lg px-12 py-6 border-4 border-black transition-all duration-150 flex items-center justify-center space-x-3 ${isPressed === "demo"
                                ? "shadow-[3px_3px_0px_0px_#000] translate-x-[3px] translate-y-[3px]"
                                : "shadow-[8px_8px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                                }`}
                        >
                            <span>WATCH DEMO</span>
                            <Play className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Enhanced Whiteboard Mockup */}
                <div className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_#000] p-8 transform hover:rotate-1 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-black p-8 mb-4">
                        <div className="flex gap-3 mb-6">
                            <div className="w-5 h-5 bg-red-500 border-2 border-black rounded-full"></div>
                            <div className="w-5 h-5 bg-yellow-500 border-2 border-black rounded-full"></div>
                            <div className="w-5 h-5 bg-green-500 border-2 border-black rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 border-4 border-black p-6 transform rotate-2 shadow-[4px_4px_0px_0px_#000]">
                                <div className="flex items-center space-x-3">
                                    <Lightbulb className="w-6 h-6 text-black" />
                                    <div className="text-black font-bold text-base">Brilliant Idea!</div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-300 to-pink-400 border-4 border-black p-6 transform -rotate-1 shadow-[4px_4px_0px_0px_#000]">
                                <div className="flex items-center space-x-3">
                                    <FileText className="w-6 h-6 text-black" />
                                    <div className="text-black font-bold text-base">Important Note</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-gradient-to-r from-blue-300 to-blue-400 border-4 border-black p-4 flex-1 shadow-[4px_4px_0px_0px_#000]">
                                    <BarChart3 className="w-8 h-8 text-black mb-2" />
                                    <div className="w-full h-8 bg-blue-600 border-2 border-black"></div>
                                </div>
                                <div className="bg-gradient-to-r from-green-300 to-green-400 border-4 border-black p-4 flex-1 shadow-[4px_4px_0px_0px_#000]">
                                    <CheckCircle className="w-8 h-8 text-black mb-2" />
                                    <div className="w-full h-8 bg-green-600 border-2 border-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
