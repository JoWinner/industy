"use client";
import { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Reveal } from "@/lib/Reveal";

const ports = [
  // Africa
  { id: 1, name: "Port of Abidjan", country: "Ivory Coast", position: { lat: 5.2500, lng: -4.0167 } },
  { id: 2, name: "Tema Port", country: "Ghana", position: { lat: 5.6167, lng: -0.0167 } },
  { id: 3, name: "Freeport of Monrovia", country: "Liberia", position: { lat: 6.3333, lng: -10.8000 } },
  
  // Germany
  { id: 4, name: "Port of Hamburg", country: "Germany", position: { lat: 53.5511, lng: 9.9937 } },
  { id: 5, name: "Port of Bremen", country: "Germany", position: { lat: 53.0793, lng: 8.8017 } },
  
  // UK
  { id: 6, name: "Port of Felixstowe", country: "UK", position: { lat: 51.9625, lng: 1.3511 } },
  { id: 7, name: "Port of Southampton", country: "UK", position: { lat: 50.9097, lng: -1.4031 } },
  
  // Australia
  { id: 8, name: "Port of Sydney", country: "Australia", position: { lat: -33.8688, lng: 151.2093 } },
  { id: 9, name: "Port of Melbourne", country: "Australia", position: { lat: -37.8136, lng: 144.9631 } },
  
  // US
  { id: 10, name: "Port of Los Angeles", country: "USA", position: { lat: 33.7288, lng: -118.2620 } },
  { id: 11, name: "Port of New York", country: "USA", position: { lat: 40.7128, lng: -74.0060 } },
];

const PortMap = () => {
  const [selectedPort, setSelectedPort] = useState(null);
  const [map, setMap] = useState(null);

  const mapStyles = {
    height: "calc(100vh - 2rem)",
    width: "100%",
  };

  const defaultCenter = {
    lat: 20,
    lng: 0,
  };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  return (
    <div className="space-y-6">
      <Reveal>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Global Port Network</h1>
      </Reveal>

      <Reveal>
        <div className="bg-white rounded-lg shadow p-4">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={3}
              center={defaultCenter}
              onLoad={onLoad}
            >
              {ports.map((port) => (
                <Marker
                  key={port.id}
                  position={port.position}
                  onClick={() => setSelectedPort(port)}
                  icon={{
                    url: "/images/port-marker.png",
                    scaledSize: { width: 32, height: 32 },
                  }}
                />
              ))}

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
      </Reveal>
    </div>
  );
};

export default PortMap;