"use client";
import { useState } from "react";
import { Package, Truck, Ship, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/lib/Reveal";
import MapView from "./components/map-view";

const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [showDemo, setShowDemo] = useState(false);

  const demoShipment = {
    status: "In Transit",
    origin: {
      name: "Lagos, Nigeria",
      position: { lat: 6.4541, lng: 3.3947 }
    },
    destination: {
      name: "Rotterdam, Netherlands",
      position: { lat: 51.9225, lng: 4.4792 }
    },
    currentLocation: {
      name: "Mediterranean Sea",
      position: { lat: 35.8989, lng: 14.5146 }
    },
    estimatedDelivery: "March 15, 2024",
    route: [
      { lat: 6.4541, lng: 3.3947 }, // Lagos
      { lat: 14.7645, lng: -17.3662 }, // Dakar
      { lat: 35.8989, lng: 14.5146 }, // Current Location
      { lat: 51.9225, lng: 4.4792 } // Rotterdam
    ],
    updates: [
      {
        date: "Feb 28, 2024",
        time: "14:30",
        status: "Departed Port",
        location: "Lagos Port",
        icon: Ship
      },
      {
        date: "Feb 27, 2024",
        time: "09:15",
        status: "Customs Clearance",
        location: "Lagos Port",
        icon: CheckCircle2
      },
      {
        date: "Feb 26, 2024",
        time: "11:45",
        status: "Arrived at Port",
        location: "Lagos Port",
        icon: Truck
      },
      {
        date: "Feb 25, 2024",
        time: "08:00",
        status: "Shipment Picked Up",
        location: "Lagos Warehouse",
        icon: Package
      }
    ]
  };

  const handleTrack = (e) => {
    e.preventDefault();
    setShowDemo(true);
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
              <button type="submit" className="btn-primary whitespace-nowrap">
                Track Shipment
              </button>
            </div>
          </form>
        </div>

        {showDemo && (
          <Reveal>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Status</h3>
                  <p className="text-lg font-bold text-primary">{demoShipment.status}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Current Location</h3>
                  <p className="text-lg font-bold text-gray-900">{demoShipment.currentLocation.name}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">Estimated Delivery</h3>
                  <p className="text-lg font-bold text-gray-900">{demoShipment.estimatedDelivery}</p>
                </div>
              </div>

              {/* Interactive Map */}
              <MapView shipment={demoShipment} />

              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Shipment Progress</h3>
                <div className="space-y-8">
                  {demoShipment.updates.map((update, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <update.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-semibold text-gray-900">{update.status}</span>
                          <span className="text-sm text-gray-500">
                            {update.date} {update.time}
                          </span>
                        </div>
                        <p className="text-gray-600">{update.location}</p>
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
                  <p className="text-gray-900">{demoShipment.origin.name}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Destination</h4>
                  <p className="text-gray-900">{demoShipment.destination.name}</p>
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