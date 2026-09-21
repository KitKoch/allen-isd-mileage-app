"use client";

import { MapPin, Loader2, Car } from "lucide-react";

type DistanceCardProps = {
    from: string;
    to: string;
    error: string;
    miles: number | null;
    date: string;
    loading: boolean;
    addTrip: () => void;
};

export default function DistanceCard({
    from,
    to,
    miles,
    date,
    loading,
    error,
    addTrip,
} : DistanceCardProps) {
    return (
        <div className="mt-6 flex flex-col gap-5 rounded-xl bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-600 text-white">
                    <MapPin size={30} />
                </div>
                <div>
                    <p className="text-lg font-medium text-blue-900">
                        Distance
                    </p>
    
                    {loading ? (
                    <div className="mt-1 flex items-center gap-2 text-slate-500">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <p className="text-2xl font-bold">
                            Loading...
                        </p>
                    </div>
                    ) : miles !== null ? (
                        <p className="mt-1 text-3xl font-bold text-slate-900">
                            {miles.toFixed(2)} miles
                        </p>
                    ) : (
                        <p className="mt-1 text-lg font-semibold text-red-600">
                            {error || "Mileage not available"}
                        </p>
                    )}
                </div>
            </div>

            <button
                onClick={addTrip}
                disabled={miles === null || loading}
                className="flex h-14 items-center justify-center gap-3 rounded-lg bg-blue-500 px-6 font-semibold"
            >
                <Car size={20} />
                Add Trip
            </button>
        </div>
    )
}