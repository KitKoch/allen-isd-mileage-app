"use client";

import { type Location } from "@/data/mileage";

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
        <div>
            <label className="mb-2 block font-semibold text-slate-800">
                From
            </label>

            <select
             value={from}
             onChange={(e) => setFrom(e.target.value as Location)}
             />
        </div>
    )
}