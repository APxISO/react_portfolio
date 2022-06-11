import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/avatarM2.png'

const Header = () => {
  return (
    <header>
      <section className="container header_container">
    <h5>Hey there, I'm </h5>
    <h1>Adam Perez</h1>
    <h5 className='text-light'>Fullstack Developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className='me'>
      <img src={ME} alt=''/>
    </div>
    <a href='#contact' className='scroll__down'>Scroll Down...</a>
      </section>

      </header>
  )
}

export default Header