import React from 'react'
import { Card } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import image4 from '../images/carousel-image-1.jpg';
import image3 from '../images/carousel-image-2.jpg';
import image2 from '../images/carousel-image-3.jpg';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { Navigate, useNavigate } from "react-router-dom";

function Aboutus() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }


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
            </ul>
            <Link className="anchor mx-2" to="/subscription">Sign Up</Link>
            <button className="btn btn-primary mx-sm-3 mt-3 mt-sm-0 login-btn" onClick={handleClick}>
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

    </>

  );
}

export default Aboutus