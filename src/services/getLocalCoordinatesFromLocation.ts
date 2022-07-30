import api from "./api";
import {
  IGoogleMapsGeocodeResponse,
  IResult,
  LocationType,
} from "../interfaces/IGoogleMapsGeocodeResponse";
import { AxiosResponse } from "axios";

type funcType = (location: string) => Promise<LocationType>;

export const getLocalCoordinatesFromLocation: funcType = async (location) => {
  const response: AxiosResponse<IGoogleMapsGeocodeResponse> = await api.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      location
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`
  );

  return (response.data.results.at(0) as IResult).geometry.location;
};
