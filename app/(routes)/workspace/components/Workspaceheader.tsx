import { Button } from '@/components/ui/button'
import { Link, Save } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Workspaceheader = ({ onSave }: any) => {
    return (
        <div className="p-4 border-b-4 border-black shadow-[4px_4px_0_#000] bg-gradient-to-r from-green-300 to-green-400 select-none">
            <div className="flex justify-between items-center">
                {/* Left Section */}
                <div className="flex gap-3 items-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        height={40}
                        width={40}
                        className="border-2 border-black shadow-[2px_2px_0_#000]"
                    />
                    <h2 className="font-extrabold text-lg text-black">File Name</h2>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onSave()}
                        className="flex items-center gap-2 h-9 px-4 py-1 bg-yellow-400 text-black font-bold text-sm
              border-4 border-black rounded-none shadow-[3px_3px_0_#000]
              hover:shadow-[1px_1px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
              active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
              transition-all duration-150 ease-in-out"
                    >
                        <Save className="h-4 w-4 stroke-black" />
                        Save
                    </button>

                    <button
                        className="flex items-center gap-2 h-9 px-4 py-1 bg-pink-500 text-white font-bold text-sm
              border-4 border-black rounded-none shadow-[3px_3px_0_#000]
              hover:shadow-[1px_1px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
              active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
              transition-all duration-150 ease-in-out"
                    >
                        Share
                        <Link className="h-4 w-4 stroke-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Workspaceheader;
