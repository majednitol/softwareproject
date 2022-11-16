import React from 'react'
import Card from './Card'
import NavBar from './NavBar';
function HeroSection() {
  return (
    <div>
     
      <div className="nav-bar  " id='heroSection'>
        <div className='nav-color '>
        <div className="Container  text-white  " data-aos="fade-up"
     data-aos-duration="3000" >
          <div className="row ">
            <div className="col-lg-6 ml-5 textcontent">
              <h1 className='nav-content-text mb-3 mt-5'>Let us brightenyour smile!</h1>
              <p className='mb-5 '>We are dental care clinic that helps people to take care of their health and we have best dental doctors in here.</p>
              <div className="btn btn-primary btn-lg px-5 py-3">Learn more</div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
        </div>
        </div>
      



      <div className='allBox' >
        <div className="container ">
          <div className="row ">
            <div className="col-lg-4 bgcolor1 text-white " data-aos="zoom-in"><Card /></div>
            <div className="col-lg-4 bgcolor2 text-white" data-aos="zoom-in"><Card /></div>
                      <div className="col-lg-4 bgbox text-white" data-aos="zoom-in"><Card /></div>
                      
          </div>
        </div>
     </div>
    </div>
  )
}

export default HeroSection
