
export default function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="min-h-screen w-full max-w-[430px] mx-auto bg-gradient-to-b from-blue-200 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {children}
    </div>
);
}
