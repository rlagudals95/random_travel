
export default function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen w-full max-w-[430px] mx-auto">
          {children}
      </div>
  );
}
