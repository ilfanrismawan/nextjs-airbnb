import * as React from "react";
import Map from "react-map-gl";

export default function MapCard() {
  return (
    <div>
      <Map
        mapboxAccessToken={process.env.mapbox_key}
        initialViewState={{
          longitude: -122.4376,
          latitude: 37.7577,
          zoom: 11,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/ilfanrismawan/clce2pf0l000q15pjitn74dll"
      />
      ;
    </div>
  );
}
