import React from 'react'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <div className="container my-5" id='contact'>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Any Questions? Contact us Freely and We'll Get Back to You Shortly</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                    </div>
                </div>
            </div>
            <form action="">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <input type="search" className='form-control py-3 ' placeholder='Name' />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <input type="search" className='form-control py-3' placeholder='Name' />
                        </div>
                    </div>

                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <input type="search" className='form-control py-3' placeholder='Name' />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <input type="search" className='form-control py-3' placeholder='Name' />
                        </div>
                    </div>
                    <div className="btn btn-primary my-5 btn-lg" data-aos="fade-right">Submit</div>
                </div>

            </form>
<Footer/>
        </>
    )
}

export default Contact