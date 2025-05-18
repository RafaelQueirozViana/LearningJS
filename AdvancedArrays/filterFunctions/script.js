const addButton = document.getElementById('but');
const listContainer = document.getElementById('list-container');
const doInput = document.getElementById('do');
const dateInput = document.getElementById('date');
const errorText = document.getElementById('error-text');


let listArray = JSON.parse(localStorage.getItem('doList')) || [];

const addTodo = () => {

    if (!doInput.value || !dateInput.value) {
        showError('please, fill in all fiel ds ')
    }

    else {
        showError('')

        listArray.push({
            task: doInput.value,
            date: dateInput.value,
        });

        renderList();
        
    }


};

const renderList = () => {
    localStorage.setItem('doList', JSON.stringify(listArray));

    console.log(localStorage.getItem('doList'))

    listContainer.innerHTML = '';
    listArray.forEach(current => {
        listContainer.innerHTML += `
        <div class="do-container">
               <p class="name">${current.task}</p>
               <p class="date">${current.date}</p>
               <button onclick="removeTask(event)" type="button">Delete</button>
           </div>`
    });
};

const removeTask = (event) => {
    const taskName = event.target.parentElement.querySelector('.name').textContent;
    const index = listArray.findIndex(current => current.task === taskName);
    listArray.splice(index, 1);
    renderList();
}

const showError = (message) => {
    errorText.textContent = message;
}

renderList();
addButton.addEventListener('click', addTodo);


