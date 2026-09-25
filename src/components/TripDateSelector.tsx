"use client";

type TripDateSelectorProps = {
    tripDate: string;
    setTripDate: (date: string) => void;
};

export default function TripDateSelector({ 
    tripDate, 
    setTripDate 
}: TripDateSelectorProps) {
    return (
        <div className="mb-5 max-w-xs">
            <label className="mb-2 block font-semibold text-slate-800">
                Trip Date
            </label>

            <input 
                type="date"
                value={tripDate}
                onChange={(e) => setTripDate(e.target.value)}
                className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus-ring-blue-100"
            />
        </div>
    )
}