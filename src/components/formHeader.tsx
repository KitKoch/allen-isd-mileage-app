import { MapPin, Settings } from "lucide-react";
import Image from "next/image";

export default function FormHeader() {
    return (
        <header className="flex flex-col gap-4 bg-[#13294b] px-6 py-5 text-white md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-14 items-center justify-center rounded-lg bg-white p-1.5">
                    <Image 
                        src="/aisdMark.svg"
                        alt="Allen ISD Mark"
                        width={52}
                        height={42}
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>

                <div>
                    <div className="text-xl font-bold tracking-wide">
                        ALLEN ISD
                    </div>

                    <div className="text-sm text-slate-300">
                        Technology Department
                    </div>
                </div>
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
                <button className="flex items-center gap-2 border-b-2 border-white pb-1">
                    <MapPin size={18} />
                    Mileage Calculator
                </button>

                <button className="flex items-center gap-2 text-slate-200 transition hover:text-white">
                    <Settings size={18} />
                    Settings
                </button>
            </nav>            
        </header>
    )
}