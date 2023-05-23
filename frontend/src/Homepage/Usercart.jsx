import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { newcontext } from "./Contextprovider";


function Usercart() {
  const { fetch } = useContext(newcontext);
  const [item, setitem] = useState([]);
  const [count, setcount] = useState([]);

  useEffect(() => {
    const localdata = JSON.parse(localStorage.getItem("cartdata"));
    setitem(localdata);
    const initialCounts = {};
    localdata.forEach((item, index) => {
      initialCounts[index] = 0;
    });
    setcount(initialCounts);
  }, []);

  console.log(fetch);

  const handleCountChange = (e, index) => {
    const newCount = parseInt(e.target.value);
    setcount((prevState) => ({
      ...prevState,
      [index]: newCount,
    }));
  };

  const handleIncrement = (index) => {
    setcount((prevState) => ({
      ...prevState,
      [index]: (prevState[index] || 0) + 1,
    }));
  };

  const handleDecrement = (index) => {
    setcount((prevState) => ({
      ...prevState,
      [index]: Math.max((prevState[index] || 0) - 1, 0),
    }));
  };

  const handleRemove = (index) => {
    setitem((prevItems) => {
      const updateItems = [...prevItems];
      updateItems.splice(index, 1);
      return updateItems;
    });
  };
  return (
    <div style={{ paddingTop: "50px" }}>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                  Shopping Cart
                </MDBTypography>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {item.map((item, index) => {
                return (
                  <MDBCard key={index} className="rounded-3 mb-4">
                    <MDBCardBody className="p-4">
                      <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <h1 className="lead fw-normal mb-2">
                            Name:{item.Name}
                          </h1>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <p className="lead fw-normal mb-2">
                            Author:{item.Author}
                          </p>
                          <p>
                            <span className="text-muted">
                              Publication:{item.Publication}{" "}
                            </span>
                            <br></br>
                            <span className="text-muted">
                              Availability:{item.Availability}{" "}
                            </span>
                          </p>

                        </MDBCol>
                        <MDBCol
                          md="3"
                          lg="3"
                          xl="2"
                          className="d-flex align-items-center justify-content-around"
                        >
                          <MDBBtn
                            color="link"
                            className="px-2 "
                            onClick={() => handleDecrement(index)}
                            disabled={count[index] <= 0}
                          >
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>

                          <MDBInput
                            min={0}
                            value={count[index] || 0}
                            type="number"
                            size="sm"
                            onChange={(e) => handleCountChange(e, index)}
                          />

                          <MDBBtn
                            color="link"
                            className="px-2"
                            onClick={() => handleIncrement(index)}
                          >
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                          <MDBTypography tag="h5" className="mb-0">
                            Year:{item.Year}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <MDBBtn
                            className="btn"
                            onClick={() => handleRemove(index)}
                          >
                            <MDBIcon fas icon="trash text-danger" size="lg" />
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                );
              })}
              ;
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default Usercart;
