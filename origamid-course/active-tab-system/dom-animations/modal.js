export const initModal = () => {
    const openButton = document.querySelector('[data-modal="open-button"');
    const closeButton = document.querySelector('[data-modal="close-button"');
    const modalContainer = document.querySelector('[data-modal="container"');
    const activeClass = 'active'

    function openModal(event) {
        event.preventDefault();

        if (modalContainer.classList.contains(activeClass)) {
            closeModal();;
        }

        else {
            modalContainer.classList.add(activeClass);

        }
    }

    function closeModal() {
        modalContainer.classList.remove(activeClass);

    }

    openButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);

}

