"use client";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from "@react-google-maps/api";

const MapView = ({ shipment }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  return (
    <div className="mb-8 rounded-lg overflow-hidden">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={4}
          center={shipment.currentLocation.position}
        >
          {/* Origin Marker */}
          <Marker
            position={shipment.origin.position}
            onClick={() => setSelectedLocation({
              position: shipment.origin.position,
              name: shipment.origin.name,
              type: "Origin"
            })}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#4CAF50",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            }}
          />

          {/* Destination Marker */}
          <Marker
            position={shipment.destination.position}
            onClick={() => setSelectedLocation({
              position: shipment.destination.position,
              name: shipment.destination.name,
              type: "Destination"
            })}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: "#1B5E20",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
            }}
          />

          {/* Current Location Marker */}
          <Marker
            position={shipment.currentLocation.position}
            onClick={() => setSelectedLocation({
              position: shipment.currentLocation.position,
              name: shipment.currentLocation.name,
              type: "Current Location"
            })}
            icon={{
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              scale: 6,
              fillColor: "#4CAF50",
              fillOpacity: 1,
              strokeColor: "#ffffff",
              strokeWeight: 2,
              rotation: 45,
            }}
          />

          {/* Route Line */}
          <Polyline
            path={shipment.route}
            options={{
              strokeColor: "#4CAF50",
              strokeOpacity: 0.8,
              strokeWeight: 3,
              geodesic: true
            }}
          />

          {/* Info Window */}
          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-2">
                <h3 className="font-bold text-gray-900">{selectedLocation.type}</h3>
                <p className="text-gray-600">{selectedLocation.name}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;