import React from 'react'

function About() {
  return (
      <div>
           <div className="container mt-5" data-aos="fade-right" id='about'>
        <div className="row">
          <div className="col-lg-5">
            <h2>Choose Our Clinic, Choose The Best Care For Yourself and Your Family</h2>
            <div className="row">
              <div className="col-lg-6">
                <img src="./images/sign.png" alt="" />
              </div>
              <div className="col-lg-6">
                <h4>
                  Tom Henders
                </h4>
                <p>Head Dentist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <p className='text-muted' data-aos="fade-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div data-aos="fade-left" > It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <div className="btn btn-primary btn-lg my-5 "data-aos="fade-left">see our services</div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2>Our Values</h2>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className="col-lg-4"data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2>Quality</h2>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className="col-lg-4 "data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2>Health</h2>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>


        </div>
      </div>

      <div className="container-fluid my-5"data-aos="fade-up"
     data-aos-duration="3000">
        <div className="row">
          <div className="col-lg-12">
            <img className='chairImage img-fluid' src="./images/chair.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="container my-5" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="row">
          <div className="col-lg-2">
            <img src="images/04_img.png" alt="" height={50} width={150} />
          </div>
          <div className="col-lg-2">
            <img src="images/05_img.png" alt="" height={50} width={150} />
          </div><div className="col-lg-2">
            <img src="images/06_img.png" alt="" height={50} width={150} />
          </div><div className="col-lg-2">
            <img src="images/07_img.png" alt="" text-center height={50} width={150} />
          </div><div className="col-lg-2">
            <img src="images/04_img.png" text-center alt="" height={50} width={200} />
          </div>
          <div className="col-lg-2">
            <img src="images/04_img.png" text-center alt="" height={50} width={150} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About