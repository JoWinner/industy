import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";

const statusOptions = [
  { 
    value: "DEPARTED_PORT", 
    label: "Departed Port",
    description: "Shipment has departed from port"
  },
  { 
    value: "CUSTOMS_CLEARANCE", 
    label: "Customs Clearance",
    description: "Shipment is undergoing customs clearance"
  },
  { 
    value: "ARRIVED_PORT", 
    label: "Arrived at Port",
    description: "Shipment has arrived at port"
  },
  { 
    value: "PICKED_UP", 
    label: "Shipment Picked Up",
    description: "Shipment has been picked up"
  }
];

const UpdateStatusModal = ({ isOpen, onClose, shipment, onSubmit }) => {
  const [formData, setFormData] = useState({
    status: "",
    location: "",
    portId: "",
    country: "",
    description: ""
  });
  const [ports, setPorts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      fetchPorts();
    }
  }, [isOpen]);

  const fetchPorts = async () => {
    try {
      const response = await fetch("/api/ports");
      const data = await response.json();
      setPorts(data);
    } catch (error) {
      console.error("Error fetching ports:", error);
    }
  };

  const handleStatusChange = (status) => {
    const selectedStatus = statusOptions.find(option => option.value === status);
    setFormData(prev => ({
      ...prev,
      status,
      description: selectedStatus?.description || ""
    }));
  };

  const handlePortChange = (portId) => {
    const selectedPort = ports.find(port => port.id === portId);
    if (selectedPort) {
      setFormData(prev => ({
        ...prev,
        portId,
        location: selectedPort.name,
        country: selectedPort.country
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update Shipment Status</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={formData.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Status</option>
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Port</label>
            <select
              value={formData.portId}
              onChange={(e) => handlePortChange(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Port</option>
              {ports.map((port) => (
                <option key={port.id} value={port.id}>
                  {port.name}, {port.country}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Update Status"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatusModal;