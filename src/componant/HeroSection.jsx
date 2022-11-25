import React from 'react'
import Card from './Card'
import NavBar from './NavBar';
import {Parallax} from 'react-parallax'
function HeroSection() {
  return (
    <div>

     
      <div className="nav-bar  " id='heroSection'>
        <div className='nav-color '>
          <div className="Container  text-white  " data-aos="fade-up"
            data-aos-duration="3000" >
            <div className="row ">
              <div className="col-lg-5 textcontent mt-5">
                <p className='nav-content-text mb-3 mt-5'>Let us brighten your smile!</p>
                <p className='mb-5 '>We are dental care clinic that helps people to take care of their health and we have best dental doctors in here.</p>
                <button className='tbtn'>Learn more</button>
              </div>
              <div className="col-lg-6 mt-5">
                <img src="./images/home-slider1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <br />
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 " data-aos="zoom-in"><Card /></div>
          <div className="col-lg-4" data-aos="zoom-in"><Card /></div>
          <div className="col-lg-4" data-aos="zoom-in"><Card /></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
