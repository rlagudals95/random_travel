'use client'

import { analytics } from "@/lib/analytics/tracker";
import { EventName } from "@/lib/analytics/types";
import Link from "next/link";

interface DoMenuItemProps {
  region: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
}

export const DoMenuItem = ({ region, href, active, disabled }: DoMenuItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    analytics.track(EventName.BUTTON_CLICK, { buttonId: 'do_menu_item', buttonName: region, location: href });
  };

  return (
    <Link 
      href={href} 
      className={`w-full hover:bg-gray-100 rounded-lg p-4 text-center font-bold ${active ? 'bg-gray-200' : 'bg-gray-50'} ${disabled ? 'cursor-not-allowed' : ''}`}
      onClick={handleClick}
    >
      <div className="text-lg font-bold text-gray-800">
        {region === 'all' ? '전국' : region}
      </div>
    </Link>
  );
}; 