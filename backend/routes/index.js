import express from "express";
const router = express.Router();
import {
  saveMovement,
  getMovements,
  getMovement,
  editMovement,
  deleteMovement,
} from "../controllers/MovementsController.js";
import {saveUsers, getUsers} from "../controllers/UsersController.js";

router.get("/", (req, res) => {
  res.send("Budget");
});

// Add movement on DB
router.post("/movements", saveMovement);

// Get movements from DB
router.get("/movements", getMovements);

// Get a single movement by id
router.get("/movements/:id", getMovement);

// Edit movement on DB
router.put("/movements/:id", editMovement);

// Delete movement on DB
router.delete("/movements/:id", deleteMovement);

// Add user on DB
router.post("/users", saveUsers);

// Get users from DB
router.get("/users", getUsers);

export default router;
