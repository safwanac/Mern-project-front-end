import {
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Home from "../Home";
import axios from "axios";
import { Link } from "react-router-dom";

function Clienttable() {
  const [client, setclient] = useState([]);
  useEffect(() => {
    datas();
  }, []);
  const datas = async () => {
    const { data } = await axios.get("http://localhost:8001/readclient");
    setclient(data);
    console.log(data);
  };
  const dlt = async (_id) => {
    await axios.delete(`http://localhost:8001/deleteclient/${_id}`);
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
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Signed Status</th>
              <th scope="col">Role</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Read</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {client.map((value) => {
              return (
                <tr key={value}>
                  <td>{value.Name}</td>
                  <td>{value.UserName}</td>
                  <td>{value.Email}</td>
                  <td>{value.SignedStatus}</td>
                  <td>{value.Role}</td>
                  <td>{value.PhoneNumber}</td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/readclient/${value._id}`}>
                        <MDBIcon fas icon="book-reader" />
                      </Link>
                    </button>
                  </td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/updateclient/${value._id}`}>
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

export default Clienttable;
