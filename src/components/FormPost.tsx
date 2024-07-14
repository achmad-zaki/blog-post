"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { TFormInput } from "@/types"
import { FC } from "react";

interface IFormPostProps {
    submit: SubmitHandler<TFormInput>;
    isEditing?: boolean;
}

const FormPost: FC<IFormPostProps> = ({ submit, isEditing }) => {
    const { register, handleSubmit } = useForm<TFormInput>()

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
                <select defaultValue={''} {...register("tag", { required: true })} name="tag" className="select select-bordered w-full">
                    <option disabled value={''}>Who shot first?</option>
                    <option>javascript</option>
                    <option>php</option>
                    <option>python</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-8">
                {isEditing ? 'Update' : 'Create'}
            </button>
        </form>
    )
}

export default FormPost
