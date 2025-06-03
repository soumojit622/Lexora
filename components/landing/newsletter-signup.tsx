"use client"

import { useState } from "react"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle")
  const [isPressed, setIsPressed] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (email) {
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    } else {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
  }

  return (
    <section className="bg-gradient-to-br from-lime-300 to-lime-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-20 h-20 bg-white border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-black border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-8">
          <div className="bg-lime-500 border-4 border-black p-3">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-black text-black">STAY IN THE LOOP</h2>
        </div>

        <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 mb-12">
          <p className="text-lg font-bold text-black leading-relaxed">
            Get the latest updates, tips, and exclusive features delivered to your inbox! Join thousands of creators
            already in our community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 text-base font-bold text-black border-8 border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
            />

            <button
              type="submit"
              onMouseDown={handlePress}
              className={`bg-gradient-to-r from-red-500 to-red-600 text-white font-black text-base px-8 py-4 border-8 border-black transition-all duration-150 flex items-center space-x-2 ${
                isPressed
                  ? "shadow-[2px_2px_0px_0px_#000] translate-x-[2px] translate-y-[2px]"
                  : "shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
              }`}
            >
              <span>SUBSCRIBE</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>

        {status === "success" && (
          <div className="bg-gradient-to-r from-green-400 to-green-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-8 h-8 text-black" />
              <p className="text-lg font-black text-black">SUCCESS! Welcome to the Lexora family!</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-gradient-to-r from-red-400 to-red-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3">
              <AlertCircle className="w-8 h-8 text-black" />
              <p className="text-lg font-black text-black">Oops! Please enter a valid email address.</p>
            </div>
          </div>
        )}

        <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6">
          <p className="text-base font-bold text-black flex items-center justify-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>No spam, just awesome content. Unsubscribe anytime.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
