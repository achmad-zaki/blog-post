"use client"

import BackButton from "@/components/BackButton";
import FormPost from "@/components/FormPost";
import { TFormInput } from "@/types";
import { SubmitHandler } from "react-hook-form";

export default function CreatePage() {
    const handleCreatePost: SubmitHandler<TFormInput> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <BackButton />
            <h1 className="text-2xl my-4 font-bold text-center">Add new post</h1>
            <FormPost submit={handleCreatePost} />
        </div>
    )
}
