import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

const NEED_VALUES = ["website", "app", "miniprogram", "uniapp", "ai", "solution", "other"] as const;

/** POST：提交咨询表单，写入 Consultation 表 */
export async function POST(request: NextRequest) {
  let body: {
    name?: string;
    company?: string;
    need?: string;
    message?: string;
    contact?: string;
    position?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求体无效" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const contact = String(body.contact ?? "").trim();
  const need = String(body.need ?? "").trim();

  if (!name) return NextResponse.json({ error: "请填写姓名" }, { status: 400 });
  if (!contact) return NextResponse.json({ error: "请填写联系方式" }, { status: 400 });
  if (!need || !NEED_VALUES.includes(need as (typeof NEED_VALUES)[number])) {
    return NextResponse.json({ error: "请选择需求类型" }, { status: 400 });
  }

  const company = body.company != null ? String(body.company).trim() || null : null;
  const message = body.message != null ? String(body.message).trim() || null : null;
  const position = body.position != null ? String(body.position).trim() || null : null;

  try {
    const consultation = await prisma.consultation.create({
      data: {
        name,
        company,
        need,
        message,
        contact,
        position,
      },
    });
    return NextResponse.json({ id: consultation.id, message: "提交成功" });
  } catch (e) {
    console.error("Consultation create error:", e);
    return NextResponse.json(
      { error: "提交失败，请稍后再试" },
      { status: 500 }
    );
  }
}

/** GET：查询咨询列表（按创建时间倒序），用于后台或运营查看 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(Math.max(parseInt(searchParams.get("limit") ?? "50", 10), 1), 100);
  const offset = Math.max(parseInt(searchParams.get("offset") ?? "0", 10), 0);

  try {
    const [items, total] = await Promise.all([
      prisma.consultation.findMany({
        orderBy: { createdAt: "desc" },
        take: limit,
        skip: offset,
      }),
      prisma.consultation.count(),
    ]);
    return NextResponse.json({ items, total, limit, offset });
  } catch (e) {
    console.error("Consultation list error:", e);
    return NextResponse.json(
      { error: "查询失败" },
      { status: 500 }
    );
  }
}
