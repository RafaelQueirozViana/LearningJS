//Arrays

// Main methods

// .push --> this will adds a value to the end of the array. Ex: array.push(100);
// .slice --> this will remove a value of the array. Ex: array.slice(index, 10) -This will remove the values of the array length between index and 10

const doArray = [];
const input = document.getElementById('inp');
const button = document.getElementById('but');
const displayCont = document.querySelector('.texts-container');


const addTodo = () => {
    doArray.push(input.value);
    const p = document.createElement('p');
    displayCont.appendChild(p);
    p.textContent = input.value;


    


}

button.addEventListener('click', addTodo);

