import PageLayout from "@/widgets/PageLayout/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
}
