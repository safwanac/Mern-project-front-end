import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import Home from "../Home";

function Read1() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8001/readbook/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(Data);

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
            borderRadius: "1.5em",
          }}
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
            style={{ borderTopRightRadius: "1em", borderTopLeftRadius: "1em" }}
          />
          <MDBCardBody>
            <MDBCardTitle>NAME :{Data.Name} </MDBCardTitle>
            <MDBCardTitle>AUTHOR :{Data.Author} </MDBCardTitle>
            <MDBCardTitle>YEAR :{Data.Year} </MDBCardTitle>
            <MDBCardTitle>PUBLICATION :{Data.Publication} </MDBCardTitle>
            <MDBCardTitle>AVAILABILITY :{Data.Availability} </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Read1;
