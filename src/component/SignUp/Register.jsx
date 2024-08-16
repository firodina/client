import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import About from "../About/About";
import classes from "./register.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigate();
  const userNameDom = useRef();
  const fristNameDOM = useRef();
  const lastNameDOM = useRef();
  const passwordDOM = useRef();
  const emailDOM = useRef();

  async function handlesubmit(e) {
    e.preventDefault();
    const usernameValue = userNameDom.current.value;
    const firstnameValue = fristNameDOM.current.value;
    const lastnameValue = lastNameDOM.current.value;
    const emailValue = emailDOM.current.value;
    const passwordValue = passwordDOM.current.value;
    if (
      !usernameValue ||
      !firstnameValue ||
      !lastnameValue ||
      !emailValue ||
      !passwordValue
    ) {
      alert("please procide the the following information");
      return;
    }
    try {
      await axios.post("/user/register", {
        username: usernameValue,
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });

      alert("succesfull register, please login");
      navigation("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return (
    <>
      <section className={classes.register_contanier}>
        <Header />
        <div className="container px-md-5">
          <div className="row">
            <div className="col-12 col-md-5 shadow auth mx-md-4 ">
              <div className={classes.login_inner}>
                <div className={classes.Carousel_inner}>
                  <div className="carousel-item active">
                    <h5>Join the network</h5>
                    <div>
                      Already have an account?
                      <span>
                        <Link to={"/login"}>Sign in</Link>
                      </span>
                    </div>
                    <form onSubmit={handlesubmit}>
                      <div className={classes.from_input}>
                        <input
                          type="text"
                          placeholder="username"
                          ref={userNameDom}
                        />
                      </div>
                      <br />
                      <div className={classes.fNlN}>
                        <div className={classes.from_input}>
                          <input
                            type="text"
                            placeholder="fristname"
                            ref={fristNameDOM}
                          />
                        </div>
                        <br />
                        <div className={classes.from_input}>
                          <input
                            type="text"
                            placeholder="lastname"
                            ref={lastNameDOM}
                          />
                        </div>
                      </div>
                      <br />
                      <div
                        className={`${classes.from_input} ${classes.password}`}
                      >
                        <input type="text" placeholder="email" ref={emailDOM} />
                      </div>
                      <br />
                      <div className={classes.from_input}>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          ref={passwordDOM}
                        />
                        <span
                          className={classes.password_toggle}
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FiEye /> : <FiEyeOff />}
                        </span>
                      </div>
                      <p>
                        <span>
                          {" "}
                          I agree to the{" "}
                          <Link to={"login"}>Privacy Policy</Link> and{" "}
                          <Link>terms and service</Link>
                        </span>
                      </p>
                      <div className={classes.btn}>
                        <button onClick={handlesubmit} type="submit">
                          Register
                        </button>
                      </div>
                    </form>
                    <span>
                      {" "}
                      <Link to={"/login"}>Already have an account</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <About />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Register;
