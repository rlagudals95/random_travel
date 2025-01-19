import PageLayout from "@/widgets/PageLayout/PageLayout";
import QueryProvider from "../_providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <PageLayout>
        {children}
      </PageLayout>
    </QueryProvider>
  );
}
