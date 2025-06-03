import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="sticky top-0 bg-yellow-400 border-b-4 border-black shadow-[0_4px_0_#000] z-50">

            <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo and Branding */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.svg"
                        alt="Lexora Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="text-2xl font-extrabold text-black tracking-tight">
                        LEXORA
                    </span>
                </div>

                {/* Navigation */}
                <nav
                    aria-label="Global"
                    className="hidden md:flex items-center gap-8 text-base font-semibold text-black"
                >
                    <a className="hover:text-gray-700 transition" href="#">About</a>
                    <a className="hover:text-gray-700 transition" href="#">Careers</a>
                    <a className="hover:text-gray-700 transition" href="#">History</a>
                    <a className="hover:text-gray-700 transition" href="#">Services</a>
                    <a className="hover:text-gray-700 transition" href="#">Projects</a>
                </nav>


                {/* Buttons */}
                <div className="flex items-center gap-4">
                    {/* Login Button */}
                    <button
                        className="bg-gradient-to-r from-green-400 to-green-400 text-black font-black text-sm px-5 py-2
                       border-2 border-black shadow-[3px_3px_0px_#000] transition-all duration-150 ease-in-out 
                       hover:shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                       active:shadow-[1px_1px_0px_#000] active:translate-x-[2px] active:translate-y-[2px]
                       rounded-none"
                    >
                        {/* Login */}
                        <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink>
                    </button>

                    {/* Register Button */}
                    <button
                        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black text-sm px-5 py-2
                       border-2 border-black shadow-[3px_3px_0px_#000] transition-all duration-150 ease-in-out 
                       hover:shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                       active:shadow-[1px_1px_0px_#000] active:translate-x-[2px] active:translate-y-[2px]
                       rounded-none hidden sm:inline-flex"
                    >
                        {/* Register */}
                        <RegisterLink>Register</RegisterLink>
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        className="inline-flex items-center justify-center bg-gray-100 text-black border-2 border-black p-2 
                       shadow-[2px_2px_0_#000] hover:shadow-[1px_1px_0_#000] 
                       active:shadow-none active:-translate-x-[1px] active:-translate-y-[1px]
                       transition md:hidden"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
