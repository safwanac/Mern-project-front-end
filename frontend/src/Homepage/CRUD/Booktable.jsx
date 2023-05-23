import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Home from "../Home";

function Booktable() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    Data();
  }, []);
  const Data = async () => {
    const { data } = await axios.get("http://localhost:8001/read");
    setbook(data);
    console.log(data);
  };

  const dlt = async (_id) => {
    await axios.delete(`http://localhost:8001/delete/${_id}`);
    console.log(dlt);
  };
  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <Home />
      </div>
      <div style={{ marginLeft: "200px" }}>
        <MDBTable
          style={{ position: "fixed", maxWidth: "1030px" }}
          striped
          bordered
          hover
        >
          <MDBTableHead style={{ backgroundColor: "#07608F" }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Year</th>
              <th scope="col">Publication</th>
              <th scope="col">Availability</th>
              <th scope="col">Read</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {book.map((value) => {
              return (
                <tr key={value}>
                  <td>{value.Name}</td>
                  <td>{value.Author}</td>
                  <td>{value.Year}</td>
                  <td>{value.Publication}</td>
                  <td>{value.Availability}</td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/read1/${value._id}`}>
                        <MDBIcon fas icon="book-reader" />
                      </Link>
                    </button>
                  </td>
                  <td style={{ width: "20px" }}>
                    <button>
                      <Link to={`/update/${value._id}`}>
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

export default Booktable;
