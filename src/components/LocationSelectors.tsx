"use client";

import { locations, type Location } from "@/data/mileage";
import { ArrowLeftRight } from "lucide-react";

type LocationSelectorsProps = {
    from: Location;
    to: Location;
    setFrom: (location: Location) => void;
    setTo: (location: Location) => void;
    onSwap: () => void;
};

export default function LocationSelectors({
    from,
    to,
    setFrom,
    setTo,
    onSwap,
}: LocationSelectorsProps) {
    return (
        <div className="grid items-end gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div>
                <label className="mb-2 block font-semibold text-slate-800">
                    From
                </label>

                <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value as Location)}
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            <button 
                onClick={onSwap}
                title="Swap locations"
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100">
                    <ArrowLeftRight size={25} />
            </button>

            <div>
                <label className="mb-2 block font-semibold text-slate-800">
                    To
                </label>

                <select
                    value={to}
                    onChange={(e) => setTo(e.target.value as Location)}
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}