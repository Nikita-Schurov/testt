const express = require('express');
const cors = require('cors');
const path = require('path'); // Импортируйте модуль path
const app = express();

// Разрешить все CORS-запросы (для целей разработки)
app.use(cors());

const port = 3000;

// Установка маршрута для отдачи index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Теперь path доступен
});

// Определите API для вычисления квадратного корня
app.get('/api/sqrt', (req, res) => {
    const number = parseFloat(req.query.number);
    if (isNaN(number)) {
        return res.status(400).json({ error: 'Некорректное число' });
    }
    const result = Math.sqrt(number);
    res.json({ result });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
