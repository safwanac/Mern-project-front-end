import React, { useState } from "react";
import "./book.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import Home from "../Home";
import { useNavigate } from "react-router-dom";

function Bookcreation() {
  const [Name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Year, setYear] = useState("");
  const [Publication, setPublication] = useState("");
  const [Availability, setAvailability] = useState("");
  const navigate = useNavigate();
  const add = async () => {
    await axios.post("http://localhost:8001/book", {
      Name,
      Author,
      Year,
      Publication,
      Availability,
    });
    navigate("/table");
  };

  const Namechange = (e) => {
    setName(e.target.value);
  };
  const Authorchange = (e) => {
    setAuthor(e.target.value);
  };
  const Yearchange = (e) => {
    setYear(e.target.value);
  };
  const Publicationchange = (e) => {
    setPublication(e.target.value);
  };
  const Availabilitychange = (e) => {
    setAvailability(e.target.value);
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
              Create an Book
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Name"
              size="lg"
              id="form1"
              type="text"
              onChange={Namechange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Author"
              size="lg"
              id="form2"
              type="text"
              onChange={Authorchange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Year"
              size="lg"
              id="form3"
              type="number"
              onChange={Yearchange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Publication"
              size="lg"
              id="form4"
              type="text"
              onChange={Publicationchange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Availability"
              size="lg"
              id="form5"
              type="text"
              onChange={Availabilitychange}
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
              onClick={add}
            >
              Add
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Bookcreation;
