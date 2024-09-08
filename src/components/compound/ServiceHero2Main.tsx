import React from 'react'
import { ServiceCompositeBondingType, ServiceHero2TextDesc } from '../../../types'
import ServiceHero2 from './ServiceHero2'


const ServiceHero2Main = ({ ServiceHeroTwoDesc }: { ServiceHeroTwoDesc: ServiceHero2TextDesc[] }) => {
  return (
    <div>
         {ServiceHeroTwoDesc.map((item, index) => (
            <ServiceHero2   key={index} {...item}/>
          ))}

        
    </div>
  )
}

export default ServiceHero2Main