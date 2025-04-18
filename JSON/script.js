
//
const button = document.getElementById('click');
const button2 = document.getElementById('click2');


let user = JSON.parse(localStorage.getItem('user'));

if (user === null) {
    user = {
        name: 'standard name',
        age: 10,
    }

}


button.addEventListener('click', function () {
    user.name = 'isGetting';
    localStorage.setItem('user', JSON.stringify(user));

});




console.log(user);








