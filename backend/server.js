import express from "express";
import cors from "cors";
import registerRouter from "./routes/register.js"; // Note the import path
import loginRouter from "./routes/Login.js"; // Note the import path
import MoviesRouter from "./routes/test.js"; // Note the import path
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/register", registerRouter);
app.use("/", loginRouter);
app.use("/", MoviesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
