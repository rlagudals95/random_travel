'use client'

import { EventName } from '@/lib/analytics/types'
import { analytics } from '@/lib/analytics/tracker'
import { useScreenCapture } from '@/shared/hooks/useScreenCapture'


export function ScreenCaptureDetector() {
  useScreenCapture({
    onCapture: () => {
      console.log('onCapture')
      analytics.track(EventName.SCREEN_CAPTURE, {
        type: 'desktop',
        source: window.location.pathname,
        href: window.location.href

      })
    },
    onMobileCapture: () => {
      console.log('onMobileCapture')
      alert('onMobileCapture')
      analytics.track(EventName.SCREEN_CAPTURE, {
        type: 'mobile',
        source: window.location.pathname,
        href: window.location.href
      })
    },
  })

  return null
}