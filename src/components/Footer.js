import React from "react";
import navI2 from "../assets/img/nav-icon2.svg";
import navI1 from "../assets/img/nav-icon1.svg";
import navI3 from "../assets/img/nav-icon3.svg";

// import FacebookIcon from "../assets/img/nav-icon1.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={navI1} alt="" />
        <img src={navI2} alt="" />
        <img src={navI3} alt="" />
      </div>
      <p>&copy; 2024 </p>
    </div>
  );
}

export default Footer;
