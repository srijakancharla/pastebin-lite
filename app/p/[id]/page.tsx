import React from "react";

export default async function PastePage({ params }: { params: { id: string } }) {
  const res = await fetch(`/api/pastes/${params.id}`);
  if (!res.ok) return <h1>Paste not found or expired</h1>;

  const data = await res.json();

  return (
    <div>
      <h1>Paste ID: {params.id}</h1>
      <pre>{data.content}</pre>
    </div>
  );
}
