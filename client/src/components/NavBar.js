import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/eci_8.png";
import { NavLink, Link } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : "Notscrolled"}>
      <Container>
        <Navbar.Brand
          href="/"
        >
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
          <h1>
            <span>ECI.</span>
          </h1>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/myticket"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Generate Ticket
            </Nav.Link>
            <Nav.Link
              href="/rewards"
              className={
                activeLink === "rewards" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("rewards")}
            >
              Rewards
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Collaborations
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Submit Slogans
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Link
              to="/login"
              className="d-flex align-items-center gap-10 text-white text-decoration-none"
            >
              <button className="vvd small">
                <p className="mb-0">Login</p>
              </button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
