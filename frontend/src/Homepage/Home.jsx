import React from "react";
import "./login.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "92vh",
        overflow: "scroll initial",
        marginTop: "60px",
        position: "fixed",
      }}
    >
      <CDBSidebar
        textColor="#050505 "
        backgroundColor="#3b3b3b  "
        maxWidth="200px"
      >
        <CDBSidebarHeader>
          <a className="text-decoration-none" style={{ color: "#EEEEEE " }}>
            Sidebar
          </a>
          <i
            style={{ marginLeft: "70px", color: "#EEEEEE " }}
            className="fa fa-bars fa-large"
          ></i>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/table" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Books</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/book" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Create Books</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/client" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Client</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/createclient" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Create Client
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Customer
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/createcustomer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">
                Create Customer
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/team" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Team Members
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/createteam" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Create Team
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/order" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Order</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/createorder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Create Order</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Home;
