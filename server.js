// Dependencies
const express = require("express");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const path = require("path");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const hbs = exphbs.create({ helpers });

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/home-routes"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Starts the server to begin listening
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
