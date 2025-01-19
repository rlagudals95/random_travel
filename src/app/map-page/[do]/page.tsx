"use client";

import { DESTINATIONS } from "@/entities/trip/model/constants";
import { Header } from "@/widgets/Header/ui/Header";
import { KoreaMap } from "@/widgets/Map/ui/KoreaMap";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";

import { getKeyByValue } from "../_utils/getKeyByValue";

import { KakaoShareButton } from "@/features/share/ui/KakaoShareButton";
import { CopyLinkButton } from "@/features/share/ui/CopyLinkButton";
import { PageViewAnalytics } from "@/components/PageViewAnalytics";
import { PageName } from "@/lib/analytics/types";
import { useRandomDestination } from "../_hooks/useRandomDestination";


export default function Home() {

  const lastPath = usePathname().split('/')?.pop() ?? '';
  const destinations = lastPath === 'all' ? DESTINATIONS : DESTINATIONS.filter((destination) => (destination.do) === getKeyByValue(lastPath as string));

  const {
    selectedDestination,
    isLoading,
    handleRandomTrip
  } = useRandomDestination({ destinations, lastPath });


  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto">

      <main className="flex flex-col items-center h-full">
        <PageViewAnalytics title={PageName.MAP_PAGE} />
        <KoreaMap selectedRegion={selectedDestination}/>
        <div className="flex flex-col items-center justify-center h-full gap-4 w-full py-4 px-4">
          <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,  
                borderRadius: 10, 
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
      
        <div className="flex items-center justify-center h-full gap-4 w-full mt-6 py-4 px-4">
          <CopyLinkButton/>
          <KakaoShareButton 
            title="랜덤 여행지 공유하기" 
            description="랜덤 여행지 공유하기 페이지입니다." 
         />
        </div>
      </main>
    </div>
  );
}
