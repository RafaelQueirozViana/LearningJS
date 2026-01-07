const form = document.querySelector('#contact');


function handelForm(event) {
    console.log(event.target.value)
}

form.addEventListener('change', handelForm);

