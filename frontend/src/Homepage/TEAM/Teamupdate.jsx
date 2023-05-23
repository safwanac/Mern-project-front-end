import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Home from "../Home";

function Teamupdate() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8001/teamread/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    const { Name, Email, DateOfBirth, Gender, Description, Role, PhoneNumber } =
      Data;
    setName(Name);
  }, [Data]);

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [Gender, setGender] = useState("");
  const [Description, setDescription] = useState("");
  const [Role, setRole] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const add = async () => {
    await axios.put(`http://localhost:8001/teamupdate/${id}`, {
      Name,
      Email,
      DateOfBirth,
      Gender,
      Description,
      Role,
      PhoneNumber,
    });
    navigate("/team");
  };
  const Namechange = (e) => {
    setName(e.target.value);
  };
  const Emailchange = (e) => {
    setEmail(e.target.value);
  };
  const DateOfBirthchange = (e) => {
    setDateOfBirth(e.target.value);
  };
  const Genderchange = (e) => {
    setGender(e.target.value);
  };
  const Descriptionchange = (e) => {
    setDescription(e.target.value);
  };
  const Rolechange = (e) => {
    setRole(e.target.value);
  };
  const PhoneNumberchange = (e) => {
    setPhoneNumber(e.target.value);
  };
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
                      Team registration form
                    </h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="Name"
                          value={Name}
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
                          value={Email}
                          size="lg"
                          id="form2"
                          type="text"
                          onChange={Emailchange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Date Of Birth"
                      value={DateOfBirth}
                      size="lg"
                      id="form3"
                      type="text"
                      onChange={DateOfBirthchange}
                    />

                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio1"
                        value={Gender}
                        label="Female"
                        inline
                        onChange={Genderchange}
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio2"
                        value={Gender}
                        label="Male"
                        inline
                        onChange={Genderchange}
                      />
                      <MDBRadio
                        name="inlineRadio"
                        id="inlineRadio3"
                        value={Gender}
                        label="Other"
                        inline
                        onChange={Genderchange}
                      />
                    </div>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Description"
                      value={Description}
                      size="lg"
                      id="form4"
                      type="text"
                      onChange={Descriptionchange}
                    />

                    <MDBRow>
                      <MDBCol>
                        <Form.Select onChange={Rolechange}>
                          <option>select menu</option>
                          <option value={Role} onChange={Rolechange}>
                            super admin
                          </option>
                          <option value={Role} onChange={Rolechange}>
                            only by admin
                          </option>
                        </Form.Select>
                      </MDBCol>
                    </MDBRow>
                    <br></br>

                    <MDBRow>
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Phone Number"
                        value={PhoneNumber}
                        size="lg"
                        id="form5"
                        type="text"
                        onChange={PhoneNumberchange}
                      />
                    </MDBRow>

                    <div className="d-flex justify-content-end pt-3">
                      <MDBBtn color="light" size="lg">
                        Reset all
                      </MDBBtn>
                      <MDBBtn
                        className="fix ms-2"
                        color="warning"
                        size="lg"
                        onClick={add}
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

export default Teamupdate;
