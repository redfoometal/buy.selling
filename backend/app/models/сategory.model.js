// - Название категории. Обязательное. Мин. длина 3 символа, макс. длина 12 символов;
// - Изображение для категории. Обязательное. Путь к изображению.
// - Количество объявлений. Рассчитывается автоматически.

module.exports = mongoose =>{
    const Category = mongoose.model(
        'Category',
        mongoose.Schema({
            name: String,
            img: String,
            amount_ad: Number
        }))

    return Category;
}