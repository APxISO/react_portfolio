import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/APSelfie-removebg.png'


const About = () => {
  return (
    <section id='about'>
    <h5>A Lil' Bit</h5>
    <h1>About Me</h1>
    <div className='container about__container'>
    <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt='About Image'/>
    </div>
    </div>
<div className="about__content">
<div className="about__cards">
  <article className='about__card'>
<FaAward className='about__icon'/>
<h5>Experience</h5>
<small>2+ Years Working</small>
  </article>
  <article className='about__card'>
<FiUsers className='about__icon'/>
<h5>Clients</h5>
<small>15+ Worldwide</small>
  </article>
  <article className='about__card'>
<VscFolderLibrary className='about__icon'/>
<h5>Projects</h5>
<small>25+ Completed Projects</small>
  </article>
</div>
<p>
A highly motivated Software Developer with experience in all facets of Full-Stack development including back end, front end, and databases. Skilled with object-oriented programming, parallel programming, developing, testing and debugging code, designing user interfaces, and solving challenging programming problems. A life-long learner, very enthusiastic about the process of producing real, useful, and maintainable applications to ensure optimal user experience..
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk!</a>
</div>
    </div>
    </section>
  )
}

export default About