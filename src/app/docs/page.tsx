import React from "react";

export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  console.log(slug);
  return <div>Docs Page</div>;
}
