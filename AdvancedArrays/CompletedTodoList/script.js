const todoInput = document.getElementById(`do-input`);
const dateInput = document.getElementById('date-input');
const addButton = document.getElementById('but');
const tasksContainer = document.getElementById('list-container');

let tasksArray = JSON.parse(localStorage.getItem('taskList')) || [];

const addItem = () => {
    const taskValue = todoInput.value;
    const dateValue = dateInput.value;

    tasksArray.push({
        task: taskValue,
        date: dateValue,
    });

    localStorage.setItem('taskList', JSON.stringify(tasksArray));
    console.log(localStorage.getItem('taskList'))


    renderArray();


};



const renderArray = () => {
    tasksContainer.innerHTML = '';
    tasksArray.forEach(currrentTask => {
        tasksContainer.innerHTML += `
            <div class="do-container">
               <p class="name">${currrentTask.task}</p>
               <p class="date">${currrentTask.date}</p>
               <button class="delete-button" type="button">Delete</button>
           </div>`;
    });


    document.querySelectorAll('.delete-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            tasksArray.splice(index, 1);
            localStorage.setItem('taskList', JSON.stringify(tasksArray));
            renderArray()
        });
    });


};


renderArray()

addButton.addEventListener('click', addItem);





