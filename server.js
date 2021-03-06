// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// Set Handlebars.
const exphbs = require('express-handlebars');
// var mysql = require("mysql2");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");


// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Requiring our routes

// const routes = require('./routes/customer-api-routes')
// app.use('/customer', routes);

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// require("./routes/customer-api-routes.js")(app);

require("./routes/html-routes.js")(app);
require("./routes/customer-api-routes.js")(app);

// require("./routes/job-api-routes.js")(app);


// Import routes and give the server access to them.
// const customerRoutes = require('./controllers/customer_controller.js');
// app.use(customerRoutes);
//need to create some for the login and others


require('dotenv').config();


// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
