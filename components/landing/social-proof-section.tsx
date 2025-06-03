import { Building, TrendingUp, Shield } from "lucide-react"

export default function SocialProofSection() {
  const companies = [
    { name: "TechCorp", icon: Building, color: "bg-gradient-to-br from-blue-400 to-blue-500" },
    { name: "StartupXYZ", icon: TrendingUp, color: "bg-gradient-to-br from-green-400 to-green-500" },
    { name: "DesignStudio", icon: Building, color: "bg-gradient-to-br from-pink-400 to-pink-500" },
    { name: "EduTech", icon: Building, color: "bg-gradient-to-br from-yellow-400 to-yellow-500" },
    { name: "HealthPlus", icon: Shield, color: "bg-gradient-to-br from-red-400 to-red-500" },
    { name: "FinanceFlow", icon: TrendingUp, color: "bg-gradient-to-br from-purple-400 to-purple-500" },
    { name: "MediaMax", icon: Building, color: "bg-gradient-to-br from-orange-400 to-orange-500" },
    { name: "RetailRush", icon: Building, color: "bg-gradient-to-br from-cyan-400 to-cyan-500" },
  ]

  return (
    <section className="bg-gradient-to-br from-amber-300 to-amber-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-28 h-28 bg-white border-4 border-black transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-black border-4 border-white transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-amber-500 border-4 border-black p-3">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">TRUSTED BY INDUSTRY LEADERS</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto">
            Join thousands of companies already using Lexora to transform their workflow
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`${company.color} border-8 border-black shadow-[6px_6px_0px_0px_#000] p-6 text-center transform hover:scale-105 transition-transform duration-200`}
            >
              <div className="bg-black border-4 border-white p-3 inline-block mb-3 shadow-[2px_2px_0px_0px_#fff]">
                <company.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-black text-black">{company.name}</h3>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-black text-black mb-4">2M+</div>
            <p className="text-lg font-bold text-black">Active Users</p>
          </div>

          <div className="bg-white border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-black text-black mb-4">50M+</div>
            <p className="text-lg font-bold text-black">Whiteboards Created</p>
          </div>

          <div className="bg-white border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-black text-black mb-4">99.9%</div>
            <p className="text-lg font-bold text-black">Uptime Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
