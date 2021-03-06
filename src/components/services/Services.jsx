import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
<h5> What I Offer</h5>
<h2>Development Services</h2>

<div className='container services__container'>
  <article className='service'>
<div className='service__head'>
<h3>UI/UX Design</h3>
</div>
<ul className='service__list'>
<li>
<BiCheck className='service__list-icon'/>
<p>User Centered</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>Data Driven</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>Mobile Responsive & Accessibility</p>
</li>
</ul>
  </article>

{/* END OF UX/UI CARD */}

  <article className='service'>
<div className='service__head'>
<h3>Web Development</h3>
</div>
<ul className='service__list'>
<li>
<BiCheck className='service__list-icon'/>
<p>Custom Built</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>Search Engine Optimization (SEO)</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>Custom Dashboard for Analytics</p>
</li>
</ul>
  </article>

{/* END OF WEB DEVELOPMENT CARD */}

  <article className='service'>
<div className='service__head'>
<h3>Content Marketing</h3>
</div>
<ul className='service__list'>
<li>
<BiCheck className='service__list-icon'/>
<p>Branding & Logo Design</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>Business Card Design</p>
</li>
<li>
<BiCheck className='service__list-icon'/>
<p>Blog Article Writing</p>
</li>
</ul>
  </article>

{/* END OF CONTENT CREATION CARD */}



  </div>  


    </section>
  )
}

export default Services