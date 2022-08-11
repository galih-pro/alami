import React from 'react'
import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
import './Home.css'

function Home() {
return (
<>
  <Navbar />
  {/* <Sidebar /> */}
  <main>
    {/* first section */}
    <section className='__main'>
      <div className='__hero'>
        <div className='__hero-content'>
          <p className='__hero-tagline __txt-tagline'>Catering should be an experience</p>
          <h1 className='__hero-title __txt-title'>We use only the finest and freshest ingredients</h1>
          <p className='__hero-para __txt-para'>At Sway catering we know that food is an important part of life.<br />
            If the meal is not perfect, your event cannot be perfect.</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className='__btn __hero-btn' >
          Request a Quote<span
              className="material-symbols-outlined">navigate_next</span>
          </a>
        </div>
      </div>
      <div className='__about'>
        <p className='__about-tagline __txt-tagline'>Catering services in New York</p>
        <h2 className='__about-title __txt-title-2'>We specialize in corporate and private events</h2>
        <p className='__about-para __txt-para'>With 20 years of experience, we promise you the freshest, local
          ingredients, hand-crafted cooking sprinkled with our unique whimsical elegance and exceptional services.</p>
      </div>
    </section>
    {/* second section */}
    <section className='__second'>
      <div className='__portfolio'>
        <div className='__portfolio-head'>
          <h1>My Portfolio</h1>
        </div>
        <div className='__portfolio-grid'>
          <div className='__grid'>
            <div className='__grid-icon'>
              <span className="material-symbols-outlined">view_in_ar</span>
            </div>
            <h2 className='__grid-title __txt-title-3'>Design</h2>
            <p className='__grid-para'>A full stack all around designer that may or may not include a guide for specific creative people </p>
          </div>
          <div className='__grid'>
            <div className='__grid-icon'>
              <span className="material-symbols-outlined">keyboard_command_key</span>
            </div>
            <h2 className='__grid-title __txt-title-3'>Develop</h2>
            <p className='__grid-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed ullamcorper risus.</p>
          </div>
          <div className='__grid'>
            <div className='__grid-icon'>
              <span className="material-symbols-outlined">history_edu</span>
            </div>
            <h2 className='__grid-title __txt-title-3'>Write</h2>
            <p className='__grid-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed ullamcorper risus.</p>
          </div>
          <div className='__grid'>
            <div className='__grid-icon'>
              <span className="material-symbols-outlined">thumb_up</span>
            </div>
            <h2 className='__grid-title __txt-title-3'>Promote</h2>
            <p className='__grid-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed ullamcorper risus.</p>
          </div>
        </div>
        <div className='__portfolio-service'>
          <h2 className='__service-title __txt-title-3'>Services</h2>
          <p className='__service-para __txt-para-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula nulla, suscipit vitae sagittis sit amet,
            aliquam eu augue.</p>
          <p className='__service-para'>Morbi sed facilisis metus. Vivamus porta felis ut nibh consectetur, pellentesque laoreet dolor ornare.
            Morbi lectus velit, pulvinar dictum purus nec, ultricies malesuada arcu.</p>
          <p className='__service-para'>Sed malesuada eget risus a sollicitudin. Praesent semper lectus sit amet volutpat posuere. In fringilla non
            erat gravida interdum. Morbi bibendum gravida sodales. In laoreet leo eu odio bibendum iaculis.</p>
          <div className='__service-util'>
            <a href="#" target="_blank" rel="noopener noreferrer" className='__btn __service-link'>Download CV</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className='__btn __service-link'>Check My Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</>
)
}

export default Home