import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';
import BottomCards from '../components/BottomCards';
import Footer from '../components/Footer';
import './Blogs.css'

var header_title = 'Blog Posts';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data);
            //console.log(`Inside BLOG code, posts: ${posts}`);
        };
        fetchPosts();
    }, [search]);

    return (
        <section className='blogs'>
            <Header title={header_title} />
            <div className="blog-wrapper">
                <Posts posts={posts}/>
                <Sidebar />
            </div>

            <BottomCards />
            <Footer />
        </section>
    )
}
