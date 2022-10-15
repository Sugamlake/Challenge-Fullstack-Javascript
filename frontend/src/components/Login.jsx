import React, { useState } from "react";
import { withRouter } from "react-router";
import axiosClient from "../config/axios";
import Back from "./Back";
import Error from "./Error";

const Login = ({ setConsult, history }) => {
  // Create state as an object
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Verify error
  const [error, setError] = useState(false);

  // Form Read
  const refreshState = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Send req to API
  const loginUser = (e) => {
    e.preventDefault();

    if (user.username === "" || user.password === "") {
      setError(true);
      return;
    } else {
      setError(false);
      axiosClient
        .post("/login", user)
        //get login data from API and compare with user input using get or post
        .then((res) => {
          setConsult(true);
          // const users = res.data;
          // const userFound = users.find(
          //   (u) => u.email === user.email && u.password === user.password
          // );

          if (res.data?.loggedin) {
            localStorage.setItem("id", res.data.userId);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("email", res.data.email);
            history.push("/");
          } else {
            setError(true);
          }

          // Redirect
          //   history.push("/");
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h4>Login</h4>
        <Back />
        <form onSubmit={loginUser}>
          <div className="u-full-width">
            <label htmlFor="email-form">Email</label>
            <input
              className="u-full-width"
              type="email"
              placeholder="example@mail.com"
              id="email-form"
              onChange={refreshState}
              name="email"
            />
          </div>
          <div className="row">
            <div className="u-full-width">
              <label htmlFor="password-form">Password</label>
              <input
                className="u-full-width"
                type="password"
                placeholder="password"
                id="password-form"
                onChange={refreshState}
                name="password"
              />
            </div>
          </div>
          <input
            className="button-primary u-full-width"
            type="submit"
            value="Submit"
          />
        </form>
        {error ? <Error message="All fields are required" /> : null}
      </div>
    </div>
  );
};

export default withRouter(Login);
