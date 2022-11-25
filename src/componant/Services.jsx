import React from 'react'
import Box from './Service-Box'

function Services() {
  return (
      <div>
          <div className="container my-5" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500" id='services'>
        <div className="row">
          <div className="col-lg-4">
            <h2><b>We Promise an Excellent Dental Care and Provide These Services</b></h2>
            <p className='text-muted'>It has survived not only five centuries.</p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row text-center">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <h3 className='service'data-aos="fade-right"><b>Braces</b></h3>

              </div>
              <div className="col-lg-6" data-aos="fade-right">
                <b> <h3><i class="fa-solid fa-arrow-right service"></i></h3></b>

              </div>
            </div>
            <hr />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6"data-aos="fade-left">
                <h3 className='service'><b>Skin care</b></h3>
              </div>
              <div className="col-lg-6"data-aos="fade-left">
                <b> <h3><i class="fa-solid fa-arrow-right service"></i></h3></b>

              </div>
            </div>
            <hr />
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6"data-aos="fade-right">
                <h3 className='service'><b>Pediaric dentastry</b></h3>

              </div>
              <div className="col-lg-6  service" data-aos="fade-right">
                <b> <h3><i class="fa-solid fa-arrow-right"></i></h3></b>

              </div>
            </div>
            <hr />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-left">
                <h3 className='service'><b>Oral patology</b></h3>
              </div>
              <div className="col-lg-6"data-aos="fade-left">
                <b> <h3><i className="fa-solid fa-arrow-right service"></i></h3></b>

              </div>
            </div>
            <hr />
          </div>

        </div>
      </div> <div className="container ">
        <div className="row text-center ">
          <div className="col-lg-6">
            <div className="row ">
              <div className="col-lg-6">
                <h3 className='service' data-aos="fade-right"><b>Radiology</b></h3>

              </div>
              <div className="col-lg-6">
                <b> <h3><i className="fa-solid fa-arrow-right service"></i></h3></b>

              </div>
            </div>
            <hr />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-left">
                <h3 className='service' ><b>Orthodonthics</b></h3>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <b> <h3><i className="fa-solid fa-arrow-right service"></i></h3></b>

              </div>
            </div>
            <hr />
          </div>

        </div>
      </div>
   <div className="container">
        <div className="row">
          <div className="col-lg-3"data-aos="zoom-in"><Box/></div>
          <div className="col-lg-3 "data-aos="zoom-in"><Box/></div>
          <div className="col-lg-3"data-aos="zoom-in"><Box/></div>
          <div className="col-lg-3"data-aos="zoom-in"><Box/></div>
    </div>
   </div>
    </div>
  )
}

export default Services