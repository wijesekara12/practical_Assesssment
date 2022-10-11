const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getOneUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

//register
router.post("/sign-up", registerUser);

//login
router.post("/login", loginUser);

//get one user
router.get("/current/:id", getOneUser);

//get all user
router.get("/getall", getAllUsers);

//update user
router.put("/updateUser", updateUser);

//delete user
router.delete("/deleteUser", deleteUser);

module.exports = router;
