import React from 'react'
import { BannerMain} from '../../components/LandingPage/BannerMain'
import Specializations from '../../components/LandingPage/Specializations'
import Testimonials from '../../components/LandingPage/Testimonials'
import { Navigate } from '@/components/Navigate'

const LandingPage= () => {
  return (
    <section className='w-[90%] mx-auto'>
        <Navigate />
        <BannerMain/>
        <Specializations/>
        <Testimonials/>
    </section>
  )
}

export default LandingPage