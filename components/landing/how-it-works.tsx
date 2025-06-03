import { FileText, Palette, Users, Upload } from "lucide-react"

export default function HowItWorks() {
    const steps = [
        {
            number: "1",
            icon: FileText,
            title: "Create",
            description: "Start with a blank canvas or choose from our extensive template library",
            color: "bg-gradient-to-br from-cyan-400 to-cyan-500",
            iconBg: "bg-cyan-600",
        },
        {
            number: "2",
            icon: Palette,
            title: "Design",
            description: "Add notes, drawings, shapes, and multimedia content with powerful tools",
            color: "bg-gradient-to-br from-lime-400 to-lime-500",
            iconBg: "bg-lime-600",
        },
        {
            number: "3",
            icon: Users,
            title: "Collaborate",
            description: "Share with your team and work together in real-time with live cursors",
            color: "bg-gradient-to-br from-violet-400 to-violet-500",
            iconBg: "bg-violet-600",
        },
        {
            number: "4",
            icon: Upload,
            title: "Export",
            description: "Save, export, or present your masterpiece anywhere in multiple formats",
            color: "bg-gradient-to-br from-rose-400 to-rose-500",
            iconBg: "bg-rose-600",
        },
    ]

    return (
        <section className="bg-gradient-to-br from-teal-300 to-teal-400 py-24 px-4 border-b-8 border-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
                        <div className="bg-teal-500 border-4 border-black p-3">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-black">HOW IT WORKS</h2>
                    </div>
                    <p className="text-lg font-bold text-black max-w-3xl mx-auto">
                        Four simple steps to creative freedom and unlimited possibilities
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center relative">
                            <div
                                className={`${step.color} border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 w-full text-center transform hover:scale-105 transition-all duration-300`}
                            >
                                <div className="bg-black border-4 border-white p-4 inline-block mb-4 shadow-[4px_4px_0px_0px_#fff]">
                                    <div className="text-xl font-black text-white">STEP {step.number}</div>
                                </div>

                                <div
                                    className={`${step.iconBg} border-4 border-black p-4 inline-block mb-6 shadow-[4px_4px_0px_0px_#000]`}
                                >
                                    <step.icon className="w-10 h-10 text-white" />
                                </div>

                                <h3 className="text-xl font-black text-black mb-4">{step.title}</h3>
                                <p className="text-base font-bold text-black leading-relaxed">{step.description}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <div className="bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_#000]">
                                        <div className="text-4xl font-black text-black">→</div>
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
