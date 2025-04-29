//Arrays

// Main methods

// .push --> this will adds a value to the end of the array. Ex: array.push(100);
// .slice --> this will remove a value of the array. Ex: array.slice(index, 10) -This will remove the values of the array length between index and 10

const doArray = JSON.parse(localStorage.getItem('doArray')) || [];
const input = document.getElementById('inp');
const button = document.getElementById('but');
const displayCont = document.querySelector('.texts-container');

const addTodo = () => {
    doArray.push(input.value);
    showList()
    localStorage.setItem('doArray', JSON.stringify(doArray));

}

const showList = () => {
    displayCont.innerHTML = '';

    doArray.forEach(array => {
        const newText = document.createElement('p');
        newText.textContent = array;
        displayCont.appendChild(newText);
    });
}

showList()

button.addEventListener('click', addTodo);


const array = ['hell33o', 'bye', 'hello', 'before'];

const index = array.findIndex(array => array == 'hello');

const index2 = array.indexOf('hello');
console.log(index2)
console.log(index);





