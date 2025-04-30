import React, { useRef } from "react";
import { Marker } from "react-map-gl/mapbox";
import { WayPointItem } from "./API/useGetWaypoint";

interface MapMakerProps {
  index: number;
  item: WayPointItem;
  changeWayPointColor: (index: number, color: string) => void;
}

const MapMaker: React.FC<MapMakerProps> = ({
  index,
  item,
  changeWayPointColor,
}) => {
  const colorInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    colorInputRef.current?.click();
  };

  const handleOnChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    changeWayPointColor(index, color);
  };

  return (
    <Marker latitude={item.lat} longitude={item.lng} anchor="bottom">
      <div
        onClick={handleClick}
        style={{
          backgroundColor: item.color,
          width: "32px",
          height: "32px",
          cursor: "pointer",
          position: "relative",
          // border: "1px solid black",
        }}
      >
        <input
          ref={colorInputRef}
          type="color"
          value={item.color}
          onChange={handleOnChangeColor}
          style={{
            position: "absolute",
            opacity: 0,
            pointerEvents: "none",
            width: 0,
            height: 0,
          }}
        />
      </div>
    </Marker>
  );
};

export default MapMaker;
