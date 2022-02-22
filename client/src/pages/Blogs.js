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
            const url = `${process.env.REACT_APP_API_URL}/api/posts`;
            console.log(`Blogs: URL = ${url}`);
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts` + search);
            setPosts(res.data);
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
