import { createPaste } from "@/lib/kv";

export async function POST(req: Request) {
  const body = await req.json();

  if (!body.content || typeof body.content !== "string") {
    return Response.json(
      { error: "content is required" },
      { status: 400 }
    );
  }

  const id = createPaste(body);
  return Response.json({
    id,
    url: `/p/${id}`
  });
}
