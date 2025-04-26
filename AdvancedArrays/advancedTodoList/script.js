const addButton = document.getElementById('but');
const listContainer = document.getElementById('do-container');
const doInput = document.getElementById('do');
const dateInput = document.getElementById('date');

let listArray = [];

const addTodo = () => {

};

const renderList = () => {
    listContainer.innerHTML = '';
    listArray.push(d)

    listArray.forEach(current => {
        const newText = document.createElement('p');
        newText.textContent = current;
        listContainer.appendChild(newText);
    });

};


addButton.addEventListener('click', renderList);