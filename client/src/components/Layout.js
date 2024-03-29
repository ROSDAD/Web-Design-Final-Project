import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import moment from "moment";
import {Container,Row,Col} from 'react-bootstrap';

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);


  const [endDate, setEndDate] = useState(moment().add(29, 'days'));

  const daysLeft = moment.duration(moment(endDate).diff(moment())).asDays().toFixed(2);

  const handleAddDay = () => {
    const newEndDate = moment(endDate).add(1, 'days');
    setEndDate(newEndDate);
  };

  const navigate = useNavigate();

  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    }
  ];

  const doctorMenu = [
    {
      name: "Appointments",
      path: "/doctor/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?.userId}`,
      icon: "ri-user-line",
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Doctors",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    }
    // {
    //   name: "Profile",
    //   path: `/user/profile/${user?.userId}`,
    //   icon: "ri-user-line",
    // },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;


  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : "User";
  if (role === "User") {
    return (
      <div className="main">
        <div className="d-flex layout">
          <div className="sidebar">
            <div className="sidebar-header">
              <h1 className="logo">Practo</h1>
              <hr />
              <br />
              <h1 className="role">{role}</h1>
            </div>

            <div className="menu">
              {menuToBeRendered.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div
                    className={`d-flex menu-item ${isActive && "active-menu-item"
                      }`}
                  >
                    <i className={menu.icon}></i>
                    {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                  </div>
                );
              })}
              <div
                className={`d-flex menu-item `}
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                <i className="ri-logout-circle-line"></i>
                {!collapsed && <Link to="/login">Logout</Link>}
              </div>
            </div>
          </div>

          <div className="content">

            <Container>
              <Row>
                <Col><div >
                  Number of appointments Left: {user?.noOfAppointment}
                </div></Col>
                <Col><div >
                  Number of days left in subscription: {daysLeft} days
                </div></Col>
                <Col><div >
                  Subscribed Plan:  {user?.type}
                </div></Col>
              </Row>
            </Container>
            <div className="header">
              {collapsed ? (
                <i
                  className="ri-menu-2-fill header-action-icon"
                  onClick={() => setCollapsed(false)}
                ></i>
              ) : (
                <i
                  className="ri-close-fill header-action-icon"
                  onClick={() => setCollapsed(true)}
                ></i>
              )}

              <div className="d-flex align-items-center px-4">
                <Badge
                  count={user?.unseenNotifications.length}
                  onClick={() => navigate("/notifications")}
                >
                  <i className="ri-notification-line header-action-icon px-3"></i>
                </Badge>

                <Link className="anchor mx-2" to={"/user/profile/" + user?._id}>
                  {user?.name}
                </Link>
              </div>
            </div>

            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    );

  }

  if (role === "Doctor" || role === "Admin") {

              return (
                <div className="main">
                  <div className="d-flex layout">
                    <div className="sidebar">
                      <div className="sidebar-header">
                        <h1 className="logo">Practo</h1>
                        <br/>
                        <h1 className="role">{role}</h1>
                      </div>
            
                      <div className="menu">
                        {menuToBeRendered.map((menu) => {
                          const isActive = location.pathname === menu.path;
                          return (
                            <div
                              className={`d-flex menu-item ${
                                isActive && "active-menu-item"
                              }`}
                            >
                              <i className={menu.icon}></i>
                              {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                            </div>
                          );
                        })}
                        <div
                          className={`d-flex menu-item `}
                          onClick={() => {
                            localStorage.clear();
                            navigate("/login");
                          }}
                        >
                          <i className="ri-logout-circle-line"></i>
                          {!collapsed && <Link to="/login">Logout</Link>}
                        </div>
                      </div>
                    </div>
            
                    <div className="content">
                      <div className="header">
                        {collapsed ? (
                          <i
                            className="ri-menu-2-fill header-action-icon"
                            onClick={() => setCollapsed(false)}
                          ></i>
                        ) : (
                          <i
                            className="ri-close-fill header-action-icon"
                            onClick={() => setCollapsed(true)}
                          ></i>
                        )}
            
                        <div className="d-flex align-items-center px-4">
                          <Badge
                            count={user?.unseenNotifications.length}
                            onClick={() => navigate("/notifications")}
                          >
                            <i className="ri-notification-line header-action-icon px-3"></i>
                          </Badge>
            
                          <Link className="anchor mx-2" to={"/doctor/profile/" + user?._id}>
                            {user?.name}
                          </Link>
                        </div>
                      </div>
            
                      <div className="body">{children}</div>
                    </div>
                  </div>
                </div>
              );


  }
}

export default Layout;
