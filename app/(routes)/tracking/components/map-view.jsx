"use client";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker, Polyline, InfoWindow } from "@react-google-maps/api";

const MapView = ({ shipment }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  // Custom marker icons
  const markerIcons = {
    origin: {
      url: "data:image/svg+xml;base64," + btoa(`
        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#4CAF50" stroke="white" stroke-width="8"/>
        </svg>
      `),
      scaledSize: { width: 20, height: 20 }
    },
    destination: {
      url: "data:image/svg+xml;base64," + btoa(`
        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#1B5E20" stroke="white" stroke-width="8"/>
        </svg>
      `),
      scaledSize: { width: 20, height: 20 }
    },
    current: {
      url: "data:image/svg+xml;base64," + btoa(`
        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 50,70 10,90" fill="#4CAF50" stroke="white" stroke-width="4"/>
        </svg>
      `),
      scaledSize: { width: 24, height: 24 }
    }
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
            icon={markerIcons.origin}
          />

          {/* Destination Marker */}
          <Marker
            position={shipment.destination.position}
            onClick={() => setSelectedLocation({
              position: shipment.destination.position,
              name: shipment.destination.name,
              type: "Destination"
            })}
            icon={markerIcons.destination}
          />

          {/* Current Location Marker */}
          <Marker
            position={shipment.currentLocation.position}
            onClick={() => setSelectedLocation({
              position: shipment.currentLocation.position,
              name: shipment.currentLocation.name,
              type: "Current Location"
            })}
            icon={markerIcons.current}
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