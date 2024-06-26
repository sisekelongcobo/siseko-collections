import express from "express";
import cors from "cors";
import test from "./routes/test.js";

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", test);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
