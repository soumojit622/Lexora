"use client"

import { SetStateAction, useState } from "react"
import Link from "next/link"
import { Home, Search, FileText, Lightbulb, ArrowLeft, HelpCircle, Palette } from "lucide-react"

export default function NotFound() {
  const [pressedButton, setPressedButton] = useState("")

  const handlePress = (button: SetStateAction<string>) => {
    setPressedButton(button)
    setTimeout(() => setPressedButton(""), 150)
  }

  const quickLinks = [
    {
      icon: Home,
      title: "Go Home",
      description: "Back to the main page",
      href: "/",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      iconBg: "bg-blue-600",
    },
    {
      icon: FileText,
      title: "Features",
      description: "Explore what Lexora can do",
      href: "#features",
      color: "bg-gradient-to-br from-green-400 to-green-500",
      iconBg: "bg-green-600",
    },
    {
      icon: Search,
      title: "Search",
      description: "Find what you're looking for",
      href: "#",
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
      iconBg: "bg-purple-600",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Get support and answers",
      href: "#contact",
      color: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconBg: "bg-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-300 via-pink-300 to-yellow-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-black border-8 border-white transform rotate-12"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white border-8 border-black transform -rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-black border-8 border-white transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-white border-8 border-black transform -rotate-6"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Main 404 Section */}
        <div className="text-center mb-16">
          {/* 404 Number */}
          <div className="bg-white border-8 border-black shadow-[16px_16px_0px_0px_#000] p-8 mb-8 transform hover:rotate-1 transition-transform duration-300">
            <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">404</h1>
          </div>

          {/* Error Message */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 border-8 border-black shadow-[12px_12px_0px_0px_#000] p-8 mb-8 max-w-4xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-red-500 border-4 border-black p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-black">PAGE NOT FOUND</h2>
            </div>
            <p className="text-lg font-bold text-black leading-relaxed">
              Oops! This page seems to have vanished like a deleted whiteboard. Don't worry, your creativity is still
              intact!
            </p>
          </div>

          {/* Creative Message */}
          <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 max-w-3xl mx-auto mb-12">
            <p className="text-base font-bold text-black leading-relaxed">
              It looks like this note got lost in the digital void. Let's help you find your way back to creating
              amazing things with Lexora!
            </p>
          </div>
        </div>

        {/* Whiteboard Mockup */}
        <div className="bg-white border-8 border-black shadow-[12px_12px_0px_0px_#000] p-8 mb-16 max-w-2xl w-full transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-4 border-black p-6">
            <div className="flex gap-2 mb-4">
              <div className="w-4 h-4 bg-red-500 border-2 border-black rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 border-2 border-black rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-400 to-red-500 border-4 border-black p-4 transform rotate-2">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-black" />
                  <div className="text-black font-bold">Missing Page Alert!</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-400 to-blue-500 border-4 border-black p-4 transform -rotate-1">
                <div className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-black" />
                  <div className="text-black font-bold">Let's find another path...</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-400 to-green-500 border-4 border-black p-4">
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-black" />
                  <div className="text-black font-bold">Keep creating!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
              <div className="bg-indigo-500 border-4 border-black p-3">
                <ArrowLeft className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-black">WHERE TO GO NEXT?</h3>
            </div>
          </div>

          

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/">
              <button
                onMouseDown={() => handlePress("home")}
                className={`bg-gradient-to-r from-green-500 to-green-600 text-white font-black text-lg px-12 py-6 border-4 border-black transition-all duration-150 flex items-center space-x-3 ${
                  pressedButton === "home"
                    ? "shadow-[3px_3px_0px_0px_#000] translate-x-[3px] translate-y-[3px]"
                    : "shadow-[8px_8px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                }`}
              >
                <Home className="w-6 h-6" />
                <span>BACK TO HOME</span>
              </button>
            </Link>

            <Link href="#features">
              <button
                onMouseDown={() => handlePress("features")}
                className={`bg-gradient-to-r from-purple-500 to-purple-600 text-white font-black text-lg px-12 py-6 border-4 border-black transition-all duration-150 flex items-center space-x-3 ${
                  pressedButton === "features"
                    ? "shadow-[3px_3px_0px_0px_#000] translate-x-[3px] translate-y-[3px]"
                    : "shadow-[8px_8px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                }`}
              >
                <Lightbulb className="w-6 h-6" />
                <span>EXPLORE FEATURES</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-16 bg-gradient-to-r from-cyan-400 to-blue-400 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 max-w-4xl text-center">
          <p className="text-lg font-black text-black leading-relaxed">
            Remember: Every great idea starts with a blank canvas. Let's create something amazing together!
          </p>
        </div>
      </div>
    </div>
  )
}
