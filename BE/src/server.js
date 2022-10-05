const express = require("express");
const bodyParser = require("body-parser");
const SellerRouter = require("../routes/sellerRouter");
const cors = require("cors");
const server = express();
require("../db/config");
server.use(bodyParser.json());
server.use(cors());
server.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Credentials", true);
  next();
});
server.use("/seller", SellerRouter);
server.listen(8080);
console.log("Listening to port 8080");

module.exports = server;
