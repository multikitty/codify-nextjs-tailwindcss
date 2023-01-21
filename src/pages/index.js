import BlogCard from '@/components/BlogCard'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Stats from '@/components/Stats'
import React from 'react'

const index = () => {
  return (
    <div className=' mx-auto'>
      {/* <Navbar /> */}
      <div className='py-32 h-screen justify-center items-center bg-gray-900' id='home'>
        <Hero />
      </div>
      <div className='mt-20'>
        <Stats />
      </div>
      <div className='mt-20 max-w-screen-xl px-4 mx-auto  ' id='blogs' >
        <BlogCard />
      </div>

      <div className='mt-20' id='price'>
        <Pricing />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default index