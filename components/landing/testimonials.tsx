import { Star, MessageSquare } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      avatar: "SC",
      text: "Lexora transformed how our team collaborates. The visual brainstorming features are incredible and have boosted our productivity by 300%!",
      color: "bg-gradient-to-br from-pink-400 to-pink-500",
      avatarBg: "bg-pink-600",
    },
    {
      name: "Mike Rodriguez",
      role: "Startup Founder",
      avatar: "MR",
      text: "From messy sticky notes to organized brilliance. Lexora is a game-changer for entrepreneurs who need to move fast and think clearly.",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      avatarBg: "bg-blue-600",
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Scientist",
      avatar: "EW",
      text: "Perfect for complex research projects. The infinite canvas helps me connect ideas like never before and visualize complex data relationships.",
      color: "bg-gradient-to-br from-green-400 to-green-500",
      avatarBg: "bg-green-600",
    },
    {
      name: "Alex Kim",
      role: "Student",
      avatar: "AK",
      text: "My grades improved dramatically since using Lexora for note-taking. It makes studying actually fun and helps me retain information better!",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      avatarBg: "bg-yellow-600",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-violet-300 to-violet-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-28 h-28 bg-white border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-black border-4 border-white transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-violet-500 border-4 border-black p-3">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">WHAT USERS SAY</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto">
            Real stories from real users who've transformed their workflow with Lexora
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.color} border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center mb-8">
                <div
                  className={`${testimonial.avatarBg} border-4 border-black w-16 h-16 flex items-center justify-center mr-6 shadow-[4px_4px_0px_0px_#000]`}
                >
                  <span className="text-white font-black text-xl">{testimonial.avatar}</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-black">{testimonial.name}</h3>
                  <p className="text-base font-bold text-black opacity-80">{testimonial.role}</p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm border-4 border-white/30 p-6 mb-6">
                <p className="text-base font-bold text-black leading-relaxed">"{testimonial.text}"</p>
              </div>

              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-yellow-400 border-2 border-black p-1">
                    <Star className="w-5 h-5 text-black fill-current" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
