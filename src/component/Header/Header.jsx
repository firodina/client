import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { useContext } from "react";
import { AppState } from "../../App";
import { useNavigate } from "react-router-dom";

function Header() {
  //  const { user } = useContext(AppState);
  const { isLoggedIn, logout } = useContext(AppState);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <section
      className={`navbar navbar-expand-lg fixed-top shadow-sm ${classes.header_contanier}`}
    >
      <div className="container px-md-4">
        <div className="navbar-brand">
          <Link to={"/"}>
            <img
              src="https://forum.ibrodev.com/assets/evangadi-logo-5fea54cc.png"
              alt="evangadi-form"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body links">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link " to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  How it works
                </Link>
              </li>

              <li className="nav-item ">
              {isLoggedIn ? (
                  <button
                    data-bs-dismiss="offcanvas"
                    className={`nav-link  ${classes.sign}`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button
                      data-bs-dismiss="offcanvas"
                      className={`nav-link ${classes.sign}`}
                    >
                      SIGN IN
                    </button>
                  </Link>
                )}
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
