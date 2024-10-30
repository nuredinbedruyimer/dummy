import React, { useState } from 'react';
import { usePostStore } from '../store/post_store';

const PostCreate = () => {

    const {createPost}= usePostStore()
    const [form, setForm] = useState({
        userId: "", 
        title: "", 
        body: ""
    });

    const handleSubmit = async(event) => {
        event.preventDefault(); 
        await createPost(form)
    };

    const handleChange = (event) => {
        setForm((state) => ({
            ...state, 
            [event.target.name]: event.target.value
        }));
    };

    return (
        <div className="space-y-12 min-w-md flex flex-col justify-center items-center min-h-screen">
            <form className="space-y-12" onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <textarea name="title" onChange={handleChange} />
                </div>
                <div>
                    <label>Body: </label>
                    <textarea name="body" onChange={handleChange} />
                </div>
                <div>
                    <label>User Id: </label>
                    <input name="userId" onChange={handleChange} />
                </div>
                <button type="submit" className="px-4 py-2 bg-lime-500">Create Post</button>
            </form>
        </div>
    );
};

export default PostCreate;
