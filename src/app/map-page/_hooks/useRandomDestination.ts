import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { DESTINATIONS, DESTINATIONS_MAP } from '@/entities/trip/model/constants';
import { Region } from '@/entities/trip/model/types';


interface UseRandomDestinationProps {
  destinations: Region[];
  lastPath: string;
}

export function useRandomDestination({ destinations, lastPath }: UseRandomDestinationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const firstRender = useRef(false);
  const [selectedDestination, setSelectedDestination] = useState<typeof DESTINATIONS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRandomTrip = useCallback((isShuffle: boolean = true) => {
    setIsLoading(true);
   
    let destination;
    
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * destinations.length);
      destination = destinations[randomIndex];
    } else {
      const urlDestination = searchParams.get('destination');
      destination = urlDestination 
        ? DESTINATIONS_MAP.get(urlDestination)
        : destinations[Math.floor(Math.random() * destinations.length)];
    }

    if(destination) {
      setSelectedDestination(destination);
      setIsLoading(false);
      router.replace(`/map-page/${lastPath}?destination=${destination.docity}`);
    }
  }, [destinations, lastPath, router, searchParams]);

  useEffect(() => {
    if(firstRender.current === false) {
      handleRandomTrip(false);
      firstRender.current = true;
    }
  }, [handleRandomTrip]);

  return {
    selectedDestination,
    isLoading,
    handleRandomTrip
  };
} 