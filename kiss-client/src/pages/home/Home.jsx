import React from 'react'
import { Header } from '../../components'
import { data } from '../../constants'

const Home = () => {
  return (
    <>
      <Header title={data.heroSection.title} />
      <div className='aspect-video p-8'>
          <iframe
            className='h-full w-full rounded-lg'
            src={data.heroSection.video_src}
            width="100%"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe>
      </div>
    </>
  )
}

export default Home