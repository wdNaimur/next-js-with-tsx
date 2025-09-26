export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  console.log(params);
  return <div>Product {productId} Details</div>;
}
