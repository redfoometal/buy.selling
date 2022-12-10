const db = require('../models');
const mongoose = require('mongoose');
const Users = db.users;
const Coments = db.coments; // Изменить схему как в Users
const Category = db.category; // Изменить схему как в Users
const Ad = db.ad; // Изменить схему как в Users

exports.createUser = (req, res) =>{
    //Validate request
    // if (!req.body.title){
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }
    res.send('Пришло')
    console.log(req.body)
}

exports.createAd = (req, res) =>{
    //Validate request
    // if (!req.body.title){
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }
    res.send('Пришло')
    console.log(req.body)
}

// var user = new Users({
//     name: 'Эрик',
//     lastname: 'Картман',
//     email: 'test@gmail.com',
//     avatar: '../assets/avatar/1.png',
//     password: '12345'
// });

// user
//     .save(user)
//     .then(data =>{
//         console.log('Данные загружены')
//     })
//     .catch(err =>{
//         console.log(err)
//     })