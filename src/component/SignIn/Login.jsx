import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import About from "../About/About";
import classes from "./login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header/Header";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import Footer from "../Footer/Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigate();
  const passwordDOM = useRef();
  const emailDOM = useRef();

  async function handlelogin(e) {
    e.preventDefault();
    const emailValue = emailDOM.current.value;
    const passwordValue = passwordDOM.current.value;
    if (!emailValue || !passwordValue) {
      alert("please provide the the following information");
      return;
    }
    try {
      const { data } = await axios.post("/user/login", {
        email: emailValue,
        password: passwordValue,
      });
      alert("login succesfull");
      localStorage.setItem("token", data.token);
      navigation("/");
    } catch (error) {
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }
  return (
    <>
      <section className={classes.login_contanier}>
        <Header />
        <div className="container px-md-5">
          <div className="row">
            <div className="col-12 col-md-5 shadow auth mx-md-4 ">
              <div className={classes.login_inner}>
                <div className={classes.Carousel_inner}>
                  <div className="carousel-item active">
                    <h5>Login to your account</h5>
                    Don't have an accuont?
                    <span>
                      <Link to={"/register"}>Create a new account</Link>
                    </span>
                    <form onSubmit={handlelogin}>
                      <div className={classes.from_input}>
                        <input
                          type="text"
                          placeholder="Email address"
                          ref={emailDOM}
                        />
                      </div>
                      <br />
                      <div
                        className={`${classes.from_input} ${classes.password}`}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          ref={passwordDOM}
                        />
                        <span
                          className={classes.password_toggle}
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <FiEye />
                          ) : (
                            <FiEyeOff classNAme={classes.passHash} />
                          )}
                        </span>
                      </div>
                      <div className={classes.forget}>
                        <Link to={"/login"}>Forgot password</Link>
                      </div>
                      <div className={classes.btn}>
                        <button onClick={handlelogin} type="submit">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 ">
              <About />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
