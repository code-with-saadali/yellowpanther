import React from 'react'
import Hero from './_components/Hero'
import ServiceTabs from './_components/ServiceTabs'
import ProcessSteps from './_components/ProcessSteps'

const page = () => {
  return (
    <div>
        <Hero/>
        <ServiceTabs/>
        <ProcessSteps/>
    </div>
  )
}

export default page