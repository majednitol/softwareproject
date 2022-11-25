import React from 'react'
import Testimonial from './Testimonial';
import Contact from './Contact';
import { Link } from 'react-scroll'
import '../App.css'
function NavBar() {
    return (
        <div className=" ">
            <nav class="navbar navbar-expand-lg  navbar-light bg-light fixed-">
                <div class="container-fluid pt-4 mb-4">
                    <a class="navbar-brand " href="##">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0 ">
                            <li class="nav-item pageItem mt-2 ">
                                <Link activeClass="active" to="" spy={true} smooth={true} offset={-50} duration={500} >
                                    Home
                                </Link>

                            </li>
                            <li className="nav-item pageItem mt-2">
                                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                                    About
                                </Link>

                            </li><li className="nav-item pageItem mt-2">
                                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-110} duration={500} >
                                    Services
                                </Link>

                            </li>
                            <li className="nav-item pageItem mt-2">
                                <Link activeClass="active" to="team" spy={true} smooth={true} offset={-0} duration={500} >
                                    Team
                                </Link>

                            </li>
                            <li className="nav-item pageItem mt-2">
                                <Link activeClass="active" to="testimonial" spy={true} smooth={true} offset={-50} duration={500} >
                                    Testimonial
                                </Link>

                            </li>
                            <li className="nav-item pageItem mt-2">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                                    Contact
                                </Link>

                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control mr-2 pb-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary px-4" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
