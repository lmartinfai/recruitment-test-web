import MapMaker from "./MapMaker";
import Map from "./Map";
import { useEffect, useState } from "react";
import useGetWaypoint, { WayPointItem } from "./API/useGetWaypoint";

export default function App() {
  const { items, loaded } = useGetWaypoint(["Berlin", "Paris", "Brussels"]);
  const [wayPoints, setWayPoints] = useState<WayPointItem[]>([]);

  useEffect(() => {
    if (loaded) {
      setWayPoints(items);
    }
  }, [loaded]);

  const changeWayPointColor = (index: number, color: string) => {
    setWayPoints((prev) =>
      prev.map((item, _index) => {
        if (_index === index) {
          return { ...item, color: color };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <Map>
        {loaded &&
          wayPoints.map((item, index) => (
            <MapMaker
              key={index}
              index={index}
              item={item}
              changeWayPointColor={changeWayPointColor}
            />
          ))}
      </Map>
    </div>
  );
}
