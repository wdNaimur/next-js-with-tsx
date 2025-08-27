export default async function ProductDetals({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div className="text-xl font-medium text-blue-100">
      Details about Product {productId}
    </div>
  );
}
