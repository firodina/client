import React from "react";
import classes from "./footer.module.css";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className={classes.footer_contanier}>
      <div className="container px-sm-4">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div className="logo">
              <img
                src="https://forum.ibrodev.com/assets/evangadi-logo-footer-f73bca57.png"
                alt="evangadi-logo"
              />
            </div>
            <div className='d-flex '>
              <div className={classes.social}>
                <a to={""}>
                <FaFacebookF />

                </a>
              </div>
              <div className={classes.social}>
                <a to={""}>
                <FaInstagram />

                </a>
              </div>
              <div className={classes.social}>
                <a to={""}>
                <FaSquareYoutube />

                </a>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-4 ${classes.footer_links} `}>
            <h5>Useful Link</h5>
            <ul className="row">
              <li >
                <a to={''}>How it works</a>
              </li>
              <li>
              <a to={''}>Terms of Service</a>
            </li>
              <li>
              <a to={''}>Privacy policy</a>
              </li>
            </ul>

          </div>
          <div className={`col-12 col-md-4 ${classes.footer_links} `}>
            <h5>Contact Info</h5>
            <ul className="row">
              <li>Evangadi Nwtworks</li>
              <li>support@evangadi.com</li>
              <li>+1-202-386-2702</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
