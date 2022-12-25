// - Название категории. Обязательное. Мин. длина 3 символа, макс. длина 12 символов;
// - Изображение для категории. Обязательное. Путь к изображению.
// - Количество объявлений. Рассчитывается автоматически.

const mongoose = require('mongoose');

const Category_Schema = mongoose.Schema({
    name: String,
    img: String,
    amount_ad: Number
})

module.exports = mongoose.model('category', Category_Schema);