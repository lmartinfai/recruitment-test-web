
import { useQueries } from "@tanstack/react-query";
import { customAxiosInstance } from "./customAxios";

export interface CapitalMapPoint {
    name: {
      common: string;
      official: string;
      nativeName?: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cioc?: string;
    independent?: boolean;
    status: string;
    unMember?: boolean;
    currencies?: {
      [key: string]: {
        symbol: string;
        name: string;
      };
    };
    idd?: {
      root?: string;
      suffixes?: string[];
    };
    capital?: string[];
    altSpellings?: string[];
    region: string;
    subregion?: string;
    languages?: {
      [key: string]: string;
    };
    latlng: [number, number];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms?: {
      [key: string]: {
        f: string;
        m: string;
      };
    };
    cca3: string;
    translations?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
    flag?: string;
    maps?: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    gini?: {
      [year: string]: number;
    };
    fifa?: string;
    car?: {
      signs?: string[];
      side: string;
    };
    timezones: string[];
    continents: string[];
    flags?: {
      png: string;
      svg: string;
      alt?: string;
    };
    coatOfArms?: {
      png?: string;
      svg?: string;
    };
    startOfWeek?: string;
    capitalInfo?: {
      latlng?: [number, number];
    };
    postalCode?: {
      format?: string;
      regex?: string;
    };
  }
  
const useGetCapital = (citys:string[]) => {

    const getCapital = async (city:string) =>
        customAxiosInstance
        .get(`https://restcountries.com/v3.1/capital/${city}`)
        .then((response) => {
          const data: CapitalMapPoint[] = response.data
          console.log("useGetCapital | getCapital ✅ |",city, response);

          return data;
        });

    return useQueries({
        queries: citys.map((city) => ({
            queryKey: ["capital", city],
            queryFn: () => getCapital(city)
        })),
    })
};

export default useGetCapital;