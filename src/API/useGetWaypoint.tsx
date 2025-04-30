import useGetCapital, { CapitalMapPoint } from "./useGetCapital";

export interface WayPointItem {
  name: string;
  lat: number;
  lng: number;
  color: string;
}

interface useGetWaypointReturnProps {
  loaded: boolean;
  items: WayPointItem[];
}

const useGetWaypoint = (citys: string[]): useGetWaypointReturnProps => {
  const getCapital = useGetCapital(citys);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getCapitalWayPointsFromUseQueries: () => CapitalMapPoint[] = () => {
    const wayPoints = getCapital.flatMap((query) => {
      if (query.isSuccess && query.data) {
        return query.data;
      }
      return [];
    });
    return wayPoints;
  };

  return {
    loaded: getCapital.every((query) => query.isSuccess),
    items: getCapitalWayPointsFromUseQueries().map((item) => ({
      name: item.name.common,
      lat: item.latlng[0],
      lng: item.latlng[1],
      color: generateRandomColor(),
    })),
  };
};

export default useGetWaypoint;
