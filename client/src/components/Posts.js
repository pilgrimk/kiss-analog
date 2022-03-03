import React, { useState } from 'react';
import Post from './Post';
import Pagination from './Pagination';
import './Posts.css';

export default function Posts({ posts }) {
    //console.log(`Inside POSTS code, props: ${posts}`);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="posts">
                {currentPosts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate} />
        </div>
    );
}
