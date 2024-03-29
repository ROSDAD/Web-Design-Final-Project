import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Subscription from "./pages/Subscription";
import { Button } from "antd";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import Notifications from "./pages/Notifications";
import Userslist from "./pages/Admin/Userslist";
import DoctorsList from "./pages/Admin/DoctorsList";
import Profile from "./pages/Doctor/Profile";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import Completion from "./pages/Completion";
import { AppContext } from "./components/AppContext";
import Aboutus from "./pages/Aboutus";
import DoctorMainForm from "./pages/DoctorMainForm";
import PatientAppointmentPage from "./pages/PatientAppointmentPage";
import AppointmentsPage from "./pages/AppointmentPage";
import UserProfile from "./pages/UserProfile";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
function App() {
  const { loading } = useSelector((state) => state.alerts);
  const [global_temp, setMyVariable] = useState([]);
  console.log("in APP.jS")
  // console.log(global_temp_var);
  const updateMyVariable = (newValue) => {
    setMyVariable(newValue);
  };
  return (
    <AppContext.Provider value={{ global_temp, updateMyVariable }}>
      <div className="App">
            <TawkMessengerReact
                propertyId="644392894247f20fefed1be5"
                widgetId="1gujv8qsh"/>
        </div>
      <BrowserRouter>
        {loading && (
          <div className="spinner-parent">
            <div class="spinner-border" role="status"></div>
          </div>
        )}

        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
        <Route
            path="/user/appointments/profile/:appointmentId"
            element={
              <ProtectedRoute>
                <PatientAppointmentPage />
              </ProtectedRoute>
            }
          />
        <Route
            path="/doctor/appointments/profile/:appointmentId"
            element={
              <ProtectedRoute>
                 <AppointmentsPage />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/mainPage"
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />
          <Route
            path="/aboutus"
            element={
              <PublicRoute>
                <Aboutus />
              </PublicRoute>
            }
          />
          <Route
            path="/payment"
            element={

              <Payment />

            }
          />
          <Route
            path="/subscription"
            element={
              <PublicRoute>
                <Subscription />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctorForm"
            element={
              <PublicRoute>
                <DoctorMainForm/>
              </PublicRoute>
            }
          />

          <Route
            path="/apply-doctor"
            element={
              <PublicRoute>
                <ApplyDoctor />
              </PublicRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/userslist"
            element={
              <ProtectedRoute>
                <Userslist />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/doctorslist"
            element={
              <ProtectedRoute>
                <DoctorsList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor/profile/:userId"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/profile/:userId"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-appointment/:doctorId"
            element={
              <ProtectedRoute>
                <BookAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor/appointments"
            element={
              <ProtectedRoute>
                <DoctorAppointments />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;