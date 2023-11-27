import React from 'react'
import { services } from '../data/ServicesData.js'
import Image from 'next/image.js'
export const Services = () => {

  return (
    <section className='my-20 '>
      <div className='w-[80%] mx-auto grid grid-cols-3 gap-10'>
        {services.map(service => (
          <div key={service.id} className='flex flex-col justify-center items-center p-2 shadow rounded-lg '>
            <Image src={service.img} alt={service.title} width={100} height={100}/>
            <h2 className='mt-2 text-lg font-semibold'>{service.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}
