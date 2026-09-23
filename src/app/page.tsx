"use client";

import { useState, useEffect } from "react";
import { locations, type Location } from "@/data/mileage";
import FormHeader from "@/components/FormHeader";
import FormTitle from "@/components/FormTitle";
import LocationSelectors from "@/components/LocationSelectors";
import DistanceCard from "@/components/DistanceCard";
import RecentTrips from "@/components/RecentTrips";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export type Trip = {
  id: number;
  from: Location;
  to: Location;
  miles: number;
  date: string;
}

export default function Home() {
  const [from, setFrom] = useState<Location>("Admin. Bldg.");
  const [to, setTo] = useState<Location>("Allen H.S.");

  const [miles, setMiles] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [trips, setTrips] = useState<Trip[]>([]);

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  useEffect(() => {
    async function loadMileage() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/mileage?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
        );

        const data = await response.json();
        if(!response.ok) {
          throw new Error(data.error || "Unable to get mileage.");
        }

        setMiles(data.miles);
      } catch (error) {
        setMiles(null);
        if(error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unable to get mileage");
        }
      } finally {
        setLoading(false);
      }
    }

    loadMileage();
  }, [from, to]);

  //Swap location
  function handleSwap() {
    setFrom(to);
    setTo(from);
  }

  //Add trip
  function handleAddTrip() {
    if(miles === null) {
      return;
    }

    const newTrip: Trip = {
      id: Date.now(),
      from,
      to,
      miles,
      date: new Date().toLocaleDateString("en-US", dateOptions),
    };

    setTrips((currentTrips) => [...currentTrips, newTrip]);
  }

  //Delete trip
  function handleDeleteTrip(id: number) {
    setTrips((currentTrips) => currentTrips.filter((trip) => trip.id !== id));
  }

  //Clear trips
  function handleClearTrips() {
    setTrips([]);
  }

  //Drag or Rearrange Trips
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if(!over || active.id === over.id) {
      return;
    }

    setTrips((currentTrips) => {
      const oldIndex = currentTrips.findIndex(
        (trip) => trip.id === active.id
      );

      const newIndex = currentTrips.findIndex(
        (trip) => trip.id === over.id
      );

      return arrayMove(currentTrips, oldIndex, newIndex);
    });
  }

  const LocationSelectorsParentProps = {
    from: from,
    to: to,
    setFrom: setFrom,
    setTo: setTo,
    onSwap: handleSwap,
  };

  const DistanceCardParentProps = {
    from: from,
    to: to,
    miles: miles,
    error: error,
    loading: loading,
    date: dateOptions.toString(),
    addTrip: handleAddTrip,
  };

  const RecentTripsParentProps = {
    trips: trips,
    clearTrips: handleClearTrips,
    deleteTrip: handleDeleteTrip,
  }

   return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <FormHeader />

        <section className="p-6 sm:p-8">
          <FormTitle />
          <LocationSelectors {...LocationSelectorsParentProps} />
          <DistanceCard {...DistanceCardParentProps} />
          <RecentTrips {...RecentTripsParentProps} />
        </section>

      </div>
      
    </main>
  );
}