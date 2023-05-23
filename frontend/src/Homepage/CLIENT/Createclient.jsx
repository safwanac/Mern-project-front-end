import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Home from "../Home";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./client.css";

const Createclient = () => {
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [SignedStatus, setSignedStatus] = useState("");
  const [Role, setRole] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const add = async () => {
    await axios.post("http://localhost:8001/createclient", {
      Name,
      UserName,
      Email,
      SignedStatus,
      Role,
      PhoneNumber,
    });
    navigate("/client");
  };

  const Namechange = (e) => {
    setName(e.target.value);
  };
  const UserNamechange = (e) => {
    setUserName(e.target.value);
  };
  const Emailchange = (e) => {
    setEmail(e.target.value);
  };
  const SignedStatuschange = (e) => {
    setSignedStatus(e.target.value);
  };
  const Rolechange = (e) => {
    setRole(e.target.value);
  };
  const PhoneNumberchange = (e) => {
    setPhoneNumber(e.target.value);
  };
  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <Home />
      </div>
      <MDBContainer className="my-5">
        <MDBCard
          style={{
            height: "",
            width: "",
            marginTop: "10px",
            marginLeft: "200px",
          }}
        >
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="4">
              <MDBCardImage
                style={{
                  height: "390px",
                  marginBottom: "50px",
                  borderTopLeftRadius: ".25em",
                  borderBottomLeftRadius: ".25em",
                }}
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <MDBCardBody>
                <h2
                  className="text-uppercase text-center mb-5 "
                  style={{ color: " " }}
                >
                  Create Client
                </h2>

                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Name"
                  id="form1"
                  type="text"
                  onChange={Namechange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="User Name"
                  id="form2"
                  type="text"
                  onChange={UserNamechange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Email"
                  id="form3"
                  type="email"
                  onChange={Emailchange}
                />
                <br></br>
                <Form onChange={SignedStatuschange}>
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="Signed In"
                    label="Signed In"
                    onChange={SignedStatuschange}
                  />
                  <MDBRadio
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Not Signed In"
                    label="Not Signed In"
                    onChange={SignedStatuschange}
                  />
                </Form>
                <br></br>
                <Form.Select
                  aria-label="Default select example"
                  onChange={Rolechange}
                >
                  <option>select menu</option>
                  <option value="super admin" onChange={Rolechange}>
                    super admin
                  </option>
                  <option value="only by admin" onChange={Rolechange}>
                    only by admin
                  </option>
                </Form.Select>
                <br></br>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Phone Number"
                  id="form4"
                  type="number"
                  onChange={PhoneNumberchange}
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                </div>

                <MDBBtn className="fixed mb-4 w-100" onClick={add}>
                  Sign in
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Createclient;
