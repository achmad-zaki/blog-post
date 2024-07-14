import { db } from "@/app/lib/db";
import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import PostCard from "@/components/PostCard";
import { FC } from "react";

interface IBlogDetailPageProps {
    params: {
        id: number
    }
}

const getPost = async (id: number) => {
    const response = await db.post.findUnique({
        where: {
            id: parseInt(id.toString())
        },
        select: {
            id: true,
            title: true,
            content: true,
            tag: true
        }
    })

    return response
}

const BlogDetailPage: FC<IBlogDetailPageProps> = async ({ params }) => {

    const postDetail = await getPost(params.id)

    console.log(postDetail)

    return (
        <div>
            <div className="mb-8">
                <BackButton />
                <h2 className="text-2xl font-bold my-4">{postDetail?.title}</h2>
                <ButtonAction />
            </div>
        </div>
    )
}

export default BlogDetailPage
