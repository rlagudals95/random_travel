import PageLayout from "@/widgets/PageLayout/PageLayout";
import QueryProvider from "../_providers/QueryProvider";
import { Header } from "@/widgets/Header/ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <PageLayout>
        <Header/>
        {children}
      </PageLayout>
    </QueryProvider>
  );
}
