import {
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Home from "../Home";
import { Link } from "react-router-dom";
import axios from "axios";

function Ordertable() {
  const [order, setorder] = useState([]);
  useEffect(() => {
    Data();
  }, []);
  const Data = async () => {
    const { data } = await axios.get("http://localhost:8001/ordertable");
    setorder(data);
  };

  const dlt = async (_id) => {
    await axios.delete(`http://localhost:8001/orderdelete/${_id}`);
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
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Order Id</th>
              <th scope="col">ProductNumber</th>
              <th scope="col">Date</th>
              {/* <th scope='col'>Street</th>
          <th scope='col'>Additional INF</th>
          <th scope='col'>Pin Code</th>
          <th scope='col'>Place</th>
          <th scope='col'>Country</th>
          <th scope='col'>Contact Number</th> */}
              <th scope="col">Read</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {order.map((value) => {
              return (
                <tr key={value}>
                  <td>{value.FirstName}</td>
                  <td>{value.LastName}</td>
                  <td>{value.OrderId}</td>
                  <td>{value.ProductNumber}</td>
                  <td>{value.Date}</td>
                  {/* <td>{value.Street}</td>
            <td>{value.Additional}</td>
            <td>{value.Pincode}</td>
            <td>{value.Place}</td>
            <td>{value.Country}</td>
            <td>{value.ContactNumber}</td> */}
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/orderread/${value._id}`}>
                        <MDBIcon fas icon="book-reader" />
                      </Link>
                    </button>
                  </td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/orderupdate/${value._id}`}>
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

export default Ordertable;
