const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.users = require("./users.model.js");
db.coments = require("./coments.model.js");
db.category = require("./сategory.model.js");
db.ad = require("./ad.model.js");

module.exports = db;