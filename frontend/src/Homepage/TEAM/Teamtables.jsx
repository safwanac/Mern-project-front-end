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

function Teamtables() {
  const [Team, setTeam] = useState([]);
  useEffect(() => {
    Data();
  }, []);
  const Data = async () => {
    const { data } = await axios.get("http://localhost:8001/teamtable");
    setTeam(data);
  };

  const dlt = async (_id) => {
    await axios.delete(`http://localhost:8001/teamdelete/${_id}`);
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
              <th scope="col">Date Of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Description</th>
              <th scope="col">Role</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Read</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {Team.map((value) => {
              return (
                <tr key={value}>
                  <td>{value.Name}</td>
                  <td>{value.Email}</td>
                  <td>{value.DateOfBirth}</td>
                  <td>{value.Gender}</td>
                  <td>{value.Description}</td>
                  <td>{value.Role}</td>
                  <td>{value.PhoneNumber}</td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/teamread/${value._id}`}>
                        <MDBIcon fas icon="book-reader" />
                      </Link>
                    </button>
                  </td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/teamupdate/${value._id}`}>
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

export default Teamtables;
