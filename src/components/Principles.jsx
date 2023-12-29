import React from 'react'
import Image from 'next/image'
import track from '../../public/images/track.svg'
const Principles = () => {
  return (
    <section className='my-20'>
      <div className="w-[80%] m-auto text-center">
        <h2 className="text-[40px] mb-10">Wissen Sie, wie beeindruckend eine makellose Reinigung sein kann? Dieses Erlebnis ist unser tägliches Bestreben.</h2>
        <Image src={track} alt="track" width={300} height={300} className=' w-full'/>
      </div>
    </section>
  )
}

export default Principles