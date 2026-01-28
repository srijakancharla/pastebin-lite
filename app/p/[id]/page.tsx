"use client";

import { useEffect, useState } from "react";

export default function ViewPaste({ params }: { params: { id: string } }) {
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPaste = async () => {
      try {
        const res = await fetch(`/api/pastes/${params.id}`);
        if (!res.ok) throw new Error("Paste not found or expired");
        const data = await res.json();
        setContent(data.content);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchPaste();
  }, [params.id]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {content && (
        <>
          <h2>Paste Content</h2>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              whiteSpace: "pre-wrap",
            }}
          >
            {content}
          </pre>
        </>
      )}
    </div>
  );
}
