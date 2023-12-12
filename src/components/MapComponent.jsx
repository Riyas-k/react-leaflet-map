import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon,divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import locationIcon from "../assets/google-maps.png";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const markers = [
    { geoCode: [8.8, 76.9366], popup: "Hello 1" },
    { geoCode: [8.5, 76.9366], popup: "Hello 2" },
    { geoCode: [8.6, 76.9366], popup: "Hello 3" },
  ];
  const customIcon = new Icon({
    iconUrl: locationIcon,
    iconSize: [38, 38],
  });
  const customCreateFunction  = (cluster)=>{
    return new divIcon({
        html:`<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className:'custom-marker-cluster',
        iconSize:point(33,33,true)
    })
  }
  return (
    <MapContainer center={[8.5241, 76.9366]} zoom={13}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={customCreateFunction}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.geoCode}
            position={marker.geoCode}
            icon={customIcon}
          >
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;
