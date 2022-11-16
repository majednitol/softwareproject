import React from 'react'

function Team() {
  return (
      <div>
           <div className="container" id='team'>
        <div className="row">
          <div className="col-lg-4 my-5">
            <h2><b>We are Dental Healthcare Professionals</b></h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 " data-aos="fade-up"
     data-aos-duration="3000">
            <img src="./images/09_img.jpg" width={438} height={482} alt="" />
            <p className='my-4'>Head Doctor</p>
            <h3>Tom Henders</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
          </div>
          <div className="col-lg-4 " data-aos="fade-up"
     data-aos-duration="3000">
            <img src="./images/10_img.jpg" width={438} height={482} alt="" />
            <p className='my-4'>Head Doctor</p>
            <h3>Tom Henders</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
          </div>  <div className="col-lg-4 "data-aos="fade-up"
     data-aos-duration="3000">
            <img src="./images/11_img.jpg" width={438} height={482} alt="" />
            <p className='my-4'>Head Doctor</p>
            <h3 >Tom Henders</h3>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Team