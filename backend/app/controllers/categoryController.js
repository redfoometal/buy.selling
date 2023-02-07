const db = require('../models');
const Category = db.category;
const Ad = db.ad;

// Отображение всех категорий
exports.viewCategory = async (req, res) => {
    try {
        const categorys = await Category.find();
        let categorys_name = [];
        categorys.forEach((category, index) => {
            categorys_name[index] = category.name;
        });
        res.send(categorys_name);
    } catch (error) {
        console.error('Ошибка отображения списка категорий:', error)
    }
}

// Отображение объявлений конкретной категории
exports.viewItemCategory = async (req, res) => {
    try {
        const itemCategory = await Ad.find({category: req.body.category_id});
        res.send(itemCategory);
    } catch (error) {
        console.error('Ошибка отображения категории:', error)
    }
}

// Создание категории
exports.createCategory = async (req, res) => {
    try {
        // Добавление данных в БД
        let category = new Category({
            name: req.body.name,
            img: req.body.image,
        });
        await category.save()
        res.send('Пришло')
    } catch (error) {
        console.error('Ошибка создания категории:', error);
    }
}