import { Zap, Shield, Globe, DollarSign, GraduationCap, Phone } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Zero lag, instant response, smooth as butter with optimized performance",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      iconBg: "bg-yellow-600",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is encrypted and protected 24/7 with enterprise-grade security",
      color: "bg-gradient-to-br from-red-400 to-red-500",
      iconBg: "bg-red-600",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Any device, any browser, any time with seamless synchronization",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      iconBg: "bg-blue-600",
    },
    {
      icon: DollarSign,
      title: "Save Money",
      description: "Replace 5 apps with one powerful solution and reduce your software costs",
      color: "bg-gradient-to-br from-green-400 to-green-500",
      iconBg: "bg-green-600",
    },
    {
      icon: GraduationCap,
      title: "Easy to Learn",
      description: "Intuitive interface, no training required with built-in tutorials",
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
      iconBg: "bg-purple-600",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Real humans ready to help anytime with dedicated customer success",
      color: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconBg: "bg-orange-600",
    },
  ]

  return (
    <section className="bg-gradient-to-br from-emerald-300 to-emerald-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-20 h-20 bg-white border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-black border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-emerald-500 border-4 border-black p-3">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">WHY CHOOSE LEXORA?</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto leading-relaxed">
            Benefits that make the difference and set us apart from the competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 text-center transform hover:scale-105 transition-all duration-300 group`}
            >
              <div
                className={`${benefit.iconBg} border-4 border-black p-6 inline-block mb-6 shadow-[4px_4px_0px_0px_#000] group-hover:shadow-[2px_2px_0px_0px_#000] transition-all`}
              >
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-black mb-4 leading-tight">{benefit.title}</h3>
              <p className="text-base font-bold text-black leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
