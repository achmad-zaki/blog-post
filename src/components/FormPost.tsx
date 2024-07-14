"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { TFormInputPost } from "@/types"
import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";

interface IFormPostProps {
    submit: SubmitHandler<TFormInputPost>;
    isEditing?: boolean;
    isLoading?: boolean;
}

const FormPost: FC<IFormPostProps> = ({ submit, isEditing, isLoading }) => {
    const { register, handleSubmit } = useForm<TFormInputPost>()

    const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
        queryKey: ["tags"],
        queryFn: async () => {
            const response = await axios.get("/api/tags")

            return response?.data
        }
    })

    return (
        <form onSubmit={handleSubmit(submit)} className="card bg-neutral p-5 w-96 h-full mx-auto">
            <div className="form-control">
                <label htmlFor="title" className="label">Title</label>
                <input type="text" {...register("title", { required: true })} placeholder="Post title" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
                <label htmlFor="comment" className="label">Content</label>
                <textarea {...register("content", { required: true })} className="textarea textarea-bordered" placeholder="Post content ..."></textarea>
            </div>
            <div className="form-control">
                <label htmlFor="tag" className="label">Tag</label>
                {isLoadingTags ? (
                    <span className="loading loading-dots loading-md mx-auto"></span>
                ) : (
                    <select defaultValue={''} {...register("tagId", { required: true })} className="select select-bordered w-full">
                        <option disabled value={''}>Select tag</option>
                        {dataTags?.map((tag, index) => (
                            <option key={index} value={tag.id}>{tag.name}</option>
                        ))}
                    </select>
                )}
            </div>
            <button type="submit" className="btn btn-primary mt-8">
                {isLoading && <span className="loading loading-spinner loading-sm"></span>}
                {isEditing ? 'Update' : 'Create'}
            </button>
        </form>
    )
}

export default FormPost
