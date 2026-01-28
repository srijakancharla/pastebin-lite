import { getPaste } from "@/lib/kv";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const paste = getPaste(params.id);
  if (!paste) return Response.json({ error: "Not found" }, { status: 404 });
  return Response.json({ content: paste.content, createdAt: paste.createdAt });
}
