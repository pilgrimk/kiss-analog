import React from 'react'

export default function Home() {
    return (
        <section className='content-container'>
            <h1>Kiss Analog</h1>
            <div className='iframe-container'>
                <iframe allowfullscreen='' title='home screen video' frameborder='0'
                    src='https://www.youtube.com/embed/videoseries?list=UUD5GUs2SVXDaqDo6WMtdsqw&amp;index=0'
                    allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' ></iframe>
            </div>
        </section>
    )
}