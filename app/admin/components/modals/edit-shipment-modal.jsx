import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";

const EditShipmentModal = ({ isOpen, onClose, shipment, onSubmit }) => {
  const [formData, setFormData] = useState({
    trackingNumber: "",
    origin: "",
    originPortId: "",
    destination: "",
    destPortId: "",
    departureDate: "",
    arrivalDate: "",
    containerNumber: "",
    status: "DEPARTED_PORT"
  });
  const [ports, setPorts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPorts();
  }, []);

  useEffect(() => {
    if (shipment) {
      setFormData({
        ...shipment,
        departureDate: shipment.departureDate.split("T")[0],
        arrivalDate: shipment.arrivalDate.split("T")[0]
      });
    }
  }, [shipment]);

  const fetchPorts = async () => {
    try {
      const response = await fetch("/api/ports");
      const data = await response.json();
      setPorts(data);
    } catch (error) {
      console.error("Error fetching ports:", error);
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
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Edit Shipment</h2>
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tracking Number</label>
              <input
                type="text"
                value={formData.trackingNumber}
                onChange={(e) => setFormData({ ...formData, trackingNumber: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Container Number</label>
              <input
                type="text"
                value={formData.containerNumber}
                onChange={(e) => setFormData({ ...formData, containerNumber: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Origin</label>
              <input
                type="text"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Origin Port</label>
              <select
                value={formData.originPortId}
                onChange={(e) => setFormData({ ...formData, originPortId: e.target.value })}
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <input
                type="text"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Destination Port</label>
              <select
                value={formData.destPortId}
                onChange={(e) => setFormData({ ...formData, destPortId: e.target.value })}
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Departure Date</label>
              <input
                type="date"
                value={formData.departureDate}
                onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Arrival Date</label>
              <input
                type="date"
                value={formData.arrivalDate}
                onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="DEPARTED_PORT">Departed Port</option>
              <option value="CUSTOMS_CLEARANCE">Customs Clearance</option>
              <option value="ARRIVED_PORT">Arrived at Port</option>
              <option value="PICKED_UP">Shipment Picked Up</option>
            </select>
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
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditShipmentModal;