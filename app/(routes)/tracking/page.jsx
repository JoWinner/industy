"use client";
import { useState } from "react";
import { Package, Truck, Ship, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/lib/Reveal";
import MapView from "./components/map-view";

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShipment(null);

    try {
      const response = await fetch(`/api/tracking/${number}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to find shipment");
      }

      setShipment(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-[#4CAF50] mb-4">
              Track Your Shipment
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your tracking number to get real-time updates on your shipment
            </p>
          </Reveal>
        </div>

        <div className="max-w-xl mx-auto mb-16">
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number"
                className="flex-1 px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap" disabled={loading}>
                {loading ? "Tracking..." : "Track Shipment"}
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded max-w-xl mx-auto">
            {error}
          </div>
        )}

        {shipment && (
          <Reveal>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Status</h3>
                  <p className="text-lg font-bold text-primary">{shipment.status}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Current Location</h3>
                  <p className="text-lg font-bold text-gray-900">{shipment.currentLocation || shipment.origin}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Estimated Delivery</h3>
                  <p className="text-lg font-bold text-gray-900">
                    {new Date(shipment.arrivalDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <MapView shipment={shipment} />

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Shipment Progress</h3>
                <div className="space-y-8">
                  {shipment.updates.map((update, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {update.status === "DEPARTED_PORT" && <Ship className="w-6 h-6 text-primary" />}
                          {update.status === "CUSTOMS_CLEARANCE" && <CheckCircle2 className="w-6 h-6 text-primary" />}
                          {update.status === "ARRIVED_PORT" && <Truck className="w-6 h-6 text-primary" />}
                          {update.status === "PICKED_UP" && <Package className="w-6 h-6 text-primary" />}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-semibold text-gray-900">{update.status.replace(/_/g, " ")}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(update.date).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-gray-600">{update.location}</p>
                        {update.description && (
                          <p className="text-sm text-gray-500 mt-1">{update.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shipment Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Origin</h4>
                  <p className="text-gray-900">{shipment.origin}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Destination</h4>
                  <p className="text-gray-900">{shipment.destination}</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default TrackingPage;