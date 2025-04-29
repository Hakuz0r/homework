const button = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal__close-modal')
const body = document.body


button.addEventListener('click', () => {
    modal.classList.add('modal-two')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal-two')
})

modal.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.classList.remove('modal-two')
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('modal-two')
    }
})