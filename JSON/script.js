
//

const score = JSON.parse(localStorage.getItem('scoreboard'));



const button = document.getElementById('click');

button.addEventListener('click', function () {
    score.wins++
    localStorage.setItem('scoreboard', JSON.stringify(score));


})

console.log(score);

console.log(localStorage)






