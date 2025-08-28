export default async function ProductDetals({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <div>Product {productId} Details</div>;
}
