import React from 'react'
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import BottomCards from '../components/BottomCards';
import Footer from '../components/Footer';
import './Blogs.css'

var header_title = "Blog Posts"

export default function Blog() {
    return (
        <section className='blogs'>
            <Header title={header_title} />
            <div className="blog-wrapper">
                <Posts />
                <Sidebar />
            </div>


            <BottomCards />
            <Footer />
        </section>
    )
}
