import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavScrollExample({ setSearchQuery }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Navbar expand="lg" className="mt-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <span className="text-3xl text-slate-700">
            Flexing <span className="text-orange-400 font-bold">Online</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 text-lg text-black"
            style={{ maxHeight: "100px", gap: "2em" }}
            navbarScroll
          >
            <div className="flex gap-5 bg-slate-100 rounded-3xl w-100 p-2 ">
              <Link to="/" className="no-underline text-black text-1xl">
                Home
              </Link>
              <Link to="/about" className="no-underline text-black text-1xl">
                About
              </Link>
              <Link to="/product" className="no-underline text-black text-1xl">
                Product
              </Link>
              <Link to="/contact" className="no-underline text-black text-1xl">
                Contact
              </Link>
            </div>
          </Nav>
          <div className="group m-100">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              className="input"
              onChange={handleSearchChange}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
