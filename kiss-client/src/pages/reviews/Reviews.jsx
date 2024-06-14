import React from 'react'
import { Header } from '../../components'
import { data, images } from '../../constants'

const Reviews = () => {
  return (
    <>
      <Header title={data.reviewsSection.title} />
      <div className=' flex flex-col min-h-80'>
        <h1 className="text-lx text-center mt-8">
          Currently under construction!
        </h1>
        <img className="w-100 p-8" src={images.under_construction} alt="blog_img"></img>
      </div>
    </>
  )
}

export default Reviews