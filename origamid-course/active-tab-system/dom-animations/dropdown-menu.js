export const initDropdown = () => {

    const dropdownButton = document.querySelector('[data-dropdown]');

    ['click', 'touchstart'].forEach(userEvent => dropdownButton.addEventListener(userEvent, handleClick))

    function handleClick(event) {
        this.classList.add('active');
        clickOutside(this, () => {
            this.classList.remove('active');
        });

    }

    function clickOutside(element, callback) {
        const html = document.documentElement;
        const outside = 'data-outside'

        if (!element.hasAttribute(outside)) {
            console.log('has outside');
            html.addEventListener('click', handleClickOutside);
            element.setAttribute(outside, '');
        }

        function handleClickOutside(event) {
            if (!element.contains(event.target)) {
                callback();
                html.removeEventListener('click', handleClickOutside);
                element.removeAttribute(outside);
            }
        };
    };

}



