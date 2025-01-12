'use client';

import { IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { getKakaoInstance } from '@/shared/third-party/kakao';


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
  buttonText = '자세히 보기'
}: KakaoShareButtonProps) => {
 
  const handleShare = () => {

    const kakaoInstance = getKakaoInstance(window);
    if (!kakaoInstance) {
      console.error('Kakao SDK is not initialized');
      return;
    }

    window.Kakao.Link.sendDefault({
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
  };

  return (
    <IconButton 
      onClick={handleShare}
      color="inherit"
      aria-label="share"
    >
      <ShareIcon sx={{ fontSize: 30 }}/>
    </IconButton>
  );
};