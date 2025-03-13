import { X } from "lucide-react";

const ViewShipmentModal = ({ isOpen, onClose, shipment }) => {
  if (!isOpen || !shipment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shipment Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Tracking Number</h3>
              <p className="mt-1 text-lg">{shipment.trackingNumber}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Container Number</h3>
              <p className="mt-1 text-lg">{shipment.containerNumber}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Origin</h3>
              <p className="mt-1 text-lg">{shipment.origin}</p>
              <p className="text-sm text-gray-500">{shipment.originPort.name}, {shipment.originPort.country}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Destination</h3>
              <p className="mt-1 text-lg">{shipment.destination}</p>
              <p className="text-sm text-gray-500">{shipment.destPort.name}, {shipment.destPort.country}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Departure Date</h3>
              <p className="mt-1 text-lg">{new Date(shipment.departureDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Arrival Date</h3>
              <p className="mt-1 text-lg">{new Date(shipment.arrivalDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <p className="mt-1 text-lg">{shipment.status.replace(/_/g, " ")}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Updates</h3>
            <div className="space-y-4">
              {shipment.updates.map((update, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{update.status.replace(/_/g, " ")}</p>
                      <p className="text-sm text-gray-500">{update.location}</p>
                      {update.description && (
                        <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(update.date).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewShipmentModal;