import { DO_MAP } from "@/entities/trip/model/constants";
import { Do } from "@/entities/trip/model/types";
import Link from "next/link";

export const SelectDoMenus = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 w-full py-4 px-4">
      {(['all', ...(DO_MAP.keys())]).map((region) => {
        return (
          <Link key={region} href={`/map-page/${region === 'all' ? 'all' : DO_MAP.get(region as Do)}`} className="w-full hover:bg-gray-100 rounded-lg p-4 bg-gray-50 text-center font-bold">
            <div className="text-lg font-bold text-gray-800">
              {region === 'all' ? '전국' : region}
            </div>
          </Link>
        );
      })}              
    </div>
  );
};