'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics } from '@/lib/analytics/tracker';
import { EventName, PageNameType } from '@/lib/analytics/types';

interface PageViewAnalyticsProps {
  path?: string;
  title?: PageNameType;
  trigger?: 'mount' | 'unmount' | 'both';
}

export function PageViewAnalytics({ 
  path,
  title,
  trigger = 'mount' 
}: PageViewAnalyticsProps) {
  const pathname = usePathname();
  const currentPath = path ?? pathname;

  useEffect(() => {
    if (trigger === 'mount' || trigger === 'both') {
      analytics.track(EventName.PAGE_VIEW, { path: currentPath, title });
    }

    return () => {
      if (trigger === 'unmount' || trigger === 'both') {
        analytics.track(EventName.PAGE_VIEW, { path: currentPath, title });
      }
    };
  }, [currentPath, title, trigger]);

  return null;
}