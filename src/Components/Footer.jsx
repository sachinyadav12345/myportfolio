import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 footer-logo">
            <span style={{fontSize:"15px" , color:"white"}}>  <span >S</span>achin<span>Y</span>aduwanshi</span>
            </div>
            <div className="col-sm-6 ">
              <ul className="list-unstyled footer-link ">
                <li>Home</li>
                <li>About</li>
                <li>Skill & Experience</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="list-unstyled d-flex social-media">
                <li>
                  <div className="social-icon">
                    <FaInstagram  className="img-fluid social-icon-main"/>
                  </div>
                </li>
                 <li >
                <div className="social-icon">
                    <FaLinkedinIn   className="img-fluid social-icon-main"/>
                  </div>
                </li>
                <li>
                <div className="social-icon">
                    <FaFacebookF   className="img-fluid social-icon-main"/>
                  </div>
                </li>
                <li >
                <div className="social-icon">
                    <FaTwitter   className="img-fluid social-icon-main"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
