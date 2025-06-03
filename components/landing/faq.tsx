"use client"

import { useState } from "react"
import { HelpCircle, Plus, Minus } from "lucide-react"

export default function FAQ() {
  // Explicitly type openIndex as number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is Lexora really free to start?",
      answer: "Our free plan gives you access to 5 whiteboards and basic features forever. No credit card required.",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
    },
    {
      question: "Can I collaborate with my team in real-time?",
      answer:
        "Yes! Real-time collaboration is available on Pro and Team plans. See changes instantly as your team works together.",
      color: "bg-gradient-to-br from-pink-400 to-pink-500",
    },
    {
      question: "What devices does Lexora work on?",
      answer:
        "Lexora works on any device with a web browser - desktop, tablet, or mobile. We also have native apps for iOS and Android.",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
    },
    {
      question: "How secure is my data?",
      answer:
        "Your data is encrypted in transit and at rest using bank-level security. We never share your content with third parties.",
      color: "bg-gradient-to-br from-green-400 to-green-500",
    },
    {
      question: "Can I export my whiteboards?",
      answer:
        "Yes! Export to PDF, PNG, SVG, or even PowerPoint. Pro users get additional export formats and higher resolution options.",
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-orange-300 to-orange-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-28 h-28 bg-white border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-black border-4 border-white transform -rotate-45"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-orange-500 border-4 border-black p-3">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto">
            Got questions? We've got answers! Everything you need to know about Lexora
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className={`${faq.color} border-8 border-black shadow-[8px_8px_0px_0px_#000]`}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 text-left flex justify-between items-center hover:opacity-90 transition-opacity"
              >
                <h3 className="text-lg font-black text-black pr-4">{faq.question}</h3>
                <div className="bg-black border-4 border-white p-2 shadow-[2px_2px_0px_0px_#fff]">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-white" />
                  ) : (
                    <Plus className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8">
                  <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6">
                    <p className="text-base font-bold text-black leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
