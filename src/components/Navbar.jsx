import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
          <h1 className="text-lg font-bold italic">Meghsss</h1>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
        <a href='https://www.linkedin.com/in/meghana-manchala-b622152ba/'
          target="_blank"
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
            <FaLinkedin/>
        </a>
        <a href='https://github.com/meghanamanchala'
          target="_blank"
          rel='noopener noreferrer'
          aria-label='GitHub'>
            <FaGithub/>
        </a>
        <a href='https://www.instagram.com/m__egha_na/'
          target="_blank"
          rel='noopener noreferrer'
          aria-label='Instagram'>
            <FaInstagram/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
