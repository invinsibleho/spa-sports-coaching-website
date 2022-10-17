const express = require("express");
const userRoutes = require("./routes/userRoutes.js");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());
dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send(`Server is running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});
