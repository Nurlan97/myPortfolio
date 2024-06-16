import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/SmartTale.png'
import IMG2 from '../../assets/cooksCorner.png'
import IMG3 from '../../assets/travelApp.png'
import IMG4 from '../../assets/registration.png'
import IMG5 from '../../assets/theMeal.png'
import IMG6 from '../../assets/todoList.png'
import IMG7 from '../../assets/online-shopping.png'
import IMG8 from '../../assets/stroyka-store.png'
import IMG9 from '../../assets/weather-app.png'
import IMG10 from '../../assets/interior_design.png'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Monitoring and management of garment manufacturing',
    github: 'https://github.com/Nurlan97/SmartTale',
    demo: 'https://neobis-smart-tale.vercel.app/#/equipment'
  },
  {
    id: 2,
    image: IMG2,
    title: 'A platform where chefs can share their recipes, users can subscribe to their favorite chefs, and discover a variety of delicious dishes',
    github: 'https://github.com/Nurlan97/Neobis-CooksCorner',
    demo: 'https://neobis-cooks-corner-gold.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Travel Application',
    github: 'https://github.com/Nurlan97/Travel-App-Neobis-',
    demo: 'https://travel-app-neobis.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Online Shopping Website with Shopping Cart Functionality',
    github: 'https://github.com/Nurlan97/neobis-front-auth',
    demo: 'https://neobis-front-auth-five.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'A recipe searching website',
    github: 'https://github.com/Nurlan97/neobis-front-themeal',
    demo: 'https://neobis-front-themeal-ten.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'A task organizer',
    github: 'https://github.com/Nurlan97/neobis-front-todoList-react',
    demo: 'https://neobis-front-todo-list-react-tau.vercel.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Online Shopping Website with Shopping Cart Functionality',
    github: 'https://github.com/Nurlan97/online-shopping',
    demo: 'https://online-shopping-nu.vercel.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'An online store for construction materials with a diverse range for building and renovation needs',
    github: 'https://github.com/Nurlan97/stroy',
    demo: 'https://stroyka-store-nu.vercel.app/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Weather Application',
    github: 'https://github.com',
    demo: 'https://weatherapp-kappa-nine.vercel.app/'
  },
  {
    id: 10,
    image: IMG10,
    title: 'Interior Design Website',
    github: 'https://github.com/Nurlan97/interior_design',
    demo: 'https://interior-design-nine.vercel.app/'
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  // }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                </div>
                
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio