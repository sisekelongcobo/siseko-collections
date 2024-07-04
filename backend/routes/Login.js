import express from "express";
import { database } from "../database.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  database.query(query, [email], (error, results) => {
    if (results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(`Error comparing passwords: ${err}`);
        return res.status(500).json({ message: "Error logging in user" });
      }

      if (result) {
        res.json({ message: "User logged in successfully" });
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    });
  });
});

export default router;
