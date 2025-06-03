'use client'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Search, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DashboardHeader = () => {
    const { user }: any = useKindeBrowserClient()
    return (
        <div className="flex justify-end w-full gap-3 items-center p-4
                        border-4 border-black
                        shadow-[6px_6px_0_#000]
                        rounded-none bg-gradient-to-r from-green-300 to-green-400">

            <div className="flex gap-2 items-center border-4 border-black rounded-none p-2
                            bg-white shadow-[4px_4px_0_#000]
                            focus-within:border-blue-600 focus-within:shadow-[2px_2px_0_#0a84ff]
                            transition-all duration-200">
                <Search className="h-5 w-5 text-black" />
                <input
                    type="text"
                    placeholder="Search"
                    className="outline-none bg-transparent text-black font-semibold placeholder:text-gray-500"
                />
            </div>

            <div className="border-4 border-black rounded-none shadow-[4px_4px_0_#000] overflow-hidden">
                <Image
                    src={user?.picture ?? '/default-profile.png'}
                    alt="user"
                    width={36}
                    height={36}
                    className="rounded-none"
                />
            </div>

            <button
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-300
                           border-4 border-black rounded-none shadow-[5px_5px_0_#000]
                           font-extrabold text-black px-5 py-2
                           hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                           active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
                           transition-all duration-150 ease-in-out"
            >
                <Send className="h-5 w-5" />
                Invite
            </button>
        </div>
    )
}

export default DashboardHeader
