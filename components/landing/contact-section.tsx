"use client"

import { useState } from "react"
import { Phone, User, Mail, MessageSquare, Send, MapPin, Clock, Headphones } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isPressed, setIsPressed] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-rose-300 to-rose-400 py-24 px-4 border-b-8 border-black relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-28 h-28 bg-white border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-black border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-rose-500 border-4 border-black p-3">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">GET IN TOUCH</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto">
            Have questions? We'd love to hear from you! Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-lg font-black text-black mb-2">
                  <User className="w-6 h-6" />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 text-base font-bold text-black border-8 border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-lg font-black text-black mb-2">
                  <Mail className="w-6 h-6" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 text-base font-bold text-black border-8 border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-lg font-black text-black mb-2">
                  <MessageSquare className="w-6 h-6" />
                  <span>Message</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-6 py-4 text-base font-bold text-black border-8 border-black shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:shadow-[2px_2px_0px_0px_#000] focus:translate-x-[2px] focus:translate-y-[2px] transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              <button
                type="submit"
                onMouseDown={handlePress}
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-black text-lg py-6 border-8 border-black transition-all duration-150 flex items-center justify-center space-x-3 ${
                  isPressed
                    ? "shadow-[3px_3px_0px_0px_#000] translate-x-[3px] translate-y-[3px]"
                    : "shadow-[8px_8px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                }`}
              >
                <span>SEND MESSAGE</span>
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-yellow-600 border-4 border-black p-3">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-black">Office</h3>
              </div>
              <p className="text-base font-bold text-black">
                123 Innovation Street
                <br />
                Tech Valley, CA 94000
                <br />
                United States
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-green-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-600 border-4 border-black p-3">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-black">Support Hours</h3>
              </div>
              <p className="text-base font-bold text-black">
                Monday - Friday: 9AM - 6PM PST
                <br />
                Weekend: 10AM - 4PM PST
                <br />
                Response time: {"<"} 2 hours
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-400 to-purple-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-600 border-4 border-black p-3">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-black">Quick Links</h3>
              </div>
              <div className="space-y-2">
                <p className="text-base font-bold text-black flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Help Center</span>
                </p>
                <p className="text-base font-bold text-black flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Live Chat</span>
                </p>
                <p className="text-base font-bold text-black flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call: 1-800-LEXORA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
