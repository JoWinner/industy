"use client";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/lib/Reveal";
import ShipmentTable from "../components/shipment-table";
import ShipmentModal from "../components/modals/shipment-modal";
import UpdateStatusModal from "../components/modals/update-status-modal";

const ShipmentsPage = () => {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const response = await fetch("/api/shipments");
      const data = await response.json();
      setShipments(data);
    } catch (error) {
      setError("Failed to fetch shipments");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateShipment = async (formData) => {
    try {
      const response = await fetch("/api/shipments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to create shipment");
      
      await fetchShipments();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleUpdateShipment = async (formData) => {
    try {
      const response = await fetch(`/api/shipments/${selectedShipment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to update shipment");
      
      await fetchShipments();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleUpdateStatus = async (formData) => {
    try {
      const response = await fetch(`/api/shipments/${selectedShipment.id}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to update status");
      
      await fetchShipments();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleDeleteShipment = async (shipment) => {
    if (!confirm("Are you sure you want to delete this shipment?")) return;

    try {
      const response = await fetch(`/api/shipments/${shipment.id}`, {
        method: "DELETE"
      });

      if (!response.ok) throw new Error("Failed to delete shipment");
      
      await fetchShipments();
    } catch (error) {
      setError("Failed to delete shipment");
    }
  };

  return (
    <div className="space-y-6 pt-8">
      <Reveal>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Shipments</h1>
          <button
            onClick={() => {
              setSelectedShipment(null);
              setModalType("create");
            }}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Shipment</span>
          </button>
        </div>
      </Reveal>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <Reveal>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">All Shipments</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search shipments..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">All Status</option>
                  <option value="PENDING">Pending</option>
                  <option value="IN_TRANSIT">In Transit</option>
                  <option value="DELIVERED">Delivered</option>
                  <option value="DELAYED">Delayed</option>
                </select>
              </div>
            </div>
            <ShipmentTable
              shipments={shipments}
              onView={(shipment) => {
                setSelectedShipment(shipment);
                setModalType("view");
              }}
              onEdit={(shipment) => {
                setSelectedShipment(shipment);
                setModalType("edit");
              }}
              onUpdateStatus={(shipment) => {
                setSelectedShipment(shipment);
                setModalType("status");
              }}
              onDelete={handleDeleteShipment}
            />
          </div>
        </div>
      </Reveal>

      <ShipmentModal
        isOpen={modalType === "create" || modalType === "edit" || modalType === "view"}
        onClose={() => setModalType(null)}
        shipment={selectedShipment}
        mode={modalType}
        onSubmit={modalType === "create" ? handleCreateShipment : handleUpdateShipment}
      />

      <UpdateStatusModal
        isOpen={modalType === "status"}
        onClose={() => setModalType(null)}
        shipment={selectedShipment}
        onSubmit={handleUpdateStatus}
      />
    </div>
  );
};

export default ShipmentsPage;