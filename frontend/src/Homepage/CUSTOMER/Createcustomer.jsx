import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./customer.css";
import Home from "../Home";

function Createcustomer() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Country, setCountry] = useState("");

  const navigate = useNavigate();
  const click = async () => {
    await axios.post("http://localhost:8001/createcustomer", {
      Name,
      Email,
      Address,
      City,
      State,
      Pincode,
      Country,
    });
    navigate("/customer");
  };

  const Namechange = (e) => {
    setName(e.target.value);
  };
  const Emailchange = (e) => {
    setEmail(e.target.value);
  };
  const Addresschange = (e) => {
    setAddress(e.target.value);
  };
  const Address1change = (e) => {
    setAddress(e.target.value);
  };
  const Citychange = (e) => {
    setCity(e.target.value);
  };
  const Statechange = (e) => {
    setState(e.target.value);
  };
  const Pincodechange = (e) => {
    setPincode(e.target.value);
  };
  const Countrychange = (e) => {
    setCountry(e.target.value);
  };
  console.log(Name);
  return (
    <div>
      <div style={{ marginBottom: "-70px" }}>
        <Home />
      </div>
      <MDBContainer style={{ marginTop: "45px" }} fluid className="bg-dark">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="my-4">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="rounded-start"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5 text-uppercase fw-bold">
                      Customer registration form
                    </h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="Name"
                          size="lg"
                          id="form1"
                          type="text"
                          onChange={Namechange}
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="Email"
                          size="lg"
                          id="form2"
                          type="text"
                          onChange={Emailchange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Address 1"
                      size="lg"
                      id="form3"
                      type="text"
                      onChange={Addresschange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Address 2"
                      size="lg"
                      id="form4"
                      type="text"
                      onChange={Address1change}
                    />

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="City"
                          size="lg"
                          id="form5"
                          type="text"
                          onChange={Citychange}
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="State"
                          size="lg"
                          id="form6"
                          type="text"
                          onChange={Statechange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="Pincode"
                          size="lg"
                          id="form7"
                          type="text"
                          onChange={Pincodechange}
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="Country"
                          size="lg"
                          id="form8"
                          type="text"
                          onChange={Countrychange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color="light" size="lg">
                        Reset all
                      </MDBBtn>
                      <MDBBtn
                        className="fix ms-2"
                        color="warning"
                        size="lg"
                        onClick={click}
                      >
                        Submit form
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Createcustomer;
