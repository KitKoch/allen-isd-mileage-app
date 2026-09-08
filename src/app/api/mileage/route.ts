import { NextRequest, NextResponse } from "next/server";
import { getMileage } from "@/lib/mileage";
import { locations, Location } from "@/data/mileage";

function isLocation(value: string): value is Location {
    return locations.includes(value as Location);
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if(!from || !to) {
        return NextResponse.json(
            { error: "Both from and to locations are required" },
            { status: 400 },
        );
    }

    if(!isLocation(from) || !isLocation(to)) {
        return NextResponse.json(
            { error: "Invalid location" },
            { status: 400 },
        );
    }

    const miles = getMileage(from, to);

    if(miles === null) {
        return NextResponse.json(
            { error: "Mileage not found" },
            { status: 404 },
        );
    }

    return NextResponse.json({
        from,
        to,
        miles,
    });
}