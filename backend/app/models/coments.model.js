// - Текст комментария. Обязательное. Мин. длина 5 символов, макс. длина 1024 символа;
// - Автор комментария. Обязательное. Ссылка на сущность «Пользователь».

module.exports = mongoose =>{
    const coments = mongoose.model(
        'coments',
        mongoose.Schema({
            text: String,
            author: String
        }))
    return coments;
}