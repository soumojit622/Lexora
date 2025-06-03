"use client"

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

import Link from "next/link"
import { CheckCircle, Rocket, ShieldCheck, Send } from "lucide-react"

function PricingDialog() {
  return (
    <DialogContent className="max-w-4xl border-[4px] border-black rounded-none shadow-[6px_6px_0_#000] bg-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-extrabold text-black">Upgrade Plan</DialogTitle>
        <DialogDescription>
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              
              {/* PRO PLAN */}
              <div className="rounded-none border-[3px] border-purple-700 p-6 shadow-[4px_4px_0_#000] sm:px-8 lg:p-12 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-black flex justify-center items-center gap-2">
                    <Rocket className="w-5 h-5 stroke-purple-700" />
                    Professional
                  </h2>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-4xl font-extrabold text-black"> $4.99 </strong>
                    <span className="text-sm font-medium text-gray-700">/month</span>
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {[
                    "Everything in Free plan",
                    "Unlimited Team Files",
                    "Exclusive access to Lexora content",
                    "More document features",
                    "Priority Email Support",
                    "Premium Updates",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-black font-medium">
                      <CheckCircle className="w-5 h-5 stroke-purple-700" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  target="_blank"
                  className="mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-yellow-300
                             border-4 border-black rounded-none shadow-[5px_5px_0_#000]
                             font-extrabold text-black px-5 py-2
                             hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                             active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
                             transition-all duration-150 ease-in-out"
                >
                  <Send className="h-5 w-5" />
                  Coming Soon
                </Link>
              </div>

              {/* FREE PLAN */}
              <div className="rounded-none border-[3px] border-green-700 p-6 shadow-[4px_4px_0_#000] sm:px-8 lg:p-12 bg-gradient-to-br from-green-100 via-lime-100 to-white">
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-black flex justify-center items-center gap-2">
                    <ShieldCheck className="w-5 h-5 stroke-green-700" />
                    Free
                  </h2>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-4xl font-extrabold text-black"> Free </strong>
                    <span className="text-sm font-medium text-gray-700">/month</span>
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {[
                    "5 Team files",
                    "Limited Lexora access",
                    "Basic Document features",
                    "Email Support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-black font-medium">
                      <CheckCircle className="w-5 h-5 stroke-green-700" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-8 flex items-center justify-center gap-2 bg-gradient-to-r from-lime-400 to-green-300
                             border-4 border-black rounded-none shadow-[5px_5px_0_#000]
                             font-extrabold text-black px-5 py-2
                             hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                             active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
                             transition-all duration-150 ease-in-out"
                >
                  <Send className="h-5 w-5" />
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <button className="mt-2 ml-auto flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-300
                             border-4 border-black rounded-none shadow-[5px_5px_0_#000]
                             font-extrabold text-black px-5 py-2
                             hover:shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px]
                             active:shadow-[1px_1px_0_#000] active:translate-x-[2px] active:translate-y-[2px]
                             transition-all duration-150 ease-in-out"
          >
            <Send className="h-5 w-5" />
            Close
          </button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export default PricingDialog
