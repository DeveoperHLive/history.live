// Статьи хранятся в этом объекте
const articles = {
    1: {
        title: 'Статья за 1 год',
        content: 'Здесь информация о событиях первого года.'
    },
    2: {
        title: 'Статья за 2 год',
        content: 'Здесь информация о событиях второго года.'
    },
    3: {
        title: 'Статья за 3 год',
        content: 'Здесь информация о событиях третьего года.'
    },
    4: {
        title: 'Статья за 4 год',
        content: 'Здесь информация о событиях четвертого года.'
    },
    5: {
        title: 'Статья за 5 год',
        content: 'Здесь информация о событиях пятого года.'
    }
};

// Функция для отображения статьи
function showArticle() {
    const year = document.getElementById('year-input').value;
    const content = document.getElementById('article-content');

    if (year && articles[year]) {
        // Если статья для введенного года найдена
        content.innerHTML = `<h2>${articles[year].title}</h2><p>${articles[year].content}</p>`;
    } else if (year) {
        // Если статьи для этого года нет
        content.innerHTML = "<h2>Статья не найдена</h2><p>Информация по данному году отсутствует.</p>";
    } else {
        // Если поле пустое
        content.innerHTML = "<h2>Выберите год</h2><p>Пожалуйста, введите год для просмотра статьи.</p>";
    }
}

// Загружаем статью при старте страницы
document.addEventListener('DOMContentLoaded', function() {
    showArticle();
});

// Функция для открытия модального окна
function showAbout() {
    document.getElementById("about-modal").style.display = "block";
}

// Функция для закрытия модального окна
function closeAbout() {
    document.getElementById("about-modal").style.display = "none";
}

// Закрытие модального окна, если пользователь кликает вне него
window.onclick = function(event) {
    if (event.target == document.getElementById("about-modal")) {
        closeAbout();
    }
}
