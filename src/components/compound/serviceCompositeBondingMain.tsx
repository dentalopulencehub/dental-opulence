import React from 'react'
import { ServiceCompositeBondingType } from '../../../types'
import ServiceCompositeBonding from './ServiceCompositeBonding'

const ServiceCompositeBondingMain = ({ service_compositeBonding }: { service_compositeBonding: ServiceCompositeBondingType[] }) => {
  return (
    <div>
         {service_compositeBonding.map((item, index) => (
            <ServiceCompositeBonding   key={index} {...item}/>
          ))}

        
    </div>
  )
}

export default ServiceCompositeBondingMain