const text = document.querySelector(".text");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

let maxNumber = 10;


button.onclick = function() {
   
    for(let i = 0; i < input.value; i++) {
        text.textContent+= Math.floor( Math.random() * maxNumber ) + ",";
       }
}


