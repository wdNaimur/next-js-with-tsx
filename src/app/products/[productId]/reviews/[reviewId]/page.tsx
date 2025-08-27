import React from "react";

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { reviewId, productId } = await params;
  return (
    <div>
      Review {reviewId} for Product {productId}
    </div>
  );
}
