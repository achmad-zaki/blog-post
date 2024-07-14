import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        if (!body.title || !body.content || !body.tagId) {
            return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
        }

        console.log(body)

        const post = await db.post.create({
            data: {
                title: body.title,
                content: body.content,
                tagId: body.tagId
            }
        })

        return NextResponse.json(post, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}