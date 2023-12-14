export interface ICoordinates {
  lat: number;
  lng: number;
}
export interface IPlace extends ICoordinates {
  country: string;
  lon: number;
  name: string;
  region: string;
  url: string;
  id: number;
}
