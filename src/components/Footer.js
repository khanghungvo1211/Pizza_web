import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p> &copy; {new Date().getFullYear()}; Powered by Khang</p>
    </div>
  );
}

export default Footer;
