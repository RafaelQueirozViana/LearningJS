export const initTabMenu = () => {

    const activeClass = 'ativo'
    const tabClickMenu = document.querySelectorAll('.js-tabmenu li');
    const tabDescriptions = document.querySelectorAll('[data-tab="content"] section');


    if (tabClickMenu.length && tabDescriptions.length) {

        const openTabDesc = (index) => {
            tabDescriptions.forEach(box => box.classList.remove(activeClass));
            const matchTextBox = tabDescriptions[index];

            matchTextBox.classList.add(activeClass);
        }

        tabClickMenu.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                openTabDesc(index)

            })
        })
    }
}
