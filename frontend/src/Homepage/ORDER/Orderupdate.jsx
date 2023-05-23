import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Orderupdate() {
  const [Data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8001/orderread/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    const {
      FirstName,
      LastName,
      OrderId,
      ProductNumber,
      Date,
      Street,
      Additional,
      Pincode,
      Place,
      Country,
      ContactNumber,
    } = Data;
    setFirstName(FirstName);
    setLastName(LastName);
    setOrderId(OrderId);
    setProductNumber(ProductNumber);
    setDate(Date);
    setStreet(Street);
    setAdditional(Additional);
    setPincode(Pincode);
    setPlace(Place);
    setCountry(Country);
    setContactNumber(ContactNumber);
  }, [Data]);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [OrderId, setOrderId] = useState("");
  const [ProductNumber, setProductNumber] = useState("");
  const [Date, setDate] = useState("");
  const dateref = useRef(null);
  const [Street, setStreet] = useState("");
  const [Additional, setAdditional] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Country, setCountry] = useState("");
  const [Place, setPlace] = useState("");
  const [ContactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();
  const click = async () => {
    await axios.put("http://localhost:8001/createorder", {
      FirstName,
      LastName,
      OrderId,
      ProductNumber,
      Date,
      Street,
      Additional,
      Pincode,
      Place,
      Country,
      ContactNumber,
    });
    navigate("/order");
  };

  const firstchange = (e) => {
    setFirstName(e.target.value);
  };
  const lastchange = (e) => {
    setLastName(e.target.value);
  };
  const orderchange = (e) => {
    setOrderId(e.target.value);
  };
  const productchange = (e) => {
    setProductNumber(e.target.value);
  };
  const datechange = (e) => {
    setDate(e.target.value);
  };
  const streetchange = (e) => {
    setStreet(e.target.value);
  };
  const additionalchange = (e) => {
    setAdditional(e.target.value);
  };
  const pincodechange = (e) => {
    setPincode(e.target.value);
  };
  const countrychange = (e) => {
    setCountry(e.target.value);
  };
  const placechange = (e) => {
    setPlace(e.target.value);
  };
  const contactchange = (e) => {
    setContactNumber(e.target.value);
  };
  return (
    <div>
      <div>
        <MDBContainer fluid className="h-custom">
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12" className="m-5">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow>
                    <MDBCol md="6" className="p-5 bg-white">
                      <h3
                        className="fw-normal mb-5"
                        style={{ color: "#4835d4" }}
                      >
                        General Infomation
                      </h3>

                      <MDBRow>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            placeholder="First Name"
                            size="lg"
                            id="form1"
                            value={FirstName}
                            type="text"
                            onChange={firstchange}
                          />
                        </MDBCol>

                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            placeholder="Last Name"
                            size="lg"
                            id="form2"
                            value={LastName}
                            type="text"
                            onChange={lastchange}
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Order Id"
                        size="lg"
                        id="form3"
                        value={OrderId}
                        type="text"
                        onChange={orderchange}
                      />

                      <MDBRow>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            placeholder="Product Number"
                            size="lg"
                            id="form4"
                            value={ProductNumber}
                            type="number"
                            onChange={productchange}
                          />
                        </MDBCol>

                        <MDBInput
                          wrapperClass="mb-4"
                          value={Date}
                          type="date"
                          size="lg"
                          id="form5"
                          ref={dateref}
                          onChange={datechange}
                        />
                      </MDBRow>
                    </MDBCol>

                    <MDBCol md="6" className="bg-indigo p-5">
                      <h3
                        className="fw-normal mb-5 text-white"
                        style={{ color: "#4835d4" }}
                      >
                        Contact Details
                      </h3>
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        placeholder="Street"
                        size="lg"
                        id="form5"
                        value={Street}
                        type="text"
                        onChange={streetchange}
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        placeholder="Additional Information"
                        size="lg"
                        id="form6"
                        value={Additional}
                        type="text"
                        onChange={additionalchange}
                      />

                      <MDBRow>
                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            placeholder="Pin Code"
                            size="lg"
                            id="form6"
                            value={Pincode}
                            type="text"
                            onChange={pincodechange}
                          />
                        </MDBCol>

                        <MDBCol md="6">
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            placeholder="Country"
                            size="lg"
                            id="form8"
                            value={Country}
                            type="text"
                            onChange={countrychange}
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        placeholder="Place"
                        size="lg"
                        id="form7"
                        value={Place}
                        type="text"
                        onChange={placechange}
                      />

                      <MDBRow>
                        <MDBCol md="5">
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            placeholder="Contact Number"
                            size="lg"
                            id="form9"
                            value={ContactNumber}
                            type="text"
                            onChange={contactchange}
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        labelClass="text mb-4"
                        label="I do accept the Terms and Conditions of your site."
                      />
                      <MDBBtn color="light" size="lg" onClick={click}>
                        Register
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Orderupdate;
