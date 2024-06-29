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

router.post("/", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send("All fields are required");
  }

  const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
  database.query(checkEmailQuery, [email], (error, results) => {
    if (results.length > 0) {
      return res.status(400).send("Email already in use");
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(`Error hashing password: ${err}`);
        return res.status(500).send("Error registering user");
      }

      const query =
        "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
      const values = [firstName, lastName, email, hash];

      database.query(query, values, (error, result) => {
        if (error) {
          console.log(`Error registering user: ${error}`);
          return res.status(500).send("Error registering user");
        } else {
          res.json({ message: "User registered successfully" });
        }
      });
    });
  });
});

export default router;
