export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="flex-grow ">{children}</main>
    </div>
  );
}
