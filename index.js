const { destinations } = require("./db");

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const server = express();

server.use(cors());

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

server.get("/", (req, res) => {
  console.log("route hit");
  res.send(destinations);
});
