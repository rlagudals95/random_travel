'use client'
import { useEffect } from 'react';
import { initMixpanel } from '@/lib/analytics/mixpanel';

export function MixpanelInit() {
  useEffect(() => {
    initMixpanel();
  }, []);

  return null;
}