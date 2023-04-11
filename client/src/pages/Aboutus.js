import React from 'react'
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import image4 from '../images/carousel-image-1.jpg';
import image3 from '../images/carousel-image-2.jpg';
import image2 from '../images/carousel-image-3.jpg';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LandingPage from './LandingPage';

function Aboutus() {
  let cardItems = [
    {
      description: " Practo is an online health platform that connects patients with doctors and healthcare providers. With Practo, patients can book appointments with doctors, view doctor profiles, read patient reviews, and get information about the healthcare facilities available in their area. Practo also offers online services, allowing patients to consult with doctors from the comfort of their own homes. Overall, Practo aims to make healthcare more accessible and convenient for patients.",
      image: image2,
      cardColor: "Info"
    },
    {
      description: "Practo's platform is designed to make it easy for patients to find and book appointments with doctors. It offers a comprehensive database of doctors and healthcare providers, with detailed profiles that include their qualifications, specialties, and experience. Patients can also read reviews from other patients to help them make informed decisions about their healthcare.",
      image: image4,
      cardColor: "Info",
    },
    {
      description: "We invite you to step into our beautiful coffee shop, where modern and old-world charm come together. Our cozy atmosphere and welcoming staff create a warm and inviting ambiance that is perfect for catching up with friends, meeting new people, or enjoying some alone time. Our commitment to quality and attention to detail are evident in every cup of coffee we serve. We believe that coffee is best enjoyed with good company, and we welcome you to come and share a cup with us. Whether you're here to work, read, or simply relax, we invite you to come and experience the joy of coffee in our charming and modern yet old-looking coffee shop.",
      image: image3,
      cardColor: "Info"
    },
    {
      description: "Practo is a healthcare technology company that provides an online platform for patients to book appointments with doctors, order medicines, and access healthcare information. While Practo does not employ doctors directly, it partners with doctors and healthcare providers to offer its services. The skills that make Practo different from its competition are its user-friendly platform, comprehensive database of doctors and healthcare providers, and its focus on providing high-quality healthcare services to patients.",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11795.94431540991!2d-71.08470526202504!3d42.3428201670069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spracto%20health%20boston%20google!5e0!3m2!1sen!2sus!4v1682031599577!5m2!1sen!2sus",
      cardColor: "Info"
    }
  ]

  let cardDom = cardItems.map((e, i) => {
    return (

      <Card
        bg={e.cardColor.toLowerCase()}
        key={e + i}
        text={e.cardColor.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: "70%", marginLeft: "15%" }}
        className="mb-2"
      >

        <br></br>
        {e.image ? <Card.Img variant="top" src={e.image} /> : <iframe src={e.iframeSrc} width="100%" height="500px"></iframe>}
        <Card.Body>
          <Card.Text>
            {e.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  })
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#08e4ff' }}>
        <a href="#" className="navbar-brand mx-5">
          Practo
        </a>
        <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link navactive" href="/mainPage">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/subscription">Subscription</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">About Us</a>
              </li>
            </ul>
            <a className="nav-link p-sm-2" href="/subscription">Sign Up</a>
            <button className="btn btn-primary mx-sm-3 mt-3 mt-sm-0 login-btn">
              Login
            </button>
          </div>
        </div>
      </nav>

      {cardDom}

      <div>
        <br />
        <br />
        <br />
        <div class="row container-fluid justify-content-evenly mt-9" id="footer">
          <div class="col-lg-3">
            <h2 class="navbar-brand">Practo</h2>
            <hr />
            <p>Practo is the distribution of health-related services and information via electronic
              information and telecommunication technologies. It allows long-distance patient and
              clinician contact, care, advice, reminders, education, intervention, monitoring, and remote
              admissions</p>
          </div>
          <div class="col-lg-2">
            <h2>Subscriptions</h2>
            <hr />
            <ul class="list-group">
              <li class="list-group-item">Personal Plan
                <br />
                <ul class="list-group">
                  <li class="list-group-item " ><a href="./subscribe.html">Bronze</a></li>
                  <li class="list-group-item"><a href="./subscribe.html">Gold</a></li>
                  <li class="list-group-item"><a href="./subscribe.html">Diamond</a></li>
                  <li class="list-group-item"><a href="./subscribe.html">Platinum</a></li>
                </ul>
              </li>
              <li class="list-group-item">Family Plan
                <ul class="list-group">
                  <li class="list-group-item"><a href="./subscribe.html">Basic</a></li>
                  <li class="list-group-item"><a href="./subscribe.html">Premium</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h2>Useful Links</h2>
            <hr />
            <ul class="list-group">
              <li class="list-group-item"><a href="./index.html">Home</a></li>
              <li class="list-group-item"><a href="./subscribe.html">Subscribe</a></li>
              <li class="list-group-item"><a href="#">Contact Us</a></li>
              <li class="list-group-item"><a href="#">Enroll as a Doctor</a></li>
              <li class="list-group-item"><a href="#">Login</a></li>
              <li class="list-group-item"><a href="#">Signup</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h2>Subscribe to our Newsletter</h2>
            <hr />
            <form id="newsletter-form">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address &nbsp;
                  <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top"
                    title="We'll never share your email with anyone else. Email is only used for sending brand new information about our tools and services">
                    ?
                  </button>
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  pattern="^[a-zA-Z0-9]+@\\w+.\\w{1,3}$" required />

              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#submit-button">
                Submit
              </button>
              <div class="modal fade" id="submit-button" tabindex="-1" aria-labelledby="submit-buttonLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="submit-buttonLabel">News letter</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Successfully subscribed to our news letter.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>

    </>

  );
}

export default Aboutus