// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //
  // POST route for saving a new post
  app.post('/api/customers', (req, res) => {
    console.log(req.body);
    db.Customer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      companyName: req.body.companyName,
      companyAddress: req.body.companyAddress,
      phoneNumber: req.body.phoneNumber,
      positionDepartment: req.body.positionDepartment,
      streetAddress: req.body.streetAddress,
      streetAddressL2: req.body.streetAddressL2,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      email: req.body.email,
      residentialCommercial: req.body.residentialCommercial
    }).then((dbCustomer) => res.json(dbCustomer));
  });


  // app.get('/api/customers', (req, res) => {
  //   console.log(req.body);
  //   db.Customer.create({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     companyName: req.body.companyName,
  //     companyAddress: req.body.companyAddress,
  //     phoneNumber: req.body.phoneNumber,
  //     positionDepartment: req.body.positionDepartment,
  //     streetAddress: req.body.streetAddress,
  //     streetAddressL2: req.body.streetAddressL2,
  //     city: req.body.city,
  //     state: req.body.state,
  //     zipCode: req.body.zipCode,
  //     email: req.body.email,
  //     residentialCommercial: req.body.residentialCommercial
  //   }).then((dbCustomer) => res.render(dbCustomer));
  // });



  app.post('/api/jobs', (req, res) => {
    console.log(req.body);
    db.JobType.create(req.body).then((dbJobType) => res.json(dbJobType));
  });


  // app.get('/api/jobs', (req, res) => {
  //   console.log(req.body);
  //   db.JobType.create({
  //     jobStreetAddress: req.body.jobStreetAddressInput,
  //     jobStreetAddressL2: req.body.jobStreetAddressL2Input,
  //     jobCity: req.body.jobCityInput,
  //     jobState: req.body.jobStateInput,
  //     jobZipCode: req.body.jobZipCodeInput,
  //     startDate: req.body.startDateInput,
  //     phase: req.body.phaseInput,
  //     typeOfWork: req.body.typeOfWorkInput,
  //     sourceOfWork: req.body.sourceOfWorkInput,
  //     status: req.body.statusInput
  //   }).then((dbJobType) => res.json(dbJobType));
  // });


















  // searchQuery1 = "Kayvon"

  // const { Op } = require("sequelize");
  // db.Customer.findAll({
  //   where: {
  //     firstName: {
  //       [Op.like]: '%' + searchQuery1 + '%'
  //     }
  //   }
  // });



  // const users = await db.Customer.findAll();
  // console.log(users.every(db.Customer => db.Customer instanceof Customer)); // true
  // console.log("All users:", JSON.stringify(users, null, 2));


};


// search route get customers with filter

      // $or:

// Delete everyone named "Jane"
// await User.destroy({
//   where: {
//     firstName: "Jane"
//   }
// });

