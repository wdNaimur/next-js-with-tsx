export default async function ProductDetals({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <div>Details about Product {productId}</div>;
}
