"use client";

import { Trip } from "@/app/page";
import { Trash2 } from "lucide-react";

type RecentTripsProps = {
    trips: Trip[],
    clearTrips: () => void,
    deleteTrip: (id: number) => void,
};

export default function RecentTrips({ 
    trips,
    clearTrips, 
    deleteTrip,
}: RecentTripsProps) {
    return (
        <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900:">
                    Recent Trips
                </h2>

                {trips.length > 0 && (
                    <button
                        onClick={clearTrips}
                        className="font-semibold text-white rounded-lg bg-yellow-200 hover:bg-yellow-400 px-6"
                    >
                        Clear
                    </button>
                )}
            </div>

            <div className="hidden border-b border-blue-200 bg-blue-300 px-5 py-3 text-sm font-semibold text-white md:flex">
                <div className="flex-1">Date</div>
                <div className="flex-1">Trip</div>
                <div className="flex-1 text-center">Miles</div>
                <div className="flex-1 text-center">Actions</div>
            </div>
            
            <div className="overflow-hidden rounded-lg border border-slate-200">
                {trips.length === 0 ? (
                    <div className="px-5 py-10 text-center text-slate-500">
                        No trips added
                    </div>
                ) : (
                    trips.map((trip) => (
                    <div 
                        key={trip.id}
                        className="flex items-center border-b-2 border-blue-200 px-5 py-4 last:border-b-0"
                    >
                        <div className="hidden flex-1 text-slate-500 md:block">
                            {trip.date}
                        </div>

                        <div className="min-w-0 flex-1 font-medium text-slate-800">
                                {trip.from} <span className="mx-2">→</span> {trip.to}
                        </div>

                        <div className="hidden flex-1 text-center font-bold text-slate-900 md:block">
                            {trip.miles.toFixed(2)} mi
                        </div>

                        <div className="flex flex-1 justify-end md:justify-center">
                            <button
                                onClick={() => deleteTrip(trip.id)}
                                title="Delete trip"
                                className="text-slate-600 transition hover:text-red-600"
                            >
                                <Trash2 size={19} />
                            </button>
                        </div>
                    </div>
                    ))
                )}
            </div>
        </div>
    )
};