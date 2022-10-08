import { User } from "../models/Users.js";
const session = require("express-session");
const express = require("express");
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
