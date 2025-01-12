import { Header } from "@/widgets/Header/ui/Header";
import {SelectDoMenus} from "./_components/SelectDoMenus";
import { KakaoShareButton } from "@/features/share/ui/KakaoShareButton";
import { CopyLinkButton } from "@/features/share/ui/CopyLinkButton";



export default function Home() {

  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-gradient-to-b from-blue-200 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex flex-col items-center h-full">
        <SelectDoMenus />

        <div className="flex items-center justify-center h-full gap-4 w-full mt-6 py-4 px-4">
          <CopyLinkButton/>
          <KakaoShareButton 
            title="지역 선택 공유하기" 
            description="지역 선택 페이지 공유하기" 
         />
        </div>
      </main>
    </div>
  );
}
