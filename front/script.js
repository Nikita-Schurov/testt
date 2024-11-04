const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Папка для сохранения
const distFolder = path.join(__dirname, 'dist');

// Создаем папку dist, если её нет
if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder);
}

// Копируем index.html в папку dist
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distFolder, 'index.html'));

// Устанавливаем зависимости
try {
    execSync('npm install --production', { stdio: 'inherit' });
    // Копируем папку node_modules в dist
    fs.cpSync(path.join(__dirname, 'node_modules'), path.join(distFolder, 'node_modules'), { recursive: true });
    console.log('Зависимости и index.html успешно сохранены в папку dist.');
} catch (error) {
    console.error('Ошибка при установке зависимостей:', error);
}