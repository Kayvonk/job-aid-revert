const db = require('../models');
const Sequelize = require('sequelize')
// const express = require('express')
// const router = express.Router()
// const customerController = require('../controllers/customer_controller')

// router.get('/customer', customerController.view)
// router.get('/user', userController.view)

module.exports = (app) => {
    //



        }).then((dbMember) => res.json(dbMember));
    });
    //
    // app.get('/api/customers', (req, res) => {
    //     // Here we add an "include" property to our options in our findAll query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Post
    //     db.Customer.findAll({
    //         where: req.query,
    //         include: [db.Post],
    //     }).then((dbCustomer) => res.json(dbCustomer));
    // });

    app.post('/api/search', (req, res) => {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        console.log(req.body)
        db.Customer.findAll({

    app.get('/api/customers'), (req, res) => {
        console.log("success")
        db.Customers.findAll({

            where: {
                firstName: req.params.search
            }

        })
    }
    // .then(data => res.render('customer', { customer: data }))


}





//     app.get('/api/members/:id', (req, res) => {
//         // Here we add an "include" property to our options in our findOne query
//         // We set the value to an array of the models we want to include in a left outer join
//         // In this case, just db.Post
//         db.Member.findOne({
//             where: {
//                 email: req.params.email,
//             },

//         }).then((dbMember) => res.json(dbMember));
//     });
//     //
//     // app.get('/api/customers', (req, res) => {
//     //     // Here we add an "include" property to our options in our findAll query
//     //     // We set the value to an array of the models we want to include in a left outer join
//     //     // In this case, just db.Post
//     //     db.Customer.findAll({
//     //         where: req.query,
//     //         include: [db.Post],
//     //     }).then((dbCustomer) => res.json(dbCustomer));
//     // });

//     app.get('/api/customer/', (req, res) => {
//         // Here we add an "include" property to our options in our findOne query
//         // We set the value to an array of the models we want to include in a left outer join
//         // In this case, just db.Post
//         db.Customer.findAll({
//             where: {
//                 $or: [{
//                     id: req.params.id
//                 },
//                 { firstName: req.body.firstName },
//                 { lastName: req.body.lastName },
//                 { email: req.body.email },
//                 { streetAddress: req.body.streetAddress },
//                 { streetAddressL2: req.body.streetAddressL2 },
//                 { phoneNumber: req.body.phoneNumber },
//                 ]
//             },
//         }).then((dbCustomer) => res.json(dbCustomer))
//     });

//     app.post('/api/customers', (req, res) => {
//         db.Customer.create(req.body).then((dbCustomer) => res.json(dbCustomer));
//     });

//     app.delete('/api/customers/:id', (req, res) => {
//         db.Customer.destroy({
//             where: {
//                 id: req.params.id,

//             },
//         }).then((dbCustomer) => res.json(dbCustomer));
//     });


// };
