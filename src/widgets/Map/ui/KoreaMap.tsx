import { Region } from '@/entities/trip/model/types';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface KoreaMapProps {
  selectedRegion?: Region | null;
}

export const KoreaMap = ({ selectedRegion }: KoreaMapProps) => {
  return (
    <div className="relative w-full aspect-[3/4] mt-4 rounded-2xl shadow-lg overflow-hidden">
      <Map
        center={{ lat: selectedRegion?.latitude || 36.2, lng: selectedRegion?.longitude || 127.9 }}
        style={{ width: "100%", height: "400px" }}
        level={13}
      >
        {selectedRegion && (
          <MapMarker
            position={{ lat: selectedRegion.latitude, lng: selectedRegion.longitude }}
          >
            <div className="p-2 text-sm">{selectedRegion.docity}</div>
          </MapMarker>
        )}
      </Map>
    </div>
  );
};