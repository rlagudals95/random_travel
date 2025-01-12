export interface TripLocation {
  id: string;
  name: string;
  region: string;
  description: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
} 

export interface Region {
    docity: string;
    do: Do;
    city: string;
    longitude: number;
    latitude: number;
}

export type Do = "서울" | "경기" | "강원" | "충청" | "전라" | "경상" | "제주";

