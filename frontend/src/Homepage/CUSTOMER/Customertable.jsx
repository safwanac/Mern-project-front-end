import React, { useEffect, useState } from "react";
import Home from "../Home";
import {
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import axios from "axios";

function Customertable() {
  const [customer, setcustomer] = useState([]);
  useEffect(() => {
    Data();
  }, []);
  const Data = async () => {
    const { data } = await axios.get("http://localhost:8001/customertable");
    setcustomer(data);
    console.log(data);
  };
  const dlt = async (_id) => {
    await axios.delete(`http://localhost:8001/customerdelete/${_id}`);
    console.log(dlt);
  };

  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <Home />
      </div>
      <div style={{ marginLeft: "200px" }}>
        <MDBTable bordered>
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Pincode</th>
              <th scope="col">Country</th>
              <th scope="col">Read</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {customer.map((value) => {
              return (
                <tr key={value}>
                  <td>{value.Name}</td>
                  <td>{value.Email}</td>
                  <td>{value.Address}</td>
                  <td>{value.City}</td>
                  <td>{value.State}</td>
                  <td>{value.Pincode}</td>
                  <td>{value.Country}</td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/customerread/${value._id}`}>
                        <MDBIcon fas icon="book-reader" />
                      </Link>
                    </button>
                  </td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/customerupdate/${value._id}`}>
                        <MDBIcon fas icon="edit" />
                      </Link>
                    </button>
                  </td>
                  <td style={{ width: "20px" }}>
                    <button onClick={() => dlt(value._id)}>
                      <MDBIcon fas icon="trash-alt" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default Customertable;
