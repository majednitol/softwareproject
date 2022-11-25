import React, { useState, useEffect } from 'react'
import Footer from './Footer'

function Contact() {
    const [count, setCount] = useState(0)

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        question: '',
    })


    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const submitHandler = (e) => {
        //    alert("name : "+username+" Email : "+email+" Phone number : "+phone+" question : "+question)
        console.log(formData)

    }


    const validation = (e) => {

        if (username === "" || email === "" || phone === "" || question === "") {
            alert("Please fill up all text field")
            e.preventDefault()
        }

        else {
            e.preventDefault()
            submitHandler()
            setCount(count + 1)
        }

    }
    useEffect(() => {
        document.title = "Form submitted " + count + " times"
    }, [count])
    const { username, email, phone, question } = formData
    return (
        <>
            <div className="container my-5" id='contact'>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Any Questions? Contact us Freely and We'll Get Back to You Shortly</h2>
                        <p>At vero eos et accusamus et gusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                    </div>
                </div>
            </div>
            <form action="" onSubmit={validation}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <input type="email" className='form-control py-3 ' placeholder=' Enter valid Email address'
                                name='email' value={email} onChange={changeHandler}
                            />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <input type="text" className='form-control py-3' placeholder=' Please Enter Name' name='username' value={username} onChange={changeHandler} />
                        </div>
                    </div>

                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <input type="number" className='form-control py-3' placeholder='+880'
                                name='phone'
                                value={phone} onChange={changeHandler} />
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <input type="text" className='form-control py-3' placeholder='What do you want to know ?' name='question' value={question} onChange={changeHandler} />
                        </div>
                    </div>
                    <div >
                        <button className="btn  btn-primary my-5 btn-lg   " data-aos="fade-right">Submit</button>
                    </div>
                </div>

            </form>
            <Footer />
        </>
    )
}

export default Contact