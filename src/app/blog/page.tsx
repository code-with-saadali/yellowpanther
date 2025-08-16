import React from 'react'
import Hero from './_components/Hero'
import Blog from './_components/Blog'
import BlogCard from './_components/BlogCard'
import GiveUsAScratch from '../_components/GiveUsAScratch'


const page = () => {
  return (
    <div>
        <Hero/>
        <Blog/>
        <BlogCard/>
        <GiveUsAScratch/>
    </div>
  )
}

export default page