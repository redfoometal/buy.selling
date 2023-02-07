const db = require('../models');
const mongoose = require('mongoose');
const { category } = require('../models');
const Coments = db.coments;
const Category = db.category;
const Ad = db.ad;

exports.Test = async (req, res) =>{

    const users = await Ad.findOne({ type_ad: 'Продам' }).populate('user');
    console.log(users.user.name);
}