import React, { useContext } from "react";
import "./login.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBBtn,
  MDBNavbarLink,
  MDBInputGroup,
  MDBBadge,
  MDBIcon,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { newcontext } from "./Contextprovider";

const Navbar = () => {
  const {fetch}= useContext(newcontext)
  return (
    <div>
      <MDBNavbar
        fixed="top"
        light
        style={{ height: "65px", backgroundColor: "#DDE7E6" }}
      >
        <MDBContainer>
          <MDBNavbarLink href="/adminregi">Admin Register</MDBNavbarLink>
          <MDBNavbarLink style={{ marginLeft: "50px" }} href="/adminlogin">
            Admin login
          </MDBNavbarLink>

          <div style={{ marginRight: "-650px" }} className="button-container">
            <Link to="/usercart">
              <MDBBadge pill color="danger">
                {fetch.length}
              </MDBBadge>
              <span>
                <MDBIcon fas icon="shopping-cart"></MDBIcon>
              </span>
            </Link>
          </div>

          <div className="button-container">
            <Link to="/regi">
              <MDBBtn
                style={{
                  background:
                    "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
                }}
                color="white"
              >
                Register
              </MDBBtn>
            </Link>

            <Link to="/login">
              <MDBBtn
                style={{
                  background:
                    "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
                }}
                color="warning"
              >
                login
              </MDBBtn>
            </Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
