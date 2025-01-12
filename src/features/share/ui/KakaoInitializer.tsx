'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export const KakaoInitializer = () => {
  useEffect(() => {
    const initializeKakao = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        console.log('Kakao SDK initialized');
      }
    };

    // SDK가 로드되었는지 확인
    if (window.Kakao) {
      initializeKakao();
    } else {
      // SDK가 아직 로드되지 않았다면 주기적으로 체크
      const interval = setInterval(() => {
        if (window.Kakao) {
          initializeKakao();
          clearInterval(interval);
        }
      }, 1000);

      // 컴포넌트 언마운트 시 인터벌 정리
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Script
      src="https://developers.kakao.com/sdk/js/kakao.js"
      strategy="afterInteractive"
    />
  );
}; 