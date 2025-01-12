"use client";

import { DESTINATIONS } from "@/entities/trip/model/constants";

import { Header } from "@/widgets/Header/ui/Header";
import { KoreaMap } from "@/widgets/Map/ui/KoreaMap";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { getKeyByValue } from "../_utils/getKeyByValue";


export default function Home() {

  const [selectedDestination, setSelectedDestination] = useState<typeof DESTINATIONS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const lastPath = usePathname().split('/').pop();
  
  const destination = lastPath === 'all' ? DESTINATIONS : DESTINATIONS.filter((destination) => (destination.do) === getKeyByValue(lastPath as string));

  const handleRandomTrip = useCallback(() => {
    setIsLoading(true);
   
    // 애니메이션을 위한 딜레이 추가
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * destination.length);
      setSelectedDestination(destination[randomIndex]);
      setIsLoading(false);
    }, 1000);
  }, [destination]);

  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="flex flex-col items-center h-full">
        <KoreaMap selectedRegion={selectedDestination}/>

        <div className="flex flex-col items-center justify-center h-full gap-4 w-full py-4 px-4">
          <Button className="w-full rounded-lg" size="large" variant="contained" color="primary" onClick={handleRandomTrip}>
            {isLoading ? "여행지 선택 중..." : "랜덤 여행지 추천받기"}
          </Button>        
        </div>
      </main>
    </div>
  );
}
