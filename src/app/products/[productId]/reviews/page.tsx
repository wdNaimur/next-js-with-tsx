import React from "react";

export default async function Reviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <h1>All Reviews for product {productId}</h1>
      <ul className="mt-6 ms-10 list-disc">
        <li>Product {productId} Review 1</li>
        <li>Product {productId} Review 2</li>
        <li>Product {productId} Review 3</li>
      </ul>
    </div>
  );
}
