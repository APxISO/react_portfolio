import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
<h5>Reviews From Clients</h5>
<h2>Testimonials</h2>
<div className="container testimonials__container">
  <article className='testimonial'>
<div className="client__avatar">
  <img src={avatar1} alt='avatar1'/>
  <h5 className='client__name'>Client 1</h5>
  <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa molestiae. Quisquam eveniet sit deserunt ex vel vero tempora aperiam. Molestias, officiis voluptatibus. Et dolorum assumenda ea laudantium corrupti. Reprehenderit!</small>
</div>
  </article>
  <article className='testimonial'>
<div className="client__avatar">
  <img src={avatar2} alt='avatar2'/>
  <h5 className='client__name'>Client 1</h5>
  <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa molestiae. Quisquam eveniet sit deserunt ex vel vero tempora aperiam. Molestias, officiis voluptatibus. Et dolorum assumenda ea laudantium corrupti. Reprehenderit!</small>
</div>
  </article>
  <article className='testimonial'>
<div className="client__avatar">
  <img src={avatar1} alt='avatar1'/>
  <h5 className='client__name'>Client 1</h5>
  <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa molestiae. Quisquam eveniet sit deserunt ex vel vero tempora aperiam. Molestias, officiis voluptatibus. Et dolorum assumenda ea laudantium corrupti. Reprehenderit!</small>
</div>
  </article>
  <article className='testimonial'>
<div className="client__avatar">
  <img src={avatar2} alt='avatar2'/>
  <h5 className='client__name'>Client 1</h5>
  <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa molestiae. Quisquam eveniet sit deserunt ex vel vero tempora aperiam. Molestias, officiis voluptatibus. Et dolorum assumenda ea laudantium corrupti. Reprehenderit!</small>
</div>
  </article>
</div>



    </section>
  )
}

export default Testimonials