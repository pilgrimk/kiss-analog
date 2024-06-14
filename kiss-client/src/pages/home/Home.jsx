import React from 'react'
import { Header } from '../../components'
import { data } from '../../constants'

const Home = () => {
  return (
    <>
      <Header title={data.heroSection.title} />
      <div className="w-full flex flex-row justify-center items-center p-8">
        <div className="w-[450px] lg:w-[1000px] md:w-[750px]">
          <div className='w-full aspect-video'>
            <iframe
              className='w-full h-full rounded-lg'
              src={data.heroSection.video_src}
              width="100%"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home