
import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../components/AppContext";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';




function Subscription() {
    const { global_temp, updateMyVariable } = useContext(AppContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    // const [cnfPasswordValid, setcnfPasswordValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);


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

    function handleClick() {
        navigate("/login");
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
    const handlePasswordChange = (event) => {
        const inputPassword = event.target.value;
        setPassword(event.target.value);
        const PasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;"'<>,.?/~])(?!.*\s).{8,}$/
            ;
        setPasswordValid(PasswordRegex.test(inputPassword));
        if (event.target.value === confirmPassword) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
        console.log(inputPassword);
    };

    const handlecnfPasswordChange = (event) => {
        const inputcnfPassword = event.target.value;
        setConfirmPassword(event.target.value);
        if (event.target.value === password) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const name = data.get("name");
        const emailAddress = data.get("emailAddress");
        const password = data.get("password");
        const phoneNumber = data.get("phoneNumber");
        const sex = data.get("sex");
        const role = data.get("role");
        const address = data.get("address1");
        const city = data.get("city");
        const zipcode = data.get("zipcode");
        const subscriptionType = data.get("subscriptionType");
        const subscriptionPlan = data.get("subscriptionPlan");

        const noOfAppointment = subscriptionPlan === 'Basic' ? 5 : 10;

        console.log(global_temp);

        updateMyVariable([name, emailAddress, password, phoneNumber, sex, role, address, city, zipcode, subscriptionType, subscriptionPlan, noOfAppointment]);


        if (role === 'patient') {
            navigate("/payment", { state: { name, emailAddress, phoneNumber, sex, role, address, city, zipcode, subscriptionType, subscriptionPlan, noOfAppointment } });
        } else {
            navigate("/apply-doctor", { state: { name, emailAddress, phoneNumber, sex, role, address, city, zipcode, subscriptionType, subscriptionPlan } })
        }

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
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please enter name in format: name@example.com
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordValid ? 'is-valid' : 'is-invalid'}`}
                                    id="password"
                                    name='password'

                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please enter Password
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cnfPassword">Confirm Password*</label>
                                <input
                                    type="password"
                                    className={`form-control ${passwordsMatch ? 'is-valid' : 'is-invalid'}`}
                                    id="cnfPassword"
                                    name='cnfPassword'

                                    value={confirmPassword}
                                    onChange={handlecnfPasswordChange}
                                    required
                                />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please match the password
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
                                <label>Sex: </label>
                                <div className="form-check form-check-inline" style={{"margin-left":"20px"}}>
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
                                <div className="form-check form-check-inline" style={{"margin-left":"20px"}}>
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
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please select a role.</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address1">Address*</label>
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
                            
                            <div className="form-check form-check-inline" style={{"margin-left":"20px"}}>
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
                                    <option>Basic - $80</option>
                                    <option>Premium - $100</option>
                                </select>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Please select at least one plan
                                </div>
                            </div>
                            <br/>
                            <div class="container">
                            <div class="row">
                                <div class="col text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                            </div>
                            
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
        </div >
    )
}

export default Subscription