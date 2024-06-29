import express from "express";
import mysql2 from "mysql2";
import bcrypt from "bcrypt";

let databaseConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "Umaqondana@12",
  database: "siseko_db",
};

const database = mysql2.createConnection(databaseConfig);

database.connect((error) => {
  if (error) {
    console.log(`Error connecting to the database ${error}`);
    return;
  } else {
    console.log("Connected to the database");
  }
});

const router = express.Router();

router.get("/login", (req, res) => {
  //get all users where email = email then compare the password with the hashed password if they match then should login the user
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ?";
  database.query(query, [email], (error, results) => {
    if (results.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(`Error comparing passwords: ${err}`);
        return res.status(500).send("Error logging in user");
      }

      if (result) {
        res.json({ message: "User logged in successfully" });
      } else {
        res.status(400).send("Incorrect password");
      }
    });
  });
});

export default router;
