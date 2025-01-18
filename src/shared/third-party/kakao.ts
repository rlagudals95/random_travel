/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUrlWithParams } from "../utils/url";

export function getKakaoInstance(window: any): any {
    if (typeof window !== 'undefined' && window.Kakao !== undefined) {
        const Kakao = window.Kakao;

        if (!Kakao.isInitialized()) {
            Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        }

        return Kakao;
    }
}


export const shareToKakao = async (params:{
    shareUrl: string,
    title: string,
    description: string,
    imageUrl?: string,
  }) => {

    const {shareUrl, title, description, imageUrl = ''} = params
    if (typeof window === 'undefined') {
      throw new Error('shareToKakao function should be called in browser');
    }
  
    const url = createUrlWithParams(shareUrl, {
      
      createdAt: new Date().toISOString(),
      source: 'share',
    });

  
    getKakaoInstance(window)?.Link.sendDefault({
      objectType: 'feed',
      itemContent: {
        titleImageText: title,
        titleImageCategory: description,

      },
      content: {
        title,
        description,
        imageUrl,
        link: {
          webUrl: url,
          mobileWebUrl: url,
        },
      },
      buttonTitle: '자세히 보기',
    });
  
    return true;
  };