import { createPaste } from "@/lib/kv";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.content || typeof body.content !== "string") {
    return Response.json({ error: "Invalid content" }, { status: 400 });
  }

  const id = createPaste({ content: body.content });
  return Response.json({ id, url: `/p/${id}` });
}
