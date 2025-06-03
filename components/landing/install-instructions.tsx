import { Download, Code, Smartphone, Zap } from "lucide-react"

export default function InstallInstructions() {
  const steps = [
    {
      step: "1",
      title: "Sign Up",
      code: "Visit lexora.com/signup",
      description: "Create your free account in 30 seconds",
      icon: Download,
    },
    {
      step: "2",
      title: "Choose Plan",
      code: "Select Free, Pro, or Team",
      description: "Pick the plan that fits your needs",
      icon: Code,
    },
    {
      step: "3",
      title: "Download App",
      code: "npm install lexora-desktop",
      description: "Or use the web version instantly",
      icon: Download,
    },
    {
      step: "4",
      title: "Start Creating",
      code: "lexora create my-first-board",
      description: "Begin your creative journey!",
      icon: Zap,
    },
  ]

  return (
    <section className="bg-gradient-to-br from-teal-300 to-teal-400 py-24 px-4 border-b-8 border-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-24 h-24 bg-white border-4 border-black transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-black border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
            <div className="bg-teal-500 border-4 border-black p-3">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-black">GET STARTED IN MINUTES</h2>
          </div>
          <p className="text-lg font-bold text-black max-w-3xl mx-auto">
            Four simple steps to unlock your creativity and start building amazing things
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-500 border-4 border-black w-16 h-16 flex items-center justify-center mr-6 shadow-[4px_4px_0px_0px_#000]">
                  <span className="text-xl font-black text-white">{step.step}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <step.icon className="w-8 h-8 text-black" />
                  <h3 className="text-xl font-black text-black">{step.title}</h3>
                </div>
              </div>

              <div className="bg-gray-900 border-4 border-black p-6 mb-4">
                <code className="text-green-400 font-mono text-base">$ {step.code}</code>
              </div>

              <p className="text-base font-bold text-black">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="bg-yellow-600 border-4 border-black p-3">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-black">BONUS: Mobile Apps Available!</h3>
          </div>
          <p className="text-lg font-bold text-black mb-6">Download Lexora for iOS and Android to create on the go</p>
          <div className="flex justify-center gap-6">
            <div className="bg-black border-4 border-black px-8 py-4 shadow-[4px_4px_0px_0px_#fff]">
              <span className="text-white font-bold text-base flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>App Store</span>
              </span>
            </div>
            <div className="bg-black border-4 border-black px-8 py-4 shadow-[4px_4px_0px_0px_#fff]">
              <span className="text-white font-bold text-base flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
