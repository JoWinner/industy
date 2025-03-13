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
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setLoading(true);
    setError("");
    setShipment(null);

    try {
      const response = await fetch(`/api/tracking/${encodeURIComponent(trackingNumber)}`);
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

  const getStatusColor = (status) => {
    switch (status) {
      case "DEPARTED_PORT":
        return "bg-yellow-100 text-yellow-800";
      case "CUSTOMS_CLEARANCE":
        return "bg-blue-100 text-blue-800";
      case "ARRIVED_PORT":
        return "bg-green-100 text-green-800";
      case "PICKED_UP":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "DEPARTED_PORT":
        return <Ship className="w-6 h-6 text-primary" />;
      case "CUSTOMS_CLEARANCE":
        return <CheckCircle2 className="w-6 h-6 text-primary" />;
      case "ARRIVED_PORT":
        return <Truck className="w-6 h-6 text-primary" />;
      case "PICKED_UP":
        return <Package className="w-6 h-6 text-primary" />;
      default:
        return <Package className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
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
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap" 
                disabled={loading}
              >
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
                  <div className={`px-3 py-1 inline-flex text-sm font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                    {shipment.status.replace(/_/g, " ")}
                  </div>
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

              {shipment.originPort && shipment.destPort && (
                <MapView shipment={{
                  ...shipment,
                  currentLocation: {
                    position: shipment.route[0] // Default to origin for now
                  },
                  origin: {
                    position: shipment.originPort.position,
                    name: shipment.origin
                  },
                  destination: {
                    position: shipment.destPort.position,
                    name: shipment.destination
                  }
                }} />
              )}

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Shipment Progress</h3>
                <div className="space-y-8">
                  {shipment.updates.map((update, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {getStatusIcon(update.status)}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-semibold text-gray-900">
                            {update.status.replace(/_/g, " ")}
                          </span>
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
                  <p className="text-sm text-gray-500">{shipment.originPort?.name}, {shipment.originPort?.country}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Destination</h4>
                  <p className="text-gray-900">{shipment.destination}</p>
                  <p className="text-sm text-gray-500">{shipment.destPort?.name}, {shipment.destPort?.country}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Container Number</h4>
                  <p className="text-gray-900">{shipment.containerNumber}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Tracking Number</h4>
                  <p className="text-gray-900">{shipment.trackingNumber}</p>
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