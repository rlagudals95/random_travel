'use client'

import { DO_MAP } from "@/entities/trip/model/constants";
import { Do } from "@/entities/trip/model/types";
import { DoMenuItem } from "./DoMenuItem";
import { CtaButton } from "./CtaButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SelectDoMenus = () => {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const regions = ['all', ...(DO_MAP.keys())];

  const handleRandomSelect = () => {
    let count = 0;
    const duration = 3000; // 총 룰렛 동작 시간 (ms)
    const interval = 100; // 각 선택 간격 (ms)
    const maxCount = Math.floor(duration / interval);

    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * regions.length);
      setActiveRegion(regions[randomIndex]);
      count++;

      if (count >= maxCount) {
        clearInterval(timer);
        
        const finalRegion = regions[randomIndex];
        const href = `/map-page/${finalRegion === 'all' ? 'all' : DO_MAP.get(finalRegion as Do)}`;
        router.push(href);
      }
    }, interval);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 w-full p-4">
      <div className="grid grid-cols-2 h-full gap-4 w-full ">
        {regions.map((region) => (
          <DoMenuItem
            key={region} 
            region={region} 
            href={`/map-page/${region === 'all' ? 'all' : DO_MAP.get(region as Do)}`}
            active={region === activeRegion}
          />
        ))}
      </div>
      <CtaButton onClick={handleRandomSelect}>
        랜덤선택
      </CtaButton>
    </div>
  );
};