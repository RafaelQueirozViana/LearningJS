//Arrays

// Main methods

// .push --> this will adds a value to the end of the array. Ex: array.push(100);
// .slice --> this will remove a value of the array. Ex: array.slice(index, 10) -This will remove the values of the array length between index and 10

const doArray = [1, 3, '4'];

let total = 0

for (let i = 0; i <= doArray.length - 1; i++) {
    total += Number(doArray[i]);
}

console.log(total)




