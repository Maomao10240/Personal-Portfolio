import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import navI2 from "../assets/img/nav-icon2.svg";
import navI1 from "../assets/img/nav-icon1.svg";
import navI3 from "../assets/img/nav-icon3.svg";

function Navba() {
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
    // <div className={scrolled ? "scroll" : "navbar"}>
    <div className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <div className="links">
            <Link to="/" className="a">
              Home
            </Link>
            <Link to="/projects" className="b">
              Projects
            </Link>
            <Link to="/experience" className="c">
              Experience
            </Link>
          </div>
        </Nav>

        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/maohua-pan-a943ab87/">
              <img src={navI1} alt="" />
            </a>
            <a href="#">
              <img src={navI2} alt="" />
            </a>
            <a href="#">
              <img src={navI3} alt="" />
            </a>
          </div>
          <button className="vvd" onClick={() => console.log("connect")}>
            <span>Let's Connect</span>
          </button>
        </span>
      </Container>
    </div>
  );
}

export default Navba;
