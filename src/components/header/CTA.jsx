import React from 'react'
import CV from '../../assets/AdamPerez_Software_Engineer.pdf'

const CTA = () => {
  return (
    <div className='cta'>
<a href={CV} className='btn'>Download CV</a>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA