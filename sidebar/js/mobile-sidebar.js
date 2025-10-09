// Функция для инициализации мобильного сайдбара
function initMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.createElement('button');
    const overlay = document.createElement('div');
    
    // Создаем кнопку переключения
    toggleBtn.className = 'sidebar-toggle';
    toggleBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
    `;
    
    // Создаем оверлей
    overlay.className = 'sidebar-overlay';
    
    // Добавляем элементы в DOM
    document.body.appendChild(toggleBtn);
    document.body.appendChild(overlay);
    
    // Обработчики событий
    function openSidebar() {
        sidebar.classList.add('is-open');
        overlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку body
    }
    
    function closeSidebar() {
        sidebar.classList.remove('is-open');
        overlay.classList.remove('is-visible');
        document.body.style.overflow = ''; // Возвращаем прокрутку
    }
    
    // Привязываем события
    toggleBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('is-open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
    
    overlay.addEventListener('click', closeSidebar);
    
    // Закрываем при изменении ориентации или ширины экрана
    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            closeSidebar();
        }
    });
}

// Запускаем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', initMobileSidebar);

// Добавляем класс для WordPress админ-панели
if (document.body.classList.contains('admin-bar')) {
    document.querySelector('.sidebar').classList.add('admin-bar-active');
}