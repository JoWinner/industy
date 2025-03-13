import { Eye, Edit, Trash, RefreshCw } from "lucide-react";

const ShipmentTable = ({ shipments, onView, onEdit, onDelete, onUpdateStatus }) => {
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

  const formatStatus = (status) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tracking Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Origin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Destination
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Container
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {shipments.map((shipment) => (
            <tr key={shipment.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {shipment.trackingNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {shipment.origin}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {shipment.destination}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(shipment.status)}`}>
                  {formatStatus(shipment.status)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {shipment.containerNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onView(shipment)}
                    className="text-blue-600 hover:text-blue-900"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onEdit(shipment)}
                    className="text-green-600 hover:text-green-900"
                    title="Edit Shipment"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onUpdateStatus(shipment)}
                    className="text-orange-600 hover:text-orange-900"
                    title="Update Status"
                  >
                    <RefreshCw className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(shipment)}
                    className="text-red-600 hover:text-red-900"
                    title="Delete Shipment"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentTable;