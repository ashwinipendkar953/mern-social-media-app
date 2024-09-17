const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes.js");
const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/user", userRouter);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
