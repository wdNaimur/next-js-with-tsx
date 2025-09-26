export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {children}
      <h2 className="mt-4 text-xl">Featured Products</h2>
    </div>
  );
}
