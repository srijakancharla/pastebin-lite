"use client";

import { useState } from "react";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const createPaste = async () => {
    if (!content.trim()) return alert("Content cannot be empty");

    try {
      const res = await fetch("/api/pastes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) throw new Error("Failed to create paste");

      const data = await res.json();
      setUrl(data.url);
    } catch (err) {
      alert("Error creating paste: " + err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Pastebin Lite</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        cols={50}
        placeholder="Enter your text here"
      />
      <br />
      <button onClick={createPaste} style={{ marginTop: "1rem" }}>
        Create Paste
      </button>

      {url && (
        <div style={{ marginTop: "1rem" }}>
          Paste created: <a href={url}>{url}</a>
        </div>
      )}
    </div>
  );
}

    </div>
  );
}
