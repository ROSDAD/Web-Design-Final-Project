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

function AppointmentForm({ onFinish, initivalValues }) {
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
    const updateAppointmentInfo = async (event) => {
      event.preventDefault();
    console.log(heartRate)
    console.log(bloodPressure)
    console.log(temperature)
    console.log(weight)
    console.log(height)
    console.log(note)
      try {
       
        const response = await axios.post(
          "/api/doctor/update-vitals",
          {
            appId: params.appointmentId,
            appointmentInfo:{
              heartRate:heartRate,
              bloodPressure:bloodPressure,
              temperature:temperature,
              weight:weight,
              height:height,
              note:note
            }
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
  
        if (response.data.success) {
          toast.success(response.data.message);
     
        }
      } catch (error) {
        toast.error("Error booking appointment");
 
      }
    };
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
  // const handleHeartChange = (tags) => (event) => {
  //   // console.log(tags);
  //   // console.log(event.target.value);

  //   };
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
            <form onSubmit={updateAppointmentInfo}>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Vital Signs</span></MDBCardText>
                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Heart Rate</MDBCardText>
                    <MDBInput id='inpHeartRate' min="0" type='number' value={ heartRate } 
                    onChange={(value)=>{
                      
                      setHeartRate(value.target.value);
                    }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Blood Pressure</MDBCardText>
                    <MDBInput id='inpBloodPressure' min="0" type='number' value={ bloodPressure }
                    onChange={(value)=>{
                      
                      setBloodPressure(value.target.value);
                    }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Temperature</MDBCardText>
                    <MDBInput id='inpTemperature' min="0" type='number' value={ temperature }
                    onChange={(value)=>{
                      
                      setTemperature(value.target.value);
                    }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Weight</MDBCardText>
                    <MDBInput id='inpWeight' min="0" type='number' value={ weight }
                    onChange={(value)=>{
                      
                      setWeight(value.target.value);
                    }}/>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Height</MDBCardText>
                    <MDBInput id='inpHeight' min="0" type='number' value={ height }
                    onChange={(value)=>{
                      
                      setHeight(value.target.value);
                    }}/>
                    
                   
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Prescription</span></MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '1.25rem' }}>Note</MDBCardText>
                    <MDBTextArea  id='textAreaExample'  rows={15} value={ note }
                    onChange={(value)=>{
                      
                      setNote(value.target.value);
                    }}></MDBTextArea>
                
                    
                   
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
       
              
            </MDBRow>
            <br/>
            <MDBBtn type="submit" className='gap-2 col-12 mx-auto' block>Update</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    
  );
}

export default AppointmentForm;
