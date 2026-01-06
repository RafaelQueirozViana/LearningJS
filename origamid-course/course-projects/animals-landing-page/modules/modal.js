export const initModal = () => {
    const openButton = document.querySelector('[data-modal="open-button"');
    const closeButton = document.querySelector('[data-modal="close-button"');
    const modalContainer = document.querySelector('[data-modal="container"');
    const activeClass = 'active'

    function toggleModal(event) {
        event.preventDefault();
        modalContainer.classList.toggle(activeClass);

    };

    function clickOutsiteModal(event) {
        if (event.target === event.currentTarget) {
            toggleModal(event);
        }

    };

    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', clickOutsiteModal);

}

