export const outsideclick = (element, userEvents, callback) => {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
        userEvents.forEach(userEvent => html.addEventListener(userEvent, handleClickOutside));;
        element.setAttribute(outside, '');
    }

    function handleClickOutside(event) {
        if (!element.contains(event.target)) {
            callback();
            userEvents.forEach(userEvent => html.removeEventListener(userEvent, handleClickOutside));
            element.removeAttribute(outside);
        }
    };
};