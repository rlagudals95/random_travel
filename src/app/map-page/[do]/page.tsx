"use client";

import { DESTINATIONS, DESTINATIONS_MAP } from "@/entities/trip/model/constants";
import { Header } from "@/widgets/Header/ui/Header";
import { KoreaMap } from "@/widgets/Map/ui/KoreaMap";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { getKeyByValue } from "../_utils/getKeyByValue";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";


export default function Home() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedDestination, setSelectedDestination] = useState<typeof DESTINATIONS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const lastPath = usePathname().split('/').pop();
  
  const destinations = lastPath === 'all' ? DESTINATIONS : DESTINATIONS.filter((destination) => (destination.do) === getKeyByValue(lastPath as string));

  const handleRandomTrip = useCallback((isShuffle: boolean = true) => {
    setIsLoading(true);
   
    let destination;
    
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * destinations.length);
      destination = destinations[randomIndex];
    } else {
      // URL에 destination이 있으면 그것을 우선 사용
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
    handleRandomTrip(false);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="flex flex-col items-center h-full">
        <KoreaMap selectedRegion={selectedDestination}/>
        <div className="flex flex-col items-center justify-center h-full gap-4 w-full py-4 px-4">
          <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,  // 위아래 패딩 증가
                borderRadius: 10,  // 더 둥근 모서리
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: 'none',
              }}
              onClick={() => {
                handleRandomTrip(true);
              }}
            >
              {isLoading ? "여행지 선택 중..." : "랜덤 여행지 추천받기"}
            </Button>      
        </div>
      </main>
    </div>
  );
}
