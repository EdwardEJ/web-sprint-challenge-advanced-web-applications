import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  let history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputHandler = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", formValues)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        history.push("/bubblepage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { username, password } = formValues;
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={inputHandler}
          placeholder="username"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={inputHandler}
          placeholder="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
