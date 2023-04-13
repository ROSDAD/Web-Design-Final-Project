import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";




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

function AppointmentForm({ onFinish, initivalValues }) {
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    console.log("top")
    const [appointment, setAppointment] = useState(null);
    const [appointmentInfo, setAppointmentInfo] = useState({heartRate:0,bloodPressure:0,temperature:0,weight:0,height:0,note:""});


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
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

    useEffect(() => {
    
      getAppointmentData();
    }, [params.appointmentId]);
    // console.log(appointmentInfo);

    
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
                    <form>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Vital Signs</span></MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Heart Rate</MDBCardText>
                    <MDBInput id='inpHeartRate' min="0" type='number' value={ appointmentInfo && appointmentInfo.heartRate }/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Blood Pressure</MDBCardText>
                    <MDBInput id='inpBloodPressure' min="0" type='number' value={ appointmentInfo && appointmentInfo.bloodPressure }/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Temperature</MDBCardText>
                    <MDBInput id='inpTemperature' min="0" type='number' value={ appointmentInfo && appointmentInfo.temperature }/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Weight</MDBCardText>
                    <MDBInput id='inpWeight' min="0" type='number' value={ appointmentInfo && appointmentInfo.weight }/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Height</MDBCardText>
                    <MDBInput id='inpHeight' min="0" type='number' value={ appointmentInfo && appointmentInfo.height }/>
                    <br/>
                    <MDBBtn type='submit' className='mb-4' block>Update</MDBBtn>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <form >
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Prescription</span></MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '1.25rem' }}>Note</MDBCardText>
                    <MDBTextArea  id='textAreaExample'  rows={15}>{ appointmentInfo && appointmentInfo.note }</MDBTextArea>
                    <br/>
                    <MDBBtn type='submit' className='mb-4' block>Update</MDBBtn>
                    </form>
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

export default AppointmentForm;
