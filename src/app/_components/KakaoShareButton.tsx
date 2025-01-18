'use client';

import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect } from 'react';
import { KAKAO_JS_KEY } from '@/shared/constants/kakao';

interface KakaoShareButtonProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
}

export const KakaoShareButton = ({
  title = '랜덤여행',
  description = '랜덤으로 여행지를 추천받아보세요!',
  imageUrl = '',
  buttonText = '공유하기'
}: KakaoShareButtonProps) => {
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_JS_KEY);
      }
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: buttonText,
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <IconButton 
      onClick={handleShare}
      color="inherit"
      aria-label="share"
    >
      <ShareIcon />
    </IconButton>
  );
};