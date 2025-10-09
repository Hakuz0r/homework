// Получаем необходимые элементы
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.sidebar__toggle');

// Функция для переключения состояния сайдбара
function toggleSidebar() {
    sidebar.classList.toggle('collapsed');
}

// Добавляем обработчик события для кнопки
toggleButton.addEventListener('click', toggleSidebar);

// Добавляем обработчик события для адаптивности на мобильных устройствах
function checkWindowSize() {
    if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
}

// Проверяем размер окна при загрузке страницы
window.addEventListener('load', checkWindowSize);

// Проверяем размер окна при изменении размера окна
window.addEventListener('resize', checkWindowSize);