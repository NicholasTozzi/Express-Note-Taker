// On the back end, the application should include a db.json file that will be used to store and retrieve notes using the fs module.
//TODO: Heroku\

const express = require("express");
const api = require("./routes/api");
const html = require("./routes/html");
//application object & port declaration
const app = express();
const PORT = 4000; //will need to change to Heroku server
// ALL YOUR MIDDLEWARE AND ROUTES GO HERE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // middleware for parsing incoming json
//routes
app.use("/api", api);
app.use("/", html);
//Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
