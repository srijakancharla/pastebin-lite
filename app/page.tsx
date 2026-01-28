"use client";

import { useState } from "react";

export default function HomePage() {
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  const createPaste = async () => {
    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    const data = await res.json();
    setUrl(data.url);
  };

  return (
    <div>
      <h1>Pastebin Lite</h1>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <br />
      <button onClick={createPaste}>Create Paste</button>
      {url && (
        <div>
          <p>Paste created:</p>
          <a href={url}>{url}</a>
        </div>
      )}
    </div>
  );
}
