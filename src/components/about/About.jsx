import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h1>About Me</h1>
    <div className='container about__container'>
    <div className="about__me">
    <div className="about__me-image">
      <img src='' alt='About Image'/>
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
<small>300+ Worldwide</small>
  </article>
  <article className='about__card'>
<VscFolderLibrary className='about__icon'/>
<h5>Projects</h5>
<small>80+ Completed Projects</small>
  </article>
</div>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo dui, venenatis nec eros eget, mattis condimentum purus. Aenean tempus metus non lectus blandit hendrerit. Nulla ac porttitor lacus, in accumsan dui. Phasellus facilisis augue non nibh vehicula, at tempor arcu venenatis.
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk!</a>
</div>
    </div>
    </section>
  )
}

export default About