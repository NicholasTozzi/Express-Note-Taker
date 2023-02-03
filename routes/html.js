const path = require("path");
// const fs = require("fs");
const html = require("express").Router();

html.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

html.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = html;
