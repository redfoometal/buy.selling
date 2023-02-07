const db = require('../models');
const Users = db.users;


exports.createUser = async(req, res) =>{
    //Validate request

    // Проверка на корректность email
    let regex_email = /^[\w]{1}[\w'-'\.]+@[\w-]+\.[a-z]{2,4}$/i;
    if(!regex_email.exec(req.body.email)){
        res.status(400).send('Некорректный email')
        return
    }

    // Проверка на корректность имени
    if(!(req.body.name.length > 0 && req.body.name.length <= 15 && !req.body.name.match(/[0-9]/))){
        res.status(400).send('Некорректное имя')
        return
    }

    // Проверка на корректность фамилии
    if(!(req.body.lastname.length > 0 && req.body.lastname.length <= 15 && !req.body.lastname.match(/[0-9]/))){
        res.status(400).send('Некорректная фамилия')
        return
    }

    // Проверка наличия пароля
    if(!req.body.password){
        res.status(400).send('Некорректный пароль')
        return
    }

    // Добавление данных в БД
    let user = new Users({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        avatar: req.body.avatar,
        password: req.body.password
    });
    try {
        await user.save();
        res.send('Пришло')
    } catch (error) {
        handleError(error);
    }
}