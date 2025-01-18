'use client'

import { useEffect, useCallback } from 'react'

interface UseScreenCaptureProps {
  onCapture?: () => void;
  onMobileCapture?: () => void;
}

export const useScreenCapture = ({ onCapture, onMobileCapture }: UseScreenCaptureProps = {}) => {
  const handleVisibilityChange = useCallback(() => {
    // iOS에서 스크린샷 시 앱이 잠시 background로 전환되는 것을 감지
    if (document.hidden) {
      const timestamp = new Date().getTime()
      localStorage.setItem('lastHidden', timestamp.toString())
    } else {
      const lastHidden = parseInt(localStorage.getItem('lastHidden') || '0')
      const now = new Date().getTime()
      // 300ms 이내에 다시 visible 상태가 되면 스크린샷으로 간주
      if (now - lastHidden < 300) {
        console.log('Mobile screenshot detected')
        onMobileCapture?.()
      }
    }
  }, [onMobileCapture])

  const handleDesktopCapture = useCallback((e: KeyboardEvent) => {
    // Mac OS 스크린샷 단축키
    if ((e.key === '3' || e.key === '4') && e.metaKey && e.shiftKey) {
      console.log('Desktop screenshot detected')
      onCapture?.()
    }
    // Windows 스크린샷 단축키
    if (e.key === 'PrintScreen' || (e.key === 'S' && e.altKey)) {
      console.log('Desktop screenshot detected')
      onCapture?.()
    }
  }, [onCapture])

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange)
    document.addEventListener('keydown', handleDesktopCapture)

    // Android Chrome 스크린샷 감지 시도
    if ('mediaSession' in navigator) {
      try {
        // @ts-expect-error: Android Chrome experimental screenshot detection
        navigator.mediaSession.setActionHandler('screenshot', () => {
          console.log('Android screenshot detected')
          onMobileCapture?.()
        })
      } catch (error) {
        console.log(error)
      }
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('keydown', handleDesktopCapture)
    }
  }, [handleVisibilityChange, handleDesktopCapture])
}