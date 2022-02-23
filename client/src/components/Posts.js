import React from 'react';
import Post from './Post';
import './Posts.css';

export default function Posts({posts}) {
    //console.log(`Inside POSTS code, props: ${posts}`);
    return (
        <div className="posts">
            {posts.map((p)=>(
                <Post key={p._id} post={p} />
            ))}
        </div>
    );
}
