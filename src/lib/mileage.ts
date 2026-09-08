import { mileageData, Location } from "@/data/mileage";


// getMilage function, promises to return a number or null
export function getMileage(from: Location, to: Location): number | null {
    if(from === to) {
        return 0;
    }

    const directKey = `${from}|${to}`;
    const reverseKey = `${to}|${from}`;

    if(mileageData[directKey] !== undefined) {
        return mileageData[directKey];
    }

    if(mileageData[reverseKey] !== undefined) {
        return mileageData[reverseKey];
    }

    return null;
}

