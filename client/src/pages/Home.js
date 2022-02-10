import React from 'react'
import Header from '../components/Header'
import BottomCards from '../components/BottomCards';
import Footer from '../components/Footer';
import './Home.css'

var header_title = "Kiss Analog"
var iframe_src = 'https://www.youtube.com/embed/videoseries?list=UUD5GUs2SVXDaqDo6WMtdsqw&amp;index=0'

export default function Home() {
    return (
        <section className='home'>
            <Header title={header_title} />
            <div className='iframe-container'>
                <iframe allowFullScreen='' title='home screen video' frameBorder='0'
                    src={iframe_src}
                    allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' ></iframe>
            </div>


            <BottomCards />
            <Footer />
        </section>
    )
}