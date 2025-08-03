import React from 'react'
import Hero from './_components/Hero'
import About from './_components/About'
import GiveUsAScratch from '../_components/GiveUsAScratch'

const page = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <GiveUsAScratch/>
    </div>
  )
}

export default page