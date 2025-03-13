"use client";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Reveal } from "@/lib/Reveal";
import { Loader2, Edit, Trash } from "lucide-react";
import PortModal from "./components/port-modal";

const PortMap = () => {
  const [selectedPort, setSelectedPort] = useState(null);
  const [ports, setPorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalType, setModalType] = useState(null);
  const [selectedPortForEdit, setSelectedPortForEdit] = useState(null);
  const [newPort, setNewPort] = useState({
    name: "",
    country: "",
    position: null
  });

  const mapStyles = {
    height: "calc(100vh - 2rem)",
    width: "100%",
  };

  const defaultCenter = {
    lat: 20,
    lng: 0,
  };

  useEffect(() => {
    fetchPorts();
  }, []);

  const fetchPorts = async () => {
    try {
      const response = await fetch("/api/ports");
      if (!response.ok) throw new Error("Failed to fetch ports");
      const data = await response.json();
      setPorts(data);
    } catch (error) {
      setError("Failed to load ports");
    } finally {
      setLoading(false);
    }
  };

  const handleMapClick = (event) => {
    setNewPort({
      ...newPort,
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPort.name || !newPort.country || !newPort.position) {
      setError("Please fill all fields and select a location on the map");
      return;
    }

    try {
      const response = await fetch("/api/ports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPort),
      });

      if (!response.ok) throw new Error("Failed to create port");
      
      await fetchPorts();
      setNewPort({ name: "", country: "", position: null });
    } catch (error) {
      setError("Failed to create port");
    }
  };

  const handleEditPort = async (portData) => {
    try {
      const response = await fetch(`/api/ports/${portData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(portData),
      });

      if (!response.ok) throw new Error("Failed to update port");
      
      await fetchPorts();
      setModalType(null);
      setSelectedPortForEdit(null);
    } catch (error) {
      setError("Failed to update port");
    }
  };

  const handleDeletePort = async (portId) => {
    if (!confirm("Are you sure you want to delete this port?")) return;

    try {
      const response = await fetch(`/api/ports/${portId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete port");
      
      await fetchPorts();
    } catch (error) {
      setError("Failed to delete port");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 pt-8">
      <Reveal>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Port Management</h1>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">All Ports</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ports.map((port) => (
              <div key={port.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{port.name}</h3>
                    <p className="text-gray-600">{port.country}</p>
                    <p className="text-sm text-gray-500">
                      Lat: {port.position.lat.toFixed(4)}, Lng: {port.position.lng.toFixed(4)}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        setSelectedPortForEdit(port);
                        setModalType("edit");
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeletePort(port.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={3}
                center={defaultCenter}
                onClick={handleMapClick}
              >
                {ports.map((port) => (
                  <Marker
                    key={port.id}
                    position={port.position}
                    onClick={() => setSelectedPort(port)}
                  />
                ))}

                {newPort.position && (
                  <Marker
                    position={newPort.position}
                    icon={{
                      url: "data:image/svg+xml;base64," + btoa(`
                        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="50" cy="50" r="40" fill="#4CAF50" stroke="white" stroke-width="8"/>
                        </svg>
                      `),
                      scaledSize: { width: 30, height: 30 }
                    }}
                  />
                )}

                {selectedPort && (
                  <InfoWindow
                    position={selectedPort.position}
                    onCloseClick={() => setSelectedPort(null)}
                  >
                    <div className="p-2">
                      <h3 className="font-bold text-gray-900">{selectedPort.name}</h3>
                      <p className="text-gray-600">{selectedPort.country}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Port</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Port Name</label>
                <input
                  type="text"
                  value={newPort.name}
                  onChange={(e) => setNewPort({ ...newPort, name: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  value={newPort.country}
                  onChange={(e) => setNewPort({ ...newPort, country: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <p className="text-sm text-gray-500">
                  {newPort.position
                    ? `Lat: ${newPort.position.lat.toFixed(4)}, Lng: ${newPort.position.lng.toFixed(4)}`
                    : "Click on the map to set location"}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Add Port
              </button>
            </form>
          </div>
        </div>
      </Reveal>

      <PortModal
        isOpen={modalType === "edit"}
        onClose={() => {
          setModalType(null);
          setSelectedPortForEdit(null);
        }}
        port={selectedPortForEdit}
        onSubmit={handleEditPort}
      />
    </div>
  );
};

export default PortMap;