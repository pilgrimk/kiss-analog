import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import img_src_value from '../img/pexels-pixabay-414860.jpg';

export default function Post({post}) {
    const PF = `${process.env.REACT_APP_API_URL}/images/`;

    console.log(`Post URL: ${PF + post.photo}`);

    return (
        <div className="post">
            {post.photo? (
                <img className="post-img" src={PF + post.photo} alt=""></img>
            ) : (
                <img className="post-img" src={img_src_value} alt=""></img>
            )}
            <div className="post-info">
                <div className="post-cats">
                    {post.categories.map((c)=>(
                        <span className="link post-cat">{c.name}</span>
                    ))}
                </div>
                <Link className='link post-title' to={`/post/${post._id}`}>{post.title}</Link>
                <hr />
                <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="post-desc">
                {post.desc}
            </p>
        </div>
    )
}
