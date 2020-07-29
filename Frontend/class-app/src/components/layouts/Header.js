import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as ReactBootStarp from "react-bootstrap";

class Header extends Component {
  logout() {}

  render() {
    return (
      <ReactBootStarp.Navbar bg="blue" expand="lg">
        <ReactBootStarp.Navbar.Brand href="#home">
          NB institute
        </ReactBootStarp.Navbar.Brand>
        <ReactBootStarp.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStarp.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStarp.Nav className="mr-auto">
            <ReactBootStarp.Nav.Link>
              <Link to={"/home"}> Home</Link>
            </ReactBootStarp.Nav.Link>
            <ReactBootStarp.Nav.Link href="#link">Link</ReactBootStarp.Nav.Link>
            <ReactBootStarp.Nav.Link href="#link">
              About Us
            </ReactBootStarp.Nav.Link>
            <ReactBootStarp.Nav.Link href="#link">
              Contact Us
            </ReactBootStarp.Nav.Link>
            <ReactBootStarp.NavDropdown
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <ReactBootStarp.NavDropdown.Item href="#action/3.1">
                <Link to={"/singIn"}> Sing In</Link>
              </ReactBootStarp.NavDropdown.Item>
              <ReactBootStarp.NavDropdown.Item href="#action/3.2">
                <Link to={"/signUp"}> Sing Up</Link>
              </ReactBootStarp.NavDropdown.Item>
              <ReactBootStarp.NavDropdown.Item
                href="#action/3.3"
                onClick={this.logout}
              >
                Logout
              </ReactBootStarp.NavDropdown.Item>
              <ReactBootStarp.NavDropdown.Divider />
              <ReactBootStarp.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootStarp.NavDropdown.Item>
            </ReactBootStarp.NavDropdown>
          </ReactBootStarp.Nav>
          <ReactBootStarp.Form inline>
            <ReactBootStarp.FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <ReactBootStarp.Button variant="outline-success">
              Search
            </ReactBootStarp.Button>
          </ReactBootStarp.Form>
        </ReactBootStarp.Navbar.Collapse>
      </ReactBootStarp.Navbar>
    );
  }
}

export default Header;
