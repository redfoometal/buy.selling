// - Наименование. Обязательное. Мин. длина 10 символов, макс. длина 100;
// - Описание объявления. Обязательное. Мин. длина 20 символов, макс. длина 1024 символа;
// - Дата публикации объявления. Обязательное. Дата публикации, обязательно для заполнения. По умолчанию — текущая дата;
// - Фотография. Обязательное. Формат: *.jpg, *.png;
// - Тип объявления. Обязательное. Один из вариантов: «Куплю» или «Продам»;
// - Количество комментариев. Рассчитывается автоматически.
// - Стоимость. Обязательное. Мин. 100, Макс. 200 000;
// - Автор объявления. Обязательное. Ссылка на сущность «Пользователь».
// - Категории. Обязательное. Ссылка на сущность «Категория». Объявление может принадлежать к нескольким категориям.

const mongoose = require('mongoose');

const Ad_Schema = mongoose.Schema({
    name: String,
    discription: String,
    created: { 
        type: Date,
        default: Date.now
    },
    photo: String,
    type_ad: String,
    amount_coments: Number,
    price: Number,
    user: { 
    	type: mongoose.Schema.Types.ObjectId, 
    	ref: 'Users' 
    },
    category: { 
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'Category' 
    },
},{
    timestamp: true
})
    
module.exports = mongoose.model('Ad', Ad_Schema);