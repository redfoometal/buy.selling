// - Текст комментария. Обязательное. Мин. длина 5 символов, макс. длина 1024 символа;
// - Автор комментария. Обязательное. Ссылка на сущность «Пользователь».

const mongoose = require('mongoose');

const Coments_Schema = mongoose.Schema({
    text: String,
    author: String
})

module.exports = mongoose.model('Coments', Coments_Schema);