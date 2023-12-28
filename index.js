const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(cors());

app.get("/api/data", function (req, res) {
  res.sendFile(path.resolve("data.json"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is Running on port ${PORT}`);
});
