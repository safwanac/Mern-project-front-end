import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useParams } from "react-router-dom";
import Home from "../Home";

function Customerread() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8001/customerread/${id}`).then((res) => {
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
            src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
            position="top"
            alt="..."
            style={{ borderTopRightRadius: "1em", borderTopLeftRadius: "1em" }}
          />
          <MDBCardBody>
            <MDBCardTitle>Name:{Data.Name}</MDBCardTitle>
            <MDBCardTitle>Email:{Data.Email}</MDBCardTitle>
            <MDBCardTitle>Address:{Data.Address}</MDBCardTitle>
            <MDBCardTitle>City:{Data.City}</MDBCardTitle>
            <MDBCardTitle>State:{Data.State}</MDBCardTitle>
            <MDBCardTitle>Pincode:{Data.Pincode}</MDBCardTitle>
            <MDBCardTitle>Country:{Data.Country}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Customerread;
