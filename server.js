const express = require("express"),
  app = express(),
  cors = require("cors"),
  port = 3000;

  app.get("/:search", (req, res) => res.send("Hello there."));