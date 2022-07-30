export interface IGoogleMapsGeocodeResponse {
  results: IResult[];
  status: string;
}

export interface IResult {
  geometry: {
    location: LocationType;
  };
}

export type LocationType = {
  lat: number;
  lng: number;
};
