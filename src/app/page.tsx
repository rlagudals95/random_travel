import { Header } from "@/widgets/Header/ui/Header";
import { SelectDoMenus } from "./_components/SelectDoMenus";
import { IntroSection } from "./_components/IntroSection";
import { PageViewAnalytics } from "@/components/PageViewAnalytics";
import { PageName } from "@/lib/analytics/types";
import { FloatingShareMenu } from "@/components/FloatingShareMenu";



export default function Home() {

  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-blue-100">
      <Header />
      <main className="flex flex-col items-center h-full">
        <PageViewAnalytics title={PageName.HOME} />
        <IntroSection />
        <SelectDoMenus />
        <FloatingShareMenu/>
      </main>
    </div>
  );
}
