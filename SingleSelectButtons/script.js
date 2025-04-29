

function singleSelect(containerClass, activeClass) {
    const containers = document.querySelectorAll(containerClass);

    containers.forEach(container => {
        const buttons = container.querySelectorAll('button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove(activeClass));
                button.classList.add(activeClass);
            });
        });

    });





}

singleSelect('.single-selection', 'selected');




