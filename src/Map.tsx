import React, { PropsWithChildren } from "react";
import { Map as _Map } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapProps {}

const Map: React.FC<PropsWithChildren<MapProps>> = (props) => {
  const { children } = props;

  return (
    <_Map
      mapboxAccessToken="pk.eyJ1IjoiZWNsZXZlciIsImEiOiJja3IzM3B3b24yMHNsMnBueGNya3I4eXExIn0.qNBd6dRRZLTTxKSJ0PUazg"
      initialViewState={{
        longitude: 10,
        latitude: 50,
        zoom: 5,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {children}
    </_Map>
  );
};

export default Map;
