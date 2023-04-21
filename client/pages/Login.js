import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  const onFinish = async (values) => {

    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
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
            {/* <button className="btn btn-primary mx-sm-3 mt-3 mt-sm-0 login-btn" onClick={handleClick}>
          Login
        </button> */}
          </div>
        </div>
      </nav>
      <div className="authentication">

        <div className="authentication-form card p-3">
          <h1 className="card-title">Welcome Back</h1>
          <Form layout="vertical" onFinish={onFinish}>

            <Form.Item label="Email" name="email">
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input placeholder="Password" type="password" />
            </Form.Item>


            <Button className="primary-button my-2 full-width-button" htmlType="submit">
              Login
            </Button>

            <Link to="/subscription" className="anchor mt-2">
              Click to Register
            </Link>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
