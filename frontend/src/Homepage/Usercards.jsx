import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { newcontext } from "./Contextprovider";
import axios from "axios";

function Usercards() {
  const [localdata, setlocaldata] = useState([]);

  const { fetch, setfetch } = useContext(newcontext);

  useEffect(() => {
    axios.get("http://localhost:8001/read").then(res => {
      setlocaldata(res.data);
      // setfetch(res.data)
    })
  }, []);
  console.log(fetch);

    localStorage.setItem("cartdata", JSON.stringify(fetch));

  

  return (
    <div style={{display: 'flex',paddingTop: '65px',overflow: 'auto',flexWrap: 'nowrap'}}>
      {localdata.map((item) => {
        return (
          <MDBCard style={{ marginRight: "15px", width: "16rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Name:{item.Name}</MDBCardTitle>
              <MDBListGroup flush>
                <MDBListGroupItem>Author:{item.Author}</MDBListGroupItem>
                <MDBListGroupItem>Year:{item.Year}</MDBListGroupItem>
                <MDBListGroupItem>
                  Publication:{item.Publication}
                </MDBListGroupItem>
                <MDBListGroupItem>
                  Availability:{item.Availability}
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
            <MDBCardFooter>
              <MDBBtn
                onClick={() => setfetch(oldvalue => [...oldvalue, item])}
              >
                Add To Cart
              </MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        );
      })}
    </div>
  );
}

export default Usercards;
