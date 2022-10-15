import { User } from "../models/Users.js";
import session from "express-session";
import express from "express";
const app = express();

app.use(session({ secret: "secret", resave: true, saveUninitialized: true }));

export const saveUsers = async (req, res, next) => {
  try {
    await User.create(req.body);
    res.json({ message: "Added successfully" });
  } catch (error) {
    console.log(error);
    next();
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const Users = await User.findAll();
    res.json(Users);
  } catch (error) {
    console.log(error);
    next();
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user === null) {
      // res.send("Incorrect Username and/or Password!");
      res.json({
        message: "Incorrect Username and/or Password!",
        loggedin: false,
      });
      // res.redirect("/");
    } else {
      // req.session.loggedin = true;
      // req.session.username = username;
      res.json({
        message: "Logged in successfully",
        loggedin: true,
        userId: user.id,
        username: user.username,
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
    next();
  }
};

export const logout = async (req, res, next) => {
  try {
    localStorage.clear();
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    next();
  }
};
