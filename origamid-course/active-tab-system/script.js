const tabClickMenu = document.querySelectorAll('.js-tabmenu li');

const tabDescriptions = document.querySelectorAll('.js-tab-description aside');


const openTabDesc = (index) => {
    tabDescriptions.forEach(box => box.classList.remove('active'));
    tabDescriptions[index].classList.add('active');
}


tabClickMenu.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        openTabDesc(index);
    })
})

