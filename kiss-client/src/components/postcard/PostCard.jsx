import React from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../../constants'
import shortid from 'shortid'

const PostCard = ({ post }) => {
    const navigate = useNavigate();

    const PF = `${import.meta.env.VITE_APP_API}images/`;
    // console.log(`Post URL: ${PF + post.photo}`);

    const handleViewPost = (post) => {
        navigate(`/post/${post.id}`, { state: { post } });
    }

    return (
        <div className="w-[385px] p-2 border-2 rounded-md">
            {post.photo ? (
                <img className="w-full h-[280px] rounded-md" src={images.default_blog} alt="blog_img"></img>
            ) : (
                <img className="w-full h-[280px] rounded-md" src={images.default_blog} alt="blog_img"></img>
            )}
            <div className="flex flex-col">
                <div className='w-full text-center text-2xl p-2'>
                    {post.title}
                </div>
                <hr />
                <div className="w-100 flex flex-row justify-between px-2 py-4">
                    <span className="italic font-serif font-bold">{post.username}</span>
                    <span className="italic">{new Date(post.createdAt).toDateString()}</span>
                </div>
            </div>
            <p className="line-clamp-5 px-2">
                {post.desc}
            </p>
            <button
                className="bg-accent-dark-500 hover:bg-accent-light-700
                        text-white my-4 p-4 rounded-lg w-full justify-center"
                onClick={() => handleViewPost(post)}>
                View Post
            </button>
        </div>
    )
}

export default PostCard