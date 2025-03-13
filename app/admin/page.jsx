"use client";
import { useState, useEffect } from "react";
import { Package, Ship, Anchor, AlertTriangle } from "lucide-react";
import AdminStats from "./components/admin-stats";
import ShipmentTable from "./components/shipment-table";
import { Reveal } from "@/lib/Reveal";

const AdminDashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [stats, setStats] = useState([
    {
      title: "Active Shipments",
      value: "0",
      icon: Ship,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Ports Connected",
      value: "0",
      icon: Anchor,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Containers",
      value: "0",
      icon: Package,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Delayed Shipments",
      value: "0",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]);

  useEffect(() => {
    fetchShipments();
    fetchStats();
  }, []);

  const fetchShipments = async () => {
    try {
      const response = await fetch("/api/shipments");
      const data = await response.json();
      setShipments(data);
    } catch (error) {
      console.error("Error fetching shipments:", error);
    }
  };

  const fetchStats = async () => {
    try {
      const [shipmentsRes, portsRes] = await Promise.all([
        fetch("/api/shipments"),
        fetch("/api/ports")
      ]);

      const shipments = await shipmentsRes.json();
      const ports = await portsRes.json();

      setStats([
        {
          title: "Active Shipments",
          value: shipments.length.toString(),
          icon: Ship,
          color: "text-blue-600",
          bgColor: "bg-blue-100",
        },
        {
          title: "Ports Connected",
          value: ports.length.toString(),
          icon: Anchor,
          color: "text-green-600",
          bgColor: "bg-green-100",
        },
        {
          title: "Total Containers",
          value: shipments.length.toString(),
          icon: Package,
          color: "text-purple-600",
          bgColor: "bg-purple-100",
        },
        {
          title: "In Transit",
          value: shipments.filter(s => s.status === "CUSTOMS_CLEARANCE").length.toString(),
          icon: AlertTriangle,
          color: "text-red-600",
          bgColor: "bg-red-100",
        },
      ]);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <div className="space-y-6 pt-8">
      <Reveal>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </Reveal>

      <Reveal>
        <AdminStats stats={stats} />
      </Reveal>

      <Reveal>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Shipments</h2>
          <ShipmentTable 
            shipments={shipments} 
            onView={() => {}}
            onEdit={() => {}}
            onDelete={() => {}}
            onUpdateStatus={() => {}}
          />
        </div>
      </Reveal>
    </div>
  );
};

export default AdminDashboard;