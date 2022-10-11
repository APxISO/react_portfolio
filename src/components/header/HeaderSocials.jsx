import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
<a href='https://www.linkedin.com/in/adamperezdev/' target='-blank'><BsLinkedin/></a>
<a href='https://github.com/APxISO' target='-blank'><BsGithub/></a>
<a href='https://www.Dribble.com/' target='-blank'><BsYoutube/></a>


    </div>
  )
}

export default HeaderSocials