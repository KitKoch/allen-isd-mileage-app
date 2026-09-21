"use client";

import { MapPin } from "lucide-react";

type DistanceCardProps = {
    from: string;
    to: string;
    miles: number | null;
    date: string;
    loading: boolean;
};

export default function DistanceCard({
    from,
    to,
    miles,
    date,
    loading
} : DistanceCardProps) {
    return (
        <div className="mt-6 flex flex-col gap-5 rounded-xl bg-blue-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-600 text-white">
                    <MapPin size={30} />
                </div>
                <div>
                    <p className="text-sm font-medium text-blue-900">
                        Distance
                    </p>

                    {/* {loading ? (
                        <
                    )} */}
                </div>
            </div>
        </div>
    )
}