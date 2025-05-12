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

const deleteTask = (event) => {
    const buttonParent = event.target.parentElement;
    const taskName = buttonParent.querySelector('.name').textContent;
    const dateName = buttonParent.querySelector('.date').textContent;
    const index = tasksArray.findIndex(current => current.task === taskName && current.date === dateName);

    tasksArray.splice(index, 1);
    renderArray();

    localStorage.setItem('taskList', JSON.stringify(tasksArray));

    console.log(localStorage.getItem('taskList'))



};

const renderArray = () => {
    tasksContainer.innerHTML = '';
    tasksArray.forEach(currrentTask => {
        tasksContainer.innerHTML += `
            <div class="do-container">
               <p class="name">${currrentTask.task}</p>
               <p class="date">${currrentTask.date}</p>
               <button onclick="deleteTask(event)" type="button">Delete</button>
           </div>`;
    });

};


renderArray()

addButton.addEventListener('click', addItem);





