// modal window

(function () {
    document.addEventListener('click', modal)
    document.addEventListener('keydown', modal)
    function modal(e) {
        if (e.type === 'keydown') {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('active')
                });
                document.activeElement.blur();
            }
        }

        const modal = e.target.closest('.modal')
        if (modal && e.target === modal) {
            modal.classList.remove('active');
            return;
        }

        const consultationButton = e.target.closest('.button')
        const closeButton = e.target.closest('.modal__window-close')
        const openButtonFirst = e.target.closest('.header__button-first')
        const openButtonSecond = e.target.closest('.headphone-button')

        if (consultationButton) {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active')
            });
        }

        if (closeButton) {
            const modalId = closeButton.getAttribute('data-modal');
            if (modalId) {
                const modalTarget = document.getElementById(modalId);
                if (modalTarget) {
                    modalTarget.classList.remove('active');
                } else {
                    console.error(`Modal with ${modalId} not found`)
                }
                return
            }
        };


        if (openButtonFirst) {
            const modalId = openButtonFirst.getAttribute('data-modal');
            if (modalId) {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('active')
                });

                const modalTarget = document.getElementById(modalId);

                if (modalTarget) {
                    modalTarget.classList.add('active');
                } else {
                    console.error(`Modal with ${modalId} not found`);
                }
                return;
            }
        }

        if (openButtonSecond) {
            const modalId = openButtonSecond.getAttribute('data-modal');
            if (modalId) {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.remove('active')
                });

                const modalTarget = document.getElementById(modalId);

                if (modalTarget) {
                    modalTarget.classList.add('active');
                } else {
                    console.error(`Modal with ${modalId} not found`);
                }
                return;
            }
        };
    }

    // accordeon

    const accordionLists = document.querySelectorAll('.accordion-list')

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpened = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            e.preventDefault()
            if (!accordionControl) return

            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpened && accordionItem != accordionOpened) {
                accordionOpened.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }

        });
    });

})();