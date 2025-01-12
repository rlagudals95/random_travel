import { Header } from "@/widgets/Header/ui/Header";
import {SelectDoMenus} from "./_components/SelectDoMenus";


export default function Home() {

  return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-gradient-to-b from-blue-200 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="flex flex-col items-center h-full">
        <SelectDoMenus />
      </main>
    </div>
  );
}
