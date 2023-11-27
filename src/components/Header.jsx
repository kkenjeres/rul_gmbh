import React from 'react'
import Image from 'next/image'
import logo  from '../../public/images/logo.svg'
const Header = () => {
  return (
    <header className='py-4 min-w-full fixed top-0 bg-white shadow  '>
      <div className='w-[80%] h-full m-auto flex justify-between items-center'>
        <Image src={logo} width={60} height={60} alt='logo'/>
        <nav>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>Über uns</li>
            <li>Warum Uns</li>
            <li>Kontakt</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header