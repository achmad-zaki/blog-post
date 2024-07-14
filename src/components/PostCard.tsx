"use client"

import { Tag } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

interface IPostCardProps {
    post: {
        id: number;
        title: string;
        content: string;
        tag: Tag;
    }
}

const PostCard: FC<IPostCardProps> = ({ post }) => {
    const { id, title, content, tag } = post

    return (
        <div className="card bg-base-100 w-full shadow-xl border">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className={`badge ${tag.name === "javascript" ? "badge-warning" : tag.name === "php" ? "badge-primary" : "badge-accent"} badge-outline`}>{tag.name}</div>
                <div className="card-actions justify-end">
                    <Link href={`/blog/${id}`} className="btn btn-primary">Read more...</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
