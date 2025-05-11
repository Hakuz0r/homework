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
})()






























