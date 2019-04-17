const express = require("express");

const data = require("./data");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Backend");
});

routes.get("/lanches", (req, res) => {
  return res.json(data.lanches);
});

routes.get("/ingredientes", (req, res) => {
  return res.json(data.ingredientes);
});

module.exports = routes;
