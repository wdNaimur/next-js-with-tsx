import React from "react";

export default async function Doc({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length == 2) {
    return (
      <div>
        Viewing Docs for feature {slug[0]} and concept of {slug[1]}
      </div>
    );
  }
  if (slug?.length == 1) {
    return <div>Viewing All Docs of {slug[0]}</div>;
  }
  return <div>Doc Details Page {...slug}</div>;
}
