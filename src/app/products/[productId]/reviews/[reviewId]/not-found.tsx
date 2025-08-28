"use client";
import React from "react";
import { usePathname } from "next/navigation";
export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      {reviewId}th review not found for {productId}th Product.
    </div>
  );
}
