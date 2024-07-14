"use client"

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { TFormInputPost } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SubmitHandler } from "react-hook-form";

const CreatePage = () => {
    const { mutate: mutateCreatePost, isPending: isPendingCreatePost } = useMutation({
        mutationKey: ["create-post"],
        mutationFn: (newPost: TFormInputPost) => {
            return axios.post("/api/posts/create", newPost)
        },
        onSuccess: () => {
            alert("Post created successfully")
        },
        onError: () => {
            alert("Something went wrong")
        }
    })

    const handleCreatePost: SubmitHandler<TFormInputPost> = (data) => {
        mutateCreatePost(data)
    }

    return (
        <div>
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
            <FormPost
                isLoading={isPendingCreatePost}
                submit={handleCreatePost}
            />
        </div>
    )
}

export default CreatePage
