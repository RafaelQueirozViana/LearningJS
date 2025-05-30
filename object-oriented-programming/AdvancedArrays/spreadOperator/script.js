
// Function used to double nums in an array. I used spread operator

const doubledNums = (...nums) => {
    let doubledArray = [];
    nums.forEach(currentNum => {
        doubledArray.push(currentNum * 2);

    })

    return doubledArray;
}

console.log(...doubledNums(1, 2, 2, 2, 3));



// Function used to Find a word in the array.


const myArray = ['banana', 'fruit', 'chocolate'];

const findIndex = ({ array, word }) => {
    let haveWord = false;

    for (let i = 0; i < array.length; i++) {
        console.log('i')

        if (array[i] == word) {
            haveWord = true;
            return haveWord;


        };
    };

    return haveWord;

};

console.log(findIndex({ array: myArray, word: 'banana' }));