// - Имя. Обязательное. Мин. длина 1 символ, макс. длина 15 символов;
// - Фамилия. Обязательное. Мин. длина 1 символ, макс. длина 15 символов;
// - Электронная почта. Обязательное. Валидный адрес электронной почты;
// - Аватар пользователя. Необязательное. Изображение пользователя в формате .jpg или .png;
// - Пароль. Обязательное. Мин. длина 6 символов, макс. длина 12 символов.

const mongoose = require('mongoose');

const Users_Schema = mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    avatar: String,
    password: String
},{
    timestamps: true
})

module.exports = mongoose.model('users', Users_Schema);