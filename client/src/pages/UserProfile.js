import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { useParams} from "react-router-dom";
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
function UserProfile() {

  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const getData = async () => {

    try {
      
      const response = await axios.post("/api/user/get-user-info-by-id", 
      {
        userId: params.userId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data)
      if (response.data.success) {
        setUser(response.data.data);
        console.log(response.data.data)
      }
    } catch (error) {
     
    }
    
  };

  useEffect(() => {
    console.log("in useffect");
    getData();
  }, [params.userId]);
  console.log(user)
  return (
    // <h1>Hi</h1>
    <Layout>
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
                    <MDBCardText className="text-muted">{ user && user.name }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.email }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Contact</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.phone }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.address }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.city }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Zipcode</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.zipcode }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Group</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.group }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
               
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Subscription Type</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{ user && user.type }</MDBCardText>
                  </MDBCol>
                </MDBRow>
                
              </MDBCardBody>
            </MDBCard>
           
           
          
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </Layout>
  );
}

export default UserProfile;
