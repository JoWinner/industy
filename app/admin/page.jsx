"use client";
import { useState } from "react";
import { Package, Ship, Anchor, AlertTriangle } from "lucide-react";
import AdminStats from "./components/admin-stats";
import ShipmentTable from "./components/shipment-table";
import { Reveal } from "@/lib/Reveal";

const AdminDashboard = () => {
  const [activeShipments, setActiveShipments] = useState([
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

  const stats = [
    {
      title: "Active Shipments",
      value: "12",
      icon: Ship,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Ports Connected",
      value: "25",
      icon: Anchor,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Containers",
      value: "48",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Delayed Shipments",
      value: "2",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  return (
    <div className="space-y-6">
      <Reveal>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </Reveal>

      <Reveal>
        <AdminStats stats={stats} />
      </Reveal>

      <Reveal>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Shipments</h2>
          <ShipmentTable shipments={activeShipments} />
        </div>
      </Reveal>
    </div>
  );
};

export default AdminDashboard;