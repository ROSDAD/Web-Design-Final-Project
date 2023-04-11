import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Subscription() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(false);



    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);

    const [phone, setPhone] = useState("");
    const [valid, setValid] = useState(false);


    const [address1, setAddress1] = useState("");
    const [address1Valid, setAddress1Valid] = useState(false);

    const [formData, setFormData] = useState({});

    function handleAddress1Change(event) {
        const value = event.target.value;
        setAddress1(value);

        if (value.trim().length > 0) {
            setAddress1Valid(true);
        } else {
            setAddress1Valid(false);
        }
    }

    const [zipcode, setZipcode] = useState('');
    const [zipcodeValid, setZipcodeValid] = useState(false);

    const handleZipcodeChange = (event) => {
        const newZipcode = event.target.value;
        setZipcode(newZipcode);
        const zipRegex = /^\d{5}$/;
        setZipcodeValid(zipRegex.test(newZipcode));
    };


    const validatePhone = (input) => {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Regular expression for phone number
        const isValid = phoneRegex.test(input);
        setValid(isValid);
    };


    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        validatePhone(event.target.value);
    };

    const handleNameChange = (event) => {
        const nameValue = event.target.value;
        setName(nameValue);

        // Validate name format
        const regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        setIsValid(regex.test(nameValue));
    };

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        const emailRegex = /\S+@\S+\.\S+/;

        setEmail(inputEmail);
        setEmailValid(emailRegex.test(inputEmail));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const name = data.get("name");
        const emailAddress = data.get("emailAddress");
        const phoneNumber = data.get("phoneNumber");
        const sex = data.get("sex");
        const role = data.get("role");
        const address = data.get("address1");
        const city = data.get("city");
        const zipcode = data.get("zipcode");
        const subscriptionType = data.get("subscriptionType");
        const subscriptionPlan = data.get("subscriptionPlan");

        navigate("/payment", { state: { name, emailAddress, phoneNumber, sex, role, address, city, zipcode, subscriptionType, subscriptionPlan } });
    };

    const [subscriptionType, setSubscriptionType] = useState('individual');

    const handleSubscriptionChange = (event) => {
        setSubscriptionType(event.target.value);
    };

    const [city, setCity] = useState('');
    const [cityValid, setCityValid] = useState(false);

    const handleCityChange = (event) => {
        const value = event.target.value;
        const isValid = /^[A-Za-z\s]+$/.test(value);
        setCity(value);
        setCityValid(isValid);
    };

    return (
        <div>
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

            <main>
                <div className="row justify-content-center my-5 form-container">
                    <div className="col-10 col-sm-6">
                        <form id="subscribe-form" className="needs-validation px-5 py-5" onSubmit={handleSubmit}>
                            <h1 className="text-center mb-3">Subscription Form</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name*</label>
                                <input
                                    type="text"
                                    className={`form-control ${isValid ? 'is-valid' : 'is-invalid'}`}
                                    id="name"
                                    name='name'
                                    placeholder="First name Last name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please enter name in format: First name Last name
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email address*</label>
                                <input
                                    type="email"
                                    className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`}
                                    id="emailAddress"
                                    name='emailAddress'
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please enter name in format: name@example.com
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number*</label>
                                <input type="text"
                                    className={`form-control ${valid ? "is-valid" : "is-invalid"}`}
                                    id="phoneNumber"
                                    placeholder="xxx-xxx-xxxx"
                                    name='phoneNumber'
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please enter phone number in format: xxx-xxx-xxxx
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Sex:</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="sex"
                                        value="male"
                                        className="form-check-input"
                                        required
                                    />
                                    <label htmlFor="male" className="form-check-label">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="sex"
                                        value="female"
                                        className="form-check-input"
                                        required
                                    />
                                    <label htmlFor="female" className="form-check-label">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="other"
                                        name="sex"
                                        value="other"
                                        className="form-check-input"
                                        required
                                    />
                                    <label htmlFor="other" className="form-check-label">
                                        Other
                                    </label>
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please select a gender.</div>
                            </div>

                            <div className="form-group">
                                <label>Role:</label>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="patient"
                                        name="role"
                                        value="patient"
                                        className="form-check-input"
                                        required
                                    />
                                    <label htmlFor="patient" className="form-check-label">
                                        Patient
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        id="doctor"
                                        name="role"
                                        value="doctor"
                                        className="form-check-input"
                                        required
                                    />
                                    <label htmlFor="doctor" className="form-check-label">
                                        Doctor
                                    </label>
                                </div>
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please select a role.</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address1">Address 1*</label>
                                <input
                                    type="text"
                                    className={`form-control ${address1Valid ? "is-valid" : "is-invalid"}`}
                                    id="address1"
                                    name="address1"
                                    placeholder="Street number, Street name"
                                    value={address1}
                                    onChange={handleAddress1Change}
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please enter address in format: Street number and Street name
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    className={`form-control ${cityValid ? 'is-valid' : 'is-invalid'}`}
                                    id="city"
                                    name="city"
                                    placeholder="Enter city"
                                    value={city}
                                    onChange={handleCityChange}
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please enter a valid city (letters and spaces only).
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="zipcode">Zipcode*</label>
                                <input
                                    type="text"
                                    className={`form-control ${zipcodeValid ? 'is-valid' : 'is-invalid'}`}
                                    id="zipcode"
                                    name="zipcode"
                                    placeholder="Enter your zipcode"
                                    value={zipcode}
                                    onChange={handleZipcodeChange}
                                    required
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please enter a valid 5-digit zipcode.</div>
                            </div>
                            <label htmlFor="individualMembership">Subscription Type: </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="subscriptionType"
                                    id="individualMembership"
                                    value="individual"
                                    required
                                    checked={subscriptionType === 'individual'}
                                    onChange={handleSubscriptionChange}
                                />
                                <label className="form-check-label" htmlFor="individualMembership">
                                    Individual
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="subscriptionType"
                                    id="familyMembership"
                                    value="family"
                                    checked={subscriptionType === 'family'}
                                    onChange={handleSubscriptionChange}
                                />
                                <label className="form-check-label" htmlFor="familyMembership">
                                    Family
                                </label>
                            </div>
                            <button type="button" className="btn btn-primary corporate-button">
                                Corporate Plans?
                            </button>
                            <div
                                className="position-fixed bottom-0 end-0 p-3"
                                style={{ zIndex: 1 }}
                            >
                                <div
                                    id="liveToast"
                                    className="toast hide corporate-toast"
                                    role="alert"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                >
                                    <div className="toast-header">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Square_blue.svg"
                                            className="rounded me-2"
                                            alt="Blue square image"
                                            style={{ width: '1rem', height: '1rem' }}
                                        />
                                        <strong className="me-auto">Practo</strong>
                                        <small>2s ago</small>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="toast"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="toast-body">
                                        Please contact us at <b>corporate@practo.com</b> for more details
                                    </div>
                                </div>
                            </div>
                            <div className="form-group membership-plan-select">
                                <label htmlFor="membershipPlanSelect">Subscription Plan: </label>
                                <select className="form-control" id="membershipPlanSelect" name="subscriptionPlan" required>
                                    <option selected disabled value>Choose a Plan</option>
                                    <option>Basic</option>
                                    <option>Premium</option>
                                </select>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please select at least one plan
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div >
            </main >

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
                                <li className="list-group-item " ><a href="./subscribe.html">Bronze</a></li>
                                <li className="list-group-item"><a href="./subscribe.html">Gold</a></li>
                                <li className="list-group-item"><a href="./subscribe.html">Diamond</a></li>
                                <li className="list-group-item"><a href="./subscribe.html">Platinum</a></li>
                            </ul>
                        </li>
                        <li className="list-group-item">Family Plan
                            <ul className="list-group">
                                <li className="list-group-item"><a href="./subscribe.html">Basic</a></li>
                                <li className="list-group-item"><a href="./subscribe.html">Premium</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <h2>Useful Links</h2>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item"><a href="./index.html">Home</a></li>
                        <li className="list-group-item"><a href="./subscribe.html">Subscribe</a></li>
                        <li className="list-group-item"><a href="#">Contact Us</a></li>
                        <li className="list-group-item"><a href="#">Enroll as a Doctor</a></li>
                        <li className="list-group-item"><a href="#">Login</a></li>
                        <li className="list-group-item"><a href="#">Signup</a></li>
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
        </div >
    )
}

export default Subscription