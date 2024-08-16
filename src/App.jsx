import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/SignIn/Login";
import Register from "./component/SignUp/Register";
import axios from "./axios/axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer.jsx";
import About from "./component/About/About.jsx";

// import QuestionAndAnswer from "./pages/QuestionAndAnswer.jsx";
import AskQuestionPage from "./component/AskQuestion/AskQuestionPage.jsx";
import QuestionAndAnswer from "./component/Question&Answer/QuestionAndAnswer.jsx";

export const AppState = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem("token");
  const navigation = useNavigate();
  const [user, setuser] = useState({});

  const login = (credentials) => {
    setIsLoggedIn(true);
    setuser(credentials.username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setuser({});
    localStorage.removeItem("token");
    navigate("/login");
  };
  async function checkUser() {
    try {
      const { data } = await axios.get("/user/check", {
        headers: {
          Authorization: "Bearer" + token,
        },
      });
      setuser(data);
    } catch (error) {
      console.log(error.response);
      navigation("/login");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <AppState.Provider value={{ user, setuser, isLoggedIn, login, logout }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/question" element={<AskQuestionPage />} />
        <Route path="/question/:id" element={<QuestionAndAnswer />} />
        <Route path="/about" element={<About />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </AppState.Provider>
  );
}

export default App;
