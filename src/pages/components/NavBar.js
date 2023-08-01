import React from 'react'
import CustomLink from './CustomLink'

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <span className='text-xl font-bold uppercase select-none'>recupera</span>
      <nav className="flex items-center justify-center">
        <CustomLink href="/" title="Inicio" className="mr-4" />
      </nav>
    </header>
  )
}

export default NavBar
