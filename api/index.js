// index.js
const express = require('express');
const cors = require('cors');
const routes = require('../routes/api.routes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение маршрутов
app.use('/api', routes);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});