import axios from "axios";

const API_URL = "http://localhost:8080/test/";

const register = (username, email, password) => {
  return axios.post("http://localhost:8080/test/user/add", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post("http://localhost:8080/test/", {
      username,
      password,
    })
    .then((response) => {
      
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  sessionStorage.clear();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
