"use client"

import { SetStateAction, useState } from "react"
import { Gift, Star, Users } from "lucide-react"

export default function PricingPlans() {
    const [pressedButton, setPressedButton] = useState("")

    const handlePress = (button: SetStateAction<string>) => {
        setPressedButton(button)
        setTimeout(() => setPressedButton(""), 150)
    }

    const plans = [
        {
            name: "Free",
            icon: Gift,
            price: "$0",
            period: "forever",
            features: ["5 whiteboards", "Basic templates", "Mobile app access", "Community support"],
            color: "bg-gradient-to-br from-gray-300 to-gray-400",
            buttonColor: "bg-gray-500",
            iconBg: "bg-gray-600",
            popular: false,
        },
        {
            name: "Pro",
            icon: Star,
            price: "$12",
            period: "per month",
            features: [
                "Unlimited whiteboards",
                "Premium templates",
                "Real-time collaboration",
                "Priority support",
                "Advanced export options",
            ],
            color: "bg-gradient-to-br from-yellow-400 to-yellow-500",
            buttonColor: "bg-orange-500",
            iconBg: "bg-yellow-600",
            popular: true,
        },
        {
            name: "Team",
            icon: Users,
            price: "$25",
            period: "per user/month",
            features: [
                "Everything in Pro",
                "Team management",
                "Admin controls",
                "SSO integration",
                "Custom branding",
                "API access",
            ],
            color: "bg-gradient-to-br from-purple-400 to-purple-500",
            buttonColor: "bg-purple-600",
            iconBg: "bg-purple-600",
            popular: false,
        },
    ]

    return (
        <section
            id="pricing"
            className="bg-gradient-to-br from-cyan-300 to-cyan-400 py-24 px-4 border-b-8 border-black relative"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-24 h-24 bg-white border-4 border-black transform rotate-45"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-black border-4 border-white transform -rotate-12"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-4 bg-white border-8 border-black p-6 shadow-[8px_8px_0px_0px_#000] mb-6">
                        <div className="bg-cyan-500 border-4 border-black p-3">
                            <Star className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-black">PRICING PLANS</h2>
                    </div>
                    <p className="text-lg font-bold text-black max-w-3xl mx-auto">
                        Choose the perfect plan for your needs and start creating amazing things
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`${plan.color} border-8 border-black shadow-[8px_8px_0px_0px_#000] p-8 relative ${plan.popular ? "transform scale-105" : ""
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 border-4 border-black px-6 py-2">
                                    <span className="text-white font-black text-base flex items-center space-x-2">
                                        <Star className="w-5 h-5" />
                                        <span>POPULAR</span>
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <div
                                    className={`${plan.iconBg} border-4 border-black p-4 inline-block mb-4 shadow-[4px_4px_0px_0px_#000]`}
                                >
                                    <plan.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-black mb-2">{plan.name}</h3>
                                <div className="text-3xl font-black text-black mb-2">{plan.price}</div>
                                <p className="text-base font-bold text-black">{plan.period}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-base font-bold text-black">
                                        <div className="bg-green-500 border-2 border-black p-1 mr-3">
                                            <div className="w-4 h-4 bg-white"></div>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onMouseDown={() => handlePress(`plan-${index}`)}
                                className={`w-full ${plan.buttonColor} text-white font-black text-base py-4 border-4 border-black transition-all duration-150 flex items-center justify-center space-x-2 ${pressedButton === `plan-${index}`
                                        ? "shadow-[2px_2px_0px_0px_#000] translate-x-[2px] translate-y-[2px]"
                                        : "shadow-[6px_6px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[3px] hover:translate-y-[3px]"
                                    }`}
                            >
                                <span>GET STARTED</span>
                                <Star className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
