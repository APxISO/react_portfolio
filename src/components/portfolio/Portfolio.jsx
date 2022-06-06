import React from 'react'
import './portfolio.css'



const data = [

{
id: 1,
image: 'https://cdn.dribbble.com/users/1187002/screenshots/17428236/media/30c717c2e5e95c27788b501fb752b0f1.jpg?compress=1&resize=1200x900&vertical=top',
title: "",
github: 'https://github.com',
demo: 'https://dribbble.com/shots/17428236-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id: 2,
  image: 'https://cdn.dribbble.com/users/1187002/screenshots/17393929/media/7847b2a32905ee720a7097ce408674bc.jpg?compress=1&resize=1200x900&vertical=top',
  title: "",
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/17393929-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 3,
    image: 'https://cdn.dribbble.com/users/1187002/screenshots/17393923/media/d38ffaf935d63b1eff14beae06053756.jpg?compress=1&resize=1200x900&vertical=top',
    title: "",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17393923-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
      id: 4,
      image: 'https://cdn.dribbble.com/users/1187002/screenshots/17393884/media/32bf8ab4cf513afcfbfb92f0c44549df.png?compress=1&resize=1200x900&vertical=top',
      title: "",
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/17393884-Orion-UI-kit-Charts-templates-infographics-in-Figma'
     },
      {
        id: 5,
        image: 'https://cdn.dribbble.com/users/1187002/screenshots/17393868/media/fe02763b62c2fecd3df7a7bd49e871ac.png?compress=1&resize=1200x900&vertical=top',
        title: "",
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/17393868-Orion-UI-kit-Charts-templates-infographics-in-Figma'
        },
        {
          id: 6,
          image: 'https://cdn.dribbble.com/users/1187002/screenshots/17428282/media/0d5855f8b761e36da4537e18d75166ba.jpg?compress=1&resize=1200x900&vertical=top',
          title: "",
          github: 'https://github.com',
          demo: 'https://dribbble.com/shots/17428282-Orion-UI-kit-Charts-templates-infographics-in-Figma'
          },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
    {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
<div className='portfolio__item-img'>
<img src={image} alt={title}/>

  <h3>{title}</h3>
 <div className='portfolio__item-cta'>
 <a href={github} className='btn' target='_blank'>Github</a>
  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
</div>
    </article>


        )

      }  )

    }
    






      </div>




    </section>
  )
}

export default Portfolio