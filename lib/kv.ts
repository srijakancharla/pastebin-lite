type Paste = {
  content: string;
  createdAt: number;
};

const store = new Map<string, Paste>();

export function createPaste(data: { content: string }) {
  const id = Math.random().toString(36).substring(2, 8);
  store.set(id, { content: data.content, createdAt: Date.now() });
  return id;
}

export function getPaste(id: string) {
  return store.get(id) || null;
}
