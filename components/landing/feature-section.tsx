import { PenTool, Palette, Link, Smartphone, Search, Save } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: PenTool,
      title: "Smart Notes",
      description: "AI-powered note organization that learns from your writing patterns and suggests improvements",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      iconBg: "bg-yellow-600",
    },
    {
      icon: Palette,
      title: "Infinite Canvas",
      description: "Unlimited whiteboard space for your wildest creative ideas with advanced drawing tools",
      color: "bg-gradient-to-br from-pink-400 to-pink-500",
      iconBg: "bg-pink-600",
    },
    {
      icon: Link,
      title: "Real-time Sync",
      description: "Collaborate with your team in real-time across all devices with instant synchronization",
      color: "bg-gradient-to-br from-blue-400 to-blue-500",
      iconBg: "bg-blue-600",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Works seamlessly on desktop, tablet, and mobile devices with native app performance",
      color: "bg-gradient-to-br from-green-400 to-green-500",
      iconBg: "bg-green-600",
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Find anything instantly with our powerful search engine that understands context and content",
      color: "bg-gradient-to-br from-purple-400 to-purple-500",
      iconBg: "bg-purple-600",
    },
    {
      icon: Save,
      title: "Auto-Save",
      description: "Never lose your work with automatic cloud backup and version history tracking",
      color: "bg-gradient-to-br from-orange-400 to-orange-500",
      iconBg: "bg-orange-600",
    },
  ]

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-red-300 to-red-400 py-24 px-4 border-b-8 border-black relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-20 h-20 bg-white border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-black border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-red-500 border-4 border-black p-3">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">FEATURES THAT ROCK</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto leading-relaxed">
            Everything you need to supercharge your productivity and unleash your creative potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 transform hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 group`}
            >
              <div
                className={`${feature.iconBg} border-4 border-black p-4 inline-block mb-6 shadow-[4px_4px_0px_0px_#000] group-hover:shadow-[2px_2px_0px_0px_#000] transition-all`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black text-black mb-4 leading-tight">{feature.title}</h3>
              <p className="text-base font-bold text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
