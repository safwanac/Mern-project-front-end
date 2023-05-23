import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import axios from "axios";
import Home from "../Home";

function Clientread() {
  const [Data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8001/clientread1/${id}`).then((res) => {
      setData(res.data);
      console.log(res);
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
            height: "500px",
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
            <MDBCardTitle>Username:{Data.UserName}</MDBCardTitle>
            <MDBCardTitle>Email:{Data.Email}</MDBCardTitle>
            <MDBCardTitle>Signedstatus:{Data.Signedstatus}</MDBCardTitle>
            <MDBCardTitle>Role:{Data.Role}</MDBCardTitle>
            <MDBCardTitle>Phone Number:{Data.PhoneNumber}</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Clientread;

// const [Data, setData] = useState({})
//     const {id} = useParams()
//     console.log(id);
//     useEffect((id) => {
//        axios.get(`http://localhost:8001/clientread1/${id}`).then((res)=>{
//         setData(res.data)
//        })

//     }, [])
