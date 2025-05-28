// (function() {
//     const button = document.querySelector('.burger-icon')
//     const body = document.querySelector('.body')
//     const nav = document.querySelectorAll('.nav__link')

//     button.addEventListener('click', () => {
//         body.classList.toggle('body--opened-menu')
//     })

//     nav.forEach(link => {
//         link.addEventListener('click', () => {
//             body.classList.remove('body--opened-menu')
//         })
//     })
// })()

// ПРАВИЛЬНЫЙ ВАРИАНТ
// Переписал у Никиты, но убрал пару строчек, заменив метод add на toggle
// Сделал так, чтобы класс у боди убирался при нажатии клавиши esc
(function () {
    document.addEventListener('click', menu)
    document.addEventListener('keydown', menu)
    function menu(event) {
        if (event.type === 'keydown') {
            if (event.key === 'Escape') {
                document.body.classList.remove('body--opened-menu')
                return
            }
            return
        }
        const icon = event.target.closest('.burger-icon')
        const link = event.target.closest('.nav__link')

        if (!icon && !link) return
        if (document.documentElement.clientWidth > 900) return
        document.body.classList.toggle('body--opened-menu')
    }
})();

// modal window

(function () {
    document.addEventListener('click', modal)
    document.addEventListener('keydown', modal)
    function modal(e) {
        if (e.type === 'keydown') {
            if (e.key === 'Escape') {
                document.body.classList.remove('body--opened-modal')
                return
            }
        }

        const modal = e.target.closest('.modal')
        if (e.target === modal) {
            document.body.classList.remove('body--opened-modal')
        }

        const presentButton = e.target.closest('.button')
        if (presentButton) {
            document.body.classList.remove('body--opened-modal')
        }

        const openButton = e.target.closest('.about__img-button')
        const closeButton = e.target.closest('.modal__window-close')
        if (openButton) {
            document.body.classList.toggle('body--opened-modal');
            return
        }
        if (closeButton) {
            document.body.classList.remove('body--opened-modal')
        }
    }
})();




``






















