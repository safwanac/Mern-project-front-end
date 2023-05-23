import React, { useState } from "react";
import "./login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailchange = (e) => {
    setemail(e.target.value);
  };

  const passwordchange = (e) => {
    setpassword(e.target.value);
  };

  const navigate = useNavigate();
  const click = async () => {
    try {
      const data = await axios.post("http://localhost:8001/login", {
        email,
        password,
      });
      console.log(data.data);
      const localdata = JSON.parse(localStorage.getItem("project"));
      console.log(localdata);
      if (localdata.email === email) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("input is not complete", error);
    }
  };

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" style={{ marginTop: "90px" }}>
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "450px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">
                  Please enter your login and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                  placeholder="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={emailchange}
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={passwordchange}
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />
                <br></br>

                <MDBBtn className="fixed" size="lg" onClick={click}>
                  Login
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
