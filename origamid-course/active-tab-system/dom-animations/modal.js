export const initModal = () => {
    const openButton = document.querySelector('[data-modal="open-button"');
    const closeButton = document.querySelector('[data-modal="close-button"');
    const modalContainer = document.querySelector('[data-modal="container"');
    const activeClass = 'active'

    function openModal(event) {
        event.preventDefault();
        modalContainer.classList.add(activeClass);

    };

    function closeModal(event) {
        modalContainer.classList.remove(activeClass);

    };

    function clickOutsiteModal(event) {
        if (event.target === event.currentTarget) {
            closeModal()
        }

    };

    openButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', clickOutsiteModal);

}

