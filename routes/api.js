const fs = require("fs");
const uuid = require("../helpers/uuid");
const api = require("express").Router();
const { readAndAppend } = require("../helpers/fsutils");

api.get("/notes", (req, res) => {
  fs.readFile(__dirname + "/../db/db.json", (err, data) => {
    if (err) throw err;
    const getNotes = JSON.parse(data);
    res.json(getNotes);
  });
});

api.post("/notes", (req, res) => {
  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json("New note was added!");
  } else {
    res.err("error if note isn't added");
  }
});

// TODO-BONUS: DELETE /api/notes/:id should receive a query parameter that
// contains the id of a note to delete. To delete a note, you'll need to read
// all notes from the db.json file, remove the note with the given id property,
// and then rewrite the notes to the db.json file.

module.exports = api;
