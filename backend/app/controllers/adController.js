const db = require('../models');
const Category = db.category;
const Ad = db.ad;

exports.createAd = async (req, res) =>{
    try {
    //Validate request
    // Наименование. Обязательное. Мин. длина 10 символов, макс. длина 100;
        if(!(req.body.name.length >= 10 && req.body.name.length <= 100)){
            res.status(400).send('Некорректное наименование');
            return
        }

        // Описание объявления. Обязательное. Мин. длина 20 символов, макс. длина 1024 символа;
        if(!(req.body.discription.length >= 20 && req.body.discription.length <= 1024)){
            res.status(400).send('Некорректная длина описания');
            return
        }

        // Фотография. Обязательное. Формат: *.jpg, *.png;
        if(!(req.body.photo.match(/[*\.jpg$]/) && req.body.photo.match(/[*\.png$]/))){
            res.status(400).send('Некорректный формат фото');
            return
        }

        // Тип объявления. Обязательное. Один из вариантов: «Куплю» или «Продам»;
        if(!(req.body.type_ad == 'Куплю' || req.body.type_ad == 'Продам')){
            res.status(400).send('Некорректный тип объявления');
            return
        }

        // Стоимость. Обязательное. Мин. 100, Макс. 200 000;
        if(!(req.body.price >= 100 && req.body.price <= 200000)){
            res.status(400).send('Некорректная стоимость');
            return
        }

        // Автор объявления. Обязательное. Ссылка на сущность «Пользователь».
        if(!(req.body.user_id)){
            res.status(400).send('Ошибка пользователя');
            return
        }

        // Категории. Обязательное. Ссылка на сущность «Категория». Объявление может принадлежать к нескольким категориям.
        if(!(req.body.category_id)){
            res.status(400).send('Ошибка категории');
            return
        }

        let ad = new Ad({
            name: req.body.name,
            discription: req.body.discription,
            photo: req.body.photo,
            type_ad: req.body.type_ad,
            price: req.body.price,
            user: req.body.user_id,
            category: req.body.category_id
        })
        await ad.save()
        await Category.findOneAndUpdate({_id : req.body.category_id}, {$inc : {'amount_ad' : 1}});
        res.send('Пришло')
    } catch (error) {
        console.error('Err:', error);
    }
}