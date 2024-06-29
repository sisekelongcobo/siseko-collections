import mysql2 from "mysql2";

let databaseConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "Umaqondana@12",
  database: "siseko_db",
};

export const database = mysql2.createConnection(databaseConfig);

database.connect((error) => {
  if (error) {
    console.log(`Error connecting to the database ${error}`);
    return;
  } else {
    console.log("Connected to the database");
  }
});
