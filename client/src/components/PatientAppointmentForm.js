import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";



import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';

function PatientAppointmentForm({ onFinish, initivalValues }) {
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    console.log("top")
    const [appointment, setAppointment] = useState(null);
    const [appointmentInfo, setAppointmentInfo] = useState({heartRate:0,bloodPressure:0,temperature:0,weight:0,height:0,note:""});
    const [heartRate, setHeartRate] = useState(0)
    const [bloodPressure, setBloodPressure] = useState(0)
    const [temperature, setTemperature] = useState(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [note, setNote] = useState("")
    
  const getAppointmentData = () => {
    console.log("inhere");
    axios
      .post(
        "/api/doctor/get-appointments-by-appointment-id",
        {
          appId: params.appointmentId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          setAppointment(response.data.data[0]);
          setAppointmentInfo(response.data.data[0].appointmentInfo)
          // console.log(response.data.data[0].appointmentInfo.heartRate);
          setHeartRate(response.data.data[0].appointmentInfo.heartRate)
          setBloodPressure(response.data.data[0].appointmentInfo.bloodPressure)
          setTemperature(response.data.data[0].appointmentInfo.temperature)
          setHeight(response.data.data[0].appointmentInfo.height)
          setWeight(response.data.data[0].appointmentInfo.weight)
          setNote(response.data.data[0].appointmentInfo.note)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
    useEffect(() => {
    
      getAppointmentData();
    }, [params.appointmentId]);
  

    
  return (
    
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        

        <MDBRow>
          
          <MDBCol lg="12">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ appointment && appointment.userInfo.name }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ appointment && appointment.userInfo.email }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Contact</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ appointment && appointment.userInfo.phone }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ appointment && appointment.userInfo.address }</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
           
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Vital Signs</span></MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '0.9rem' }}>Heart Rate</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>{ heartRate }</MDBCardText>
                    
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '0.9rem' }}>Blood Pressure</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>{ bloodPressure }</MDBCardText>

                    
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '0.9rem' }}>Temperature</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>{ temperature }</MDBCardText>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '0.9rem' }}>Weight</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>{ weight }</MDBCardText>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '0.9rem' }}>Height</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>{ height }</MDBCardText>

                  
                   
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Prescription</span></MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '0.9rem' }}>Note</MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>{ note }</MDBCardText>
                    
                    
                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
       
              
            </MDBRow>
          
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    
  );
}

export default PatientAppointmentForm;
