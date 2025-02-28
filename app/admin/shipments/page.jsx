"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/lib/Reveal";
import ShipmentTable from "../components/shipment-table";

const ShipmentsPage = () => {
  const [shipments, setShipments] = useState([
    {
      id: "SHP001",
      origin: "Abidjan, Ivory Coast",
      destination: "Hamburg, Germany",
      status: "In Transit",
      departureDate: "2024-02-25",
      arrivalDate: "2024-03-15",
      currentLocation: "Mediterranean Sea",
      containerNumber: "CONT123456",
    },
    // Add more shipments as needed
  ]);

  return (
    <div className="space-y-6 pt-8">
      <Reveal>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Shipments</h1>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>New Shipment</span>
          </button>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="hidden md:flex text-xl font-bold text-gray-900">All Shipments</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search shipments..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">All Status</option>
                  <option value="in-transit">In Transit</option>
                  <option value="delivered">Delivered</option>
                  <option value="delayed">Delayed</option>
                </select>
              </div>
            </div>
            <ShipmentTable shipments={shipments} />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ShipmentsPage;