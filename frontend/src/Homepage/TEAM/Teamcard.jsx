import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "../Home";
import axios from "axios";

function Teamcard() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8001/teamread/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <Home />
      </div>
      <div>
        <MDBCard
          style={{
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
            borderRadius: "1em",
          }}
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
            style={{ borderTopRightRadius: "1em", borderTopLeftRadius: "1em" }}
          />
          <MDBCardBody>
            <MDBCardTitle>Name :{Data.Name} </MDBCardTitle>
            <MDBCardTitle>Email :{Data.Email} </MDBCardTitle>
            <MDBCardTitle>Date Of Birth:{Data.DateOfBirth} </MDBCardTitle>
            <MDBCardTitle>Gender :{Data.Gender} </MDBCardTitle>
            <MDBCardTitle>Description :{Data.Description} </MDBCardTitle>
            <MDBCardTitle>Role :{Data.Role} </MDBCardTitle>
            <MDBCardTitle>PhoneNumber :{Data.PhoneNumber} </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Teamcard;
