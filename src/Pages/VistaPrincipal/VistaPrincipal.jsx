import React from 'react'
import { BannerPrincipal } from '../../Components/VistaPrincipal/BannerPrincipal'
import Especializaciones from '../../Components/VistaPrincipal/Especializaciones'
import CasosExito from '../../Components/VistaPrincipal/CasosExito'

const VistaPrincipal = () => {
  return (
    <section className='w-[90%] mx-auto'>
        <BannerPrincipal/>
        <Especializaciones/>
        <CasosExito/>
    </section>
  )
}

export default VistaPrincipal