export const initDropdown = () => {

    const dropdownButton = document.querySelector('[data-dropdown]');

    ['click', 'touchstart'].forEach(userEvent => {
        dropdownButton.addEventListener(userEvent, handleClick);
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outsideClick(this, () => {
            this.classList.remove('active');
        });

    };

    function outsideClick(element, callback) {
        const html = document.documentElement;
        html.addEventListener('click', handleOutsideClick);

        function handleOutsideClick(event) {
            if (!element.contains(event.target)) {
                callback();

            }
        }

    };








}