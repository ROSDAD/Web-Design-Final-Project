import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import AppointmentForm from "../components/AppointmentForm";

function AppointmentPage() {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctor, setDoctor] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  return (
    <Layout>
        <AppointmentForm/>
    </Layout>
    // <Layout>
    //   <h1 className="page-title">Doctor Profile</h1>
    //   <hr />
    //   {doctor && <AppointmentForm onFinish={onFinish} initivalValues={doctor} />}
    // </Layout>
  );
}

export default AppointmentPage;
