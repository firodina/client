import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-form-project.onrender.com",
});

export default axiosBase;
