"use client";
import { Archive, FilePlus, Flag, Github, Plus, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Constant from "@/app/constant/Constant";
import PricingDialog from "./PricingDialog";

const SideNavBottomSection = ({ onFileCreate, totalFiles }: any) => {
    const menuList = [
        { id: 1, name: "Getting Started", icon: Flag, path: "" },
        { id: 2, name: "Github", icon: Github, path: "" },
        { id: 3, name: "Archive", icon: Archive, path: "" },
    ];
    const [fileInput, setFileInput] = useState("");

    return (
        <div className="mt-4 space-y-4 text-sm font-semibold text-black">
            {/* Menu Items */}
            <div className="space-y-2">
                {menuList.map((menu) => (
                    <div
                        key={menu.id}
                        className="flex items-center gap-2 p-2 bg-white border-2 border-black cursor-pointer hover:bg-sky-100 transition shadow-[3px_3px_0_#000]"
                    >
                        <menu.icon className="w-4 h-4" />
                        {menu.name}
                    </div>
                ))}
            </div>

            {/* Add New File Button */}
            <Dialog>
                <DialogTrigger asChild>
                    <button
                        className="w-full flex items-center justify-center gap-2 
      bg-gradient-to-r from-yellow-400 to-yellow-300
      border-4 border-black rounded-none shadow-[5px_5px_0_#000]
      font-extrabold text-black px-5 py-2
      hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
      active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
      transition-all duration-150 ease-in-out"
                    >
                        <Plus className="h-5 w-5" />
                        New File
                    </button>
                </DialogTrigger>


                {totalFiles < Constant.MAX_FREE_FILE ? (
                    <DialogContent className="border-4 border-black shadow-[5px_5px_0_#000] bg-white rounded-none p-6 select-none">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2 font-extrabold text-xl">
                                <FilePlus className="w-6 h-6 stroke-black" />
                                Create New File
                            </DialogTitle>
                            <DialogDescription className="mt-4">
                                <Input
                                    placeholder="Enter file name"
                                    className="border-4 border-black shadow-[3px_3px_0_#000] rounded-none px-3 py-2 font-semibold text-black
                   focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                                    onChange={(e) => setFileInput(e.target.value)}
                                />
                            </DialogDescription>
                        </DialogHeader>

                        <DialogFooter className="mt-6 flex justify-end">
                            <DialogClose asChild>
                                <button
                                    className="w-full flex items-center justify-center gap-2
                   bg-yellow-400 border-4 border-black rounded-none shadow-[5px_5px_0_#000]
                   font-extrabold text-black px-5 py-2 cursor-pointer
                   hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                   active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
                   transition-all duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!(fileInput && fileInput.length > 3)}
                                    onClick={() => onFileCreate(fileInput)}
                                >
                                    <PlusCircleIcon className="w-5 h-5 stroke-black" />
                                    Create
                                </button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>

                ) : (
                    <PricingDialog />
                )}
            </Dialog>

            {/* Progress Bar */}
            <div className="mt-5 space-y-2">
                {/* Progress Bar */}
                <div className="h-4 w-full bg-white border-2 border-black rounded-full shadow-[2px_2px_0_#000] overflow-hidden">
                    <div
                        className="h-full bg-blue-600 rounded-full transition-width duration-300"
                        style={{ width: `${(totalFiles / Constant.MAX_FREE_FILE) * 100}%` }}
                    />
                </div>

                {/* Usage Text */}
                <p className="text-xs font-semibold text-black">
                    <span className="font-bold">{totalFiles}</span> out of <span className="font-bold">{Constant.MAX_FREE_FILE}</span> files used
                </p>

                {/* Upgrade Prompt */}
                <p className="text-xs text-gray-700">Upgrade your plan for unlimited access.</p>
            </div>

        </div>
    );
};

export default SideNavBottomSection;
