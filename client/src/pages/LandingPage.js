import React, { useState } from 'react'
import { Carousel, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function LandingPage() {

    const { user } = useSelector((state) => state.user);

    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#08e4ff' }}>
                <Link className="anchor mx-2" to="/mainPage">
                    Practo
                </Link>
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="anchor mx-2" to="/mainPage">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="anchor mx-2" to="/subscription">Subscription</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="anchor mx-2" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="anchor mx-2" to="/doctorForm">Apply as a doctor</Link>
                            </li>
                        </ul>
                        <Link className="anchor mx-2" to="/subscription">Sign Up</Link>
                        <button className="btn btn-primary mx-sm-3 mt-3 mt-sm-0 login-btn" onClick={handleClick}>
                            Login
                        </button>
                    </div>
                </div>
            </nav>

            <div class="row" style={{ width:"100%"}}>
                <div class="col-6">
                    <br />
                    <br />
                    <div className="d-flex justify-content-center">
                        <Carousel >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../images/carousel-image-1.jpg")}
                                    alt="First slide"
                                    style={{ maxHeight: "500px", maxWidth: "500px" }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../images/carousel-image-2.jpg")}
                                    alt="Second slide"
                                    style={{ maxHeight: "500px", maxWidth: "500px" }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={require("../images/carousel-image-3.jpg")}
                                    alt="Third slide"
                                    style={{ maxHeight: "500px", maxWidth: "500px" }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div class="col-6">
                    <div class="col-10 pt-5 my-6 d-flex flex-column align-items-center justify-content-center">
                        <div class="my-2 my-sm-0">
                            <p class="d-inline fs-1 text-primary fw-bolder">One Stop</p>
                            <p class="d-inline fs-1">&nbsp;For All Your Health Needs!!</p>
                        </div>
                        <div class="my-2 my-sm-0">
                            <p class="d-inline fs-5 text-primary fw-bold">Safeguard your future</p>
                            <p class="d-inline fs-5">&nbsp;with our curated health plans and world class service</p>
                        </div>
                        <div class="social-media-icons my- my-sm-0">
                            <img src={require("../images/icons8-facebook-500.png")}
                                alt="Facebook icon"
                                className="img-fluid"
                                style={{ maxHeight: "100px", maxWidth: "100px" }} />
                            <img src={require("../images/icons8-instagram-500.png")}
                                alt="Instagram icon"
                                className="img-fluid"
                                style={{ maxHeight: "100px", maxWidth: "100px" }} />
                            <img src={require("../images/icons8-twitter-500.png")}
                                alt="Twitter icon"
                                className="img-fluid"
                                style={{ maxHeight: "100px", maxWidth: "100px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <section id="team" className="section">
                <div className="container-fluid w-75 text-center">
                    <br />
                    <br />
                    <div className="row">
                        <div className="col">
                            <h1 id="servicestitle">Our Services <span></span></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 py-3 ">
                            <div className="card service-card">
                                <div className="card-body">
                                    <img src={require("../images/appointments.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                    <h3>Appointments</h3>
                                    <p>You can make doctor appointments using our tool. Manage and view the
                                        conversations anytime</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 py-3 ">
                            <div className="card service-card">
                                <div className="card-body">
                                    <img src={require("../images/videocall.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                    <h3>Video consultation</h3>
                                    <p>Connect with the highly talented doctors accross the globe and get your queries resolved
                                        within minutes</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 py-3 ">
                            <div className="card service-card">
                                <div className="card-body">
                                    <img src={require("../images/privacy.jpg")} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                                    <h3>Encrypted History</h3>
                                    <p>Your medical history is encrypted. Only you have the key to decrypt and share the data
                                        with doctors</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 py-3 ">
                            <div className="card service-card">
                                <div className="card-body">
                                    <img src={require("../images/search doctor.png")} alt="" className="img-fluid rounded-circle p-4 w-50 mb-3" />
                                    <h3>Search Doctors</h3>
                                    <p>You can search for doctors with different specialization and make an appointment with
                                        them</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <br />
            <br />
            <div class="container-fluid w-50  section">
                <h1 id="membership-title" class="col text-center">Our membership plans <span></span></h1>
                <ul class="nav nav-pills mb-3  flex-row justify-content-center" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-personal-plan-tab" data-bs-toggle="pill"
                            data-bs-target="#personal-plan" type="button" role="tab" aria-controls="pills-personal-plan"
                            aria-selected="true">Personal Plans</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-family-plan-tab" data-bs-toggle="pill" data-bs-target="#family-plan"
                            type="button" role="tab" aria-controls="pills-family-plan" aria-selected="false">Family
                            Plans</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="personal-plan" role="tabpanel"
                        aria-labelledby="personal-plan-tab">
                        <div class="row justify-content-evenly ">
                            <div class="membership card bronze my-3 col-12 col-sm-6">
                                <img src={require("../images/bronze.jpg")} class="card-img-top" alt="..." width="50px" height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">Bronze</h5>
                                    <p class="my-0"><span class="membership-price ">$5</span>/mo</p>
                                    <p>Billed Anually</p>
                                    <Link className="anchor mx-2" to="/subscription"><button type="button"
                                        class="btn btn-outline-primary w-100 py-2">Subscribe</button></Link>
                                </div>
                                <hr />
                                <div class="card-body">
                                    <ul>
                                        <li><img class="img-fluid"  />2 Appointments per
                                            month</li>
                                        <li><img class="img-fluid"  />Emergency services
                                        </li>
                                        <li><img class="img-fluid"  />Emergency
                                            Vaccinations</li>
                                        <li><img class="img-fluid"  />Free Monthly check
                                            ups</li>
                                        <li><img class="img-fluid"  />Acess to the
                                            healthboard</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="membership card gold my-3 col-12 col-sm-6">
                                <img src={require("../images/gold.jpg")} class="card-img-top" alt="..." width="50px" height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">Gold</h5>
                                    <p class="my-0"><span class="membership-price ">$10</span>/mo</p>
                                    <p>Billed Anually</p>
                                    <Link className="anchor mx-2" to="/subscription"><button type="button"
                                        class="btn btn-outline-primary w-100 py-2">Subscribe</button></Link>
                                </div>
                                <hr />
                                <div class="card-body">
                                    <ul>
                                        <li><img class="img-fluid"  />4 Appointments per
                                            month</li>
                                        <li><img class="img-fluid"  />Limited Insurance
                                            accepted</li>
                                        <li><img class="img-fluid"  />2+ Free video
                                            consultaion</li>
                                        <li><img class="img-fluid" />Free vaccinations
                                        </li>
                                        <li><img class="img-fluid"  />+All bronze perks
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="membership card diamond my-3 col-12 col-sm-6">
                                <img src={require("../images/diamond.jpg")} class="card-img-top" alt="..." width="50px" height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">Diamond</h5>
                                    <p class="my-0"><span class="membership-price ">$15</span>/mo</p>
                                    <p>Billed Anually</p>
                                    <a href="./subscribe.html"><button type="button"
                                        class="btn btn-outline-primary w-100 py-2">Subscribe</button></a>
                                </div>
                                <hr />
                                <div class="card-body">
                                    <ul>
                                        <li><img class="img-fluid"  />8 Appointments per
                                            month</li>
                                        <li><img class="img-fluid"  />All Insurance
                                            accepted</li>
                                        <li><img class="img-fluid"  />4+ Free video
                                            consultaion</li>
                                        <li><img class="img-fluid"  />Free Health alerts
                                        </li>
                                        <li><img class="img-fluid"  />+All Gold perks</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="membership card platinum my-3 col-12 col-sm-6">
                                <img src={require("../images/platinum.jpg")} class="card-img-top" alt="..." width="50px" height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">Platinum <span class="badge badge-primary">Popular</span></h5>
                                    <p class="my-0"><span class="membership-price ">$20</span>/mo</p>
                                    <p>Billed Anually</p>
                                    <Link className="anchor mx-2" to="/subscription"><button type="button"
                                        class="btn btn-outline-primary w-100 py-2">Subscribe</button></Link>
                                </div>
                                <hr />
                                <div class="card-body">
                                    <ul>
                                        <li><img class="img-fluid"  /> unlimited
                                            Appointments</li>
                                        <li><img class="img-fluid"  /> Free inhouse
                                            Insurance </li>
                                        <li><img class="img-fluid"  /> unlimited video
                                            consultaion</li>
                                        <li><img class="img-fluid"  /> Free Health alerts
                                        </li>
                                        <li><img class="img-fluid" /> +All Diamond perks
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="family-plan" role="tabpanel" aria-labelledby="family-plan-tab">
                        <div class="row justify-content-evenly">
                            <div class="membership card  col-12 col-sm-6">
                                <img src={require("../images/basic.jpg")} class="card-img-top" alt="..." width="50px" height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">Basic</h5>
                                    <p class="my-0"><span class="membership-price ">$5</span>/mo</p>
                                    <p>Billed Anually</p>
                                    <Link className="anchor mx-2" to="/subscription"><button type="button"
                                        class="btn btn-outline-primary w-100 py-2">Subscribe</button></Link>
                                </div>
                                <hr />
                                <div class="card-body">
                                    <ul>
                                        <li><img class="img-fluid"  /> 8 Appointments per
                                            month</li>
                                        <li><img class="img-fluid"  /> All Insurance
                                            accepted</li>
                                        <li><img class="img-fluid"  /> 4 + Free video
                                            consultaion</li>
                                        <li><img class="img-fluid"  /> Free Health alerts
                                        </li>
                                        <li><img class="img-fluid"  /> Free vaccinations
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="membership card  col-12 col-sm-6">
                                <img src={require("../images/premium.jpg")} class="card-img-top" alt="..." width="50px" height="200px" />
                                <div class="card-body">
                                    <h5 class="card-title">Premium</h5>
                                    <p class="my-0"><span class="membership-price ">$10</span>/mo</p>
                                    <p>Billed Anually</p>
                                    <Link className="anchor mx-2" to="/subscription"><button type="button"
                                        class="btn btn-outline-primary w-100 py-2">Subscribe</button></Link>
                                </div>
                                <hr />
                                <div class="card-body">
                                    <ul>
                                        <li><img class="img-fluid"  /> unlimited
                                            Appointments</li>
                                        <li><img class="img-fluid"  /> Free inhouse
                                            Insurance </li>
                                        <li><img class="img-fluid"  /> unlimited video
                                            consultaion</li>
                                        <li><img class="img-fluid"  /> Free Health alerts
                                        </li>
                                        <li><img class="img-fluid"  /> Free vaccinations
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div class="container-fluid w-75 section" id="faq-block">
                <h1 id="faqtitle" class="col">Frequently Asked Questions <span></span></h1>
                <div class="row align-items-end justify-content-between">
                    <div class="accordion col-lg-6" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is Practo?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Practo is the distribution of health-related services and information via electronic
                                    information and telecommunication technologies. It allows long-distance patient and
                                    clinician contact, care, advice, reminders, education, intervention, monitoring, and remote
                                    admissions
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How is it different from other healthcare platforms?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Unlike many other platforms, the patient history in our platform is completely encrypted.
                                    As a customer you have the right to share your medical history with the
                                    doctors or hospitals as and when required. You need to use your 5 digit secure pin to
                                    decrypt the data and send it to the doctor during the appointment. and the doctor or
                                    hospital can access your history only during the appointment window time.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do you offer free vaccinations?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    We offer free vaccinations to customers who subscribed to our diamond and platinum plans. We
                                    give priority vaccinations to our customers so that they don't have to lookout for
                                    vaccinations
                                    elsewhere. Additionally, we offer vaccinations to customers family on a discounted price.
                                    Vaccinations include all seasonal vaccines likes flu shots, Mandatory vaccines like MMR,
                                    Tdap,
                                    Hepatitis,..etc, and emergency vaccination are offered on a priotity
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Are there any students discounts?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                    classes control the overall appearance, as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with custom CSS or overriding our default variables.
                                    It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Do you accept third party health insurance?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                                    collapse plugin adds the appropriate classes that we use to style each element. These
                                    classes control the overall appearance, as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with custom CSS or overriding our default variables.
                                    It's also worth noting that just about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="faqimg col-5 align-self-center d-none d-lg-block">
                        <img class="img-fluid mx-auto d-block" src={require("../images/FAQ.png")} alt="FAQ" />
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <div className="row container-fluid justify-content-evenly mt-9" id="footer">
                <div className="col-lg-3">
                    <h2 className="navbar-brand">Practo</h2>
                    <hr />
                    <p>Practo is the distribution of health-related services and information via electronic
                        information and telecommunication technologies. It allows long-distance patient and
                        clinician contact, care, advice, reminders, education, intervention, monitoring, and remote
                        admissions</p>
                </div>
                <div className="col-lg-2">
                    <h2>Subscriptions</h2>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item">Personal Plan
                            <br />
                            <ul className="list-group">
                                <li className="list-group-item " ><Link className="anchor mx-2" to="/subscription">Bronze</Link></li>
                                <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Gold</Link></li>
                                <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Diamond</Link></li>
                                <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Platinum</Link></li>
                            </ul>
                        </li>
                        <li className="list-group-item">Family Plan
                            <ul className="list-group">
                                <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Basic</Link></li>
                                <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Premium</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <h2>Useful Links</h2>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item"><Link className="anchor mx-2" to="/mainPage">Home</Link></li>
                        <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Subscribe</Link></li>
                        <li className="list-group-item"><Link className="anchor mx-2" to="/aboutus">About Us</Link></li>
                        <li className="list-group-item"><Link className="#">Enroll as a Doctor</Link></li>
                        <li className="list-group-item"><Link className="anchor mx-2" to="/login">Login</Link></li>
                        <li className="list-group-item"><Link className="anchor mx-2" to="/subscription">Signup</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h2>Subscribe to our Newsletter</h2>
                    <hr />
                    <form id="newsletter-form">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address &nbsp;
                                <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top"
                                    title="We'll never share your email with anyone else. Email is only used for sending brand new information about our tools and services">
                                    ?
                                </button>
                            </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                pattern="^[a-zA-Z0-9]+@\\w+.\\w{1,3}$" required />

                        </div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#submit-button">
                            Submit
                        </button>
                        <div className="modal fade" id="submit-button" tabIndex="-1" aria-labelledby="submit-buttonLabel"
                            aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="submit-buttonLabel">News letter</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Successfully subscribed to our news letter.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>


    );
}

export default LandingPage