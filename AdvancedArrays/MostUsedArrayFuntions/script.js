// In arrays, the most methods we can use are:

/*
 Push --> it will add a value in array in the last position. Example: fruits.push('apple').

 Splice --> it will remove some value in the array using the index. Example: fruits.splice(1, 1).

 IndexOf --> Is used to find an index includes in array through the name. Example: Fruits.IndexOf('Apple')

 findIndex --> used to find an index of some value inside the array through an attribute.
    Example: Fruits.findIndex(fruit => fruit === 'apple');

 Filter --> used to crate a clone of some array with a filter.
   Example: fruits.filter(currentFruit => currentFruit.includes('apple));
   "currentFruit.includes('apple))" is the filter where you want to save in the
   new filtered array"

   Alert: Using filter() you can't change any value of the array!
   "Filter apenas consegue escolher quais valores entrarão no novo array,mas não consegue modoficar os vlaores em si"

  Real Examples using filter and map:

// Filtering the even numbers:
//   const numbers = [1, 2, 3, 4, 5, 6, 7];
//   const evenNumbers = numbers.filter(number => number % 2 === 0);
//   console.log(evenNumbers);


// Filtering the animes list:

//   const animes = ['one piece', 'one punch man', 'code gueass', 'solo leveling'];
//   const input = 'one'
//   const filteredAnimes = animes.filter(anime => anime.includes(input));
//   console.log(filteredAnimes)

 Map --> It will transform the array in another array. let's suppose you want to double all values of some array,
         you can use .map() to traverse the array and transform all values in the array in the same value multiplied by 2.
         Example. numbers.map(number => number * 2);

         Alert: Map is used only for change the values in some array, you can't use for separate the values.

         Real Examples using .map():

         const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         const doubledNumbers = numbers.map(number => number * 2);

         console.log(doubledNumbers)

   The difference between map and filter: Filter is used only for separate values in some array and you can't change the values,
   while the map is used to change the values from array. They both need a return and will create a new array.


*/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const finalNumbers = numbers.filter(number => number % 2 === 0).map(number => number * 2);
console.log(finalNumbers)


