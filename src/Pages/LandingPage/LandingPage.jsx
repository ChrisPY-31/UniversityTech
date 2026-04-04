import React from 'react'
import { BannerMain} from '../../Components/LandingPage/BannerMain'
import Specializations from '../../Components/LandingPage/specializations'
import Testimonials from '../../Components/LandingPage/Testimonials'

const LandingPage= () => {
  return (
    <section className='w-[90%] mx-auto'>
        <BannerMain/>
        <Specializations/>
        <Testimonials/>
    </section>
  )
}

export default LandingPage