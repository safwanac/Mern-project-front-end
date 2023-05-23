import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const clik = async () => {
    const data = await axios.post("http://localhost:8001/create", {
      firstname,
      lastname,
      email,
      password,
    });

    console.log(data.data);

    localStorage.setItem("project", JSON.stringify(data.data));
    if (firstname > 2 || lastname > 2 || email > 2 || password > 2) {
      navigate("/login");
    } else {
      navigate("/regi");
    }
  };

  const firstnamechange = (e) => {
    setfirstname(e.target.value);
  };

  const lastnamechange = (e) => {
    setlastname(e.target.value);
  };

  const emailchange = (e) => {
    setemail(e.target.value);
  };

  const passwordchange = (e) => {
    setpassword(e.target.value);
  };
  return (
    <div>
      <MDBContainer style={{ width: "900px", marginTop: "140px" }}>
        <MDBCard
          className="text-black m-5"
          style={{ borderRadius: "25px", marginTop: "500px" }}
        >
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  <b>Sign up</b>
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    placeholder="First Name"
                    id="form1"
                    type="text"
                    className="w-100"
                    onChange={firstnamechange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput
                    placeholder="Last Name"
                    id="form2"
                    type="text"
                    onChange={lastnamechange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput
                    placeholder="Email"
                    id="form3"
                    type="email"
                    onChange={emailchange}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    placeholder="Password"
                    id="form4"
                    type="password"
                    onChange={passwordchange}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>

                <Link to="/login">
                  <MDBBtn className="mb-4 but" onClick={clik}>
                    Register
                  </MDBBtn>
                </Link>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Register;
