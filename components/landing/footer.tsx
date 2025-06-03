import { Globe, Shield, Twitter, Facebook, Linkedin, Instagram, Youtube, DollarSign } from "lucide-react"

export default function Footer() {
    const footerSections = [
        {
            title: "Product",
            links: ["Features", "Pricing", "Templates", "Integrations", "API"],
        },
        {
            title: "Company",
            links: ["About", "Careers", "Press", "Blog", "Contact"],
        },
        {
            title: "Resources",
            links: ["Help Center", "Tutorials", "Community", "Webinars", "Status"],
        },
        {
            title: "Legal",
            links: ["Privacy", "Terms", "Security", "Cookies", "GDPR"],
        },
    ]

    const socialLinks = [
        { icon: Twitter, name: "Twitter" },
        { icon: Facebook, name: "Facebook" },
        { icon: Linkedin, name: "LinkedIn" },
        { icon: Instagram, name: "Instagram" },
        { icon: Youtube, name: "YouTube" },
    ]

    return (
        <footer className="bg-gray-800 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="bg-yellow-400 border-4 border-white p-2">
                                <Globe className="w-8 h-8 text-black" />
                            </div>
                            <div className="text-2xl font-black text-white">LEXORA</div>
                        </div>
                        <p className="text-base font-bold text-gray-300 mb-6">
                            The ultimate note-taking and whiteboard app that transforms your ideas into visual masterpieces.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <div
                                    key={index}
                                    className="bg-yellow-400 border-4 border-white w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors shadow-[2px_2px_0px_0px_#fff]"
                                    aria-label={social.name}
                                    role="link"
                                    tabIndex={0}
                                >
                                    <social.icon className="w-6 h-6 text-black" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-black text-white mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="text-base font-bold text-gray-300 hover:text-yellow-400 transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t-4 border-white pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-base font-bold text-gray-300 mb-4 md:mb-0">
                            © {new Date().getFullYear()} Lexora Inc. All rights reserved. Made with <span aria-label="love" role="img">❤️</span> by Soumojit Banerjee.
                        </p>


                        <div className="flex gap-6">
                            <span className="text-base font-bold text-gray-300 flex items-center space-x-2">
                                <Globe className="w-5 h-5" />
                                <span>English</span>
                            </span>
                            <span className="text-base font-bold text-gray-300 flex items-center space-x-2">
                                <DollarSign className="w-5 h-5" />
                                <span>USD</span>
                            </span>
                            <span className="text-base font-bold text-gray-300 flex items-center space-x-2">
                                <Shield className="w-5 h-5" />
                                <span>Secure</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
