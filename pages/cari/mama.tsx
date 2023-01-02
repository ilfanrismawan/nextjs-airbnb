import * as React from "react";
import Map from "react-map-gl";

function mama() {
  return (
    <Map
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        longitude: -122.4376,
        latitude: 37.7577,
        zoom: 11,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/ilfanrismawan/clce2pf0l000q15pjitn74dll"
    />
  );
}

export default mama;
