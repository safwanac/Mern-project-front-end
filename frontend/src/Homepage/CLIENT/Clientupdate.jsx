import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBContainer,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Home from "../Home";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Form } from "react-bootstrap";

function Clientupdate() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8001/clientread1/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(Data);

  useEffect(() => {
    const { Name, UserName, Email } = Data;
    setName(Name);
    setUserName(UserName);
    setEmail(Email);
    setSignedStatus(SignedStatus);
    setRole(Role);
    setPhoneNumber(PhoneNumber);
  }, [Data]);
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [SignedStatus, setSignedStatus] = useState("");
  const [Role, setRole] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();
  const click = async () => {
    await axios.put(`http://localhost:8001/updateclient/${id}`, {
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
      <div style={{ marginBottom: "-70px" }}>
        <Home />
      </div>
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/779/934/569/magic-book-runes-book-dark-magic-hd-wallpaper-preview.jpg)",
          marginTop: "70px",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard
          className="m-5"
          style={{
            maxWidth: "600px",
            backgroundColor: "#3b3b3b",
            borderRadius: "1.5em",
          }}
        >
          <MDBCardBody className="px-5">
            <h2
              className="text-uppercase text-center mb-5 "
              style={{ color: "#EEEEEE " }}
            >
              Update client
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Name"
              value={Data.Name}
              size="lg"
              id="form1"
              type="text"
              onChange={Namechange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="User Name"
              value={Data.UserName}
              size="lg"
              id="form2"
              type="text"
              onChange={UserNamechange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Email"
              value={Data.Email}
              size="lg"
              id="form3"
              type="text"
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
              value={Data.PhoneNumber}
              placeholder="Phone Number"
              id="form4"
              type="number"
              onChange={PhoneNumberchange}
            />
            <div
              style={{ color: "#EEEEEE " }}
              className="d-flex flex-row justify-content-center mb-4"
            >
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
              />
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4 put"
              size="lg"
              onClick={click}
            >
              Edit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Clientupdate;
