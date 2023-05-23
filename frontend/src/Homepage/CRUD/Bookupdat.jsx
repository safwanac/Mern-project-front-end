import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBContainer,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Home from "../Home";
import { useNavigate, useParams } from "react-router-dom";

const Bookupdat = () => {
  const [Data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8001/readbook/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(Data);

  useEffect(() => {
    const { Name, Author, Year, Publication, Availability } = Data;
    setName(Name);
    setAuthor(Author);
    setYear(Year);
    setPublication(Publication);
    setAvailability(Availability);
  }, [Data]);
  const [Name, setName] = useState("");
  const [Author, setAuthor] = useState("");
  const [Year, setYear] = useState("");
  const [Publication, setPublication] = useState("");
  const [Availability, setAvailability] = useState("");

  const navigate = useNavigate();
  const click = async () => {
    await axios.put(`http://localhost:8001/bookupdate/${id}`, {
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
              value={Data.Name}
              size="lg"
              id="form1"
              type="text"
              onChange={Namechange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Author"
              value={Data.Author}
              size="lg"
              id="form2"
              type="text"
              onChange={Authorchange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Year"
              value={Data.Year}
              size="lg"
              id="form3"
              type="number"
              onChange={Yearchange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Publication"
              value={Data.Publication}
              size="lg"
              id="form4"
              type="text"
              onChange={Publicationchange}
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Availability"
              value={Data.Availability}
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
              onClick={click}
            >
              Edit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Bookupdat;
