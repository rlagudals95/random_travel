import { DO_MAP } from "@/entities/trip/model/constants";
import { Do } from "@/entities/trip/model/types";
import { DoMenuItem } from "./DoMenuItem";

export const SelectDoMenus = () => {
  return (
    <div className="grid grid-cols-2 h-full gap-4 w-full py-4 px-4">
      {(['all', ...(DO_MAP.keys())]).map((region) => (
        <DoMenuItem 
          key={region} 
          region={region} 
          href={`/map-page/${region === 'all' ? 'all' : DO_MAP.get(region as Do)}`} 
        />
      ))}              
    </div>
  );
};