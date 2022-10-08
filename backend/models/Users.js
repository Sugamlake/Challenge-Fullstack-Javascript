import Sequelize from "sequelize";
import db from "../config/db.js";

export const User = db.define("users", {
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

db.sync({ force: false });
