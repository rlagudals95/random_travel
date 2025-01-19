import { CopyLinkButton } from "@/features/share/ui/CopyLinkButton"

import { KakaoShareButton } from "@/app/_components/KakaoShareButton"

export const FloatingShareMenu = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-full mt-6 py-4 px-4 fixed bottom-3 left-0 right-0 [&>button]:bg-white [&>button]:shadow-md">
        <CopyLinkButton/>
        <KakaoShareButton 
          title="랜덤 여행지 공유하기" 
          description="랜덤 여행지 공유하기 페이지입니다." 
        />
    </div>
  )
}