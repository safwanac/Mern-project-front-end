import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Home from "../Home";
import { useParams } from "react-router-dom";
import axios from "axios";

function Orderread() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8001/orderread/${id}`).then((res) => {
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
            <MDBCardTitle>First Name:{Data.FirstName}</MDBCardTitle>
            <MDBCardTitle>Last Name:{Data.LastName}</MDBCardTitle>
            <MDBCardTitle>Order Id:{Data.OrderId}</MDBCardTitle>
            <MDBCardTitle>Product Number:{Data.ProductNumber}</MDBCardTitle>
            <MDBCardTitle>Date:{Data.Date}</MDBCardTitle>
            <MDBCardTitle>Street:{Data.Street}</MDBCardTitle>
            <MDBCardTitle>Additional INF:{Data.Additional}</MDBCardTitle>
            <MDBCardTitle>Place:{Data.Place}</MDBCardTitle>
            <MDBCardTitle>Contact Number:{Data.ContactNumber}</MDBCardTitle>
            <MDBCardTitle>Pin Code:{Data.Pincode}</MDBCardTitle>
            <MDBCardTitle>Country:{Data.Country}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Orderread;
