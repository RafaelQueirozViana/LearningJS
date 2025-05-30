const formInputs = document.querySelectorAll('.input-content input');
const inputList = [];
const submitButton = document.getElementById('subtmit-button');
const spinner = document.querySelector('.spinner');
const registerform = document.getElementById('register-form');
const submitMessage = document.querySelector('.message');

class Input {
    constructor({ type, minLength, maxLength }) {
        this.type = type;
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.error = undefined;
        this.inputElement = document.getElementById(this.type);
    }

    verify() {
        this.error = undefined;
        const inputValue = this.inputElement.value;

        if (this.type == 'password') {

            if (!/[A-Z]/.test(inputValue)) {
                this.error = `O campo ${this.type} precisa conter uma letra maiúscula`;
            }

            if (!/[^a-zA-Z0-9]/.test(inputValue)) {
                this.error = `O campo ${this.type} precisa conter um caractér especial`;
            }




        }

        if (this.type == 'confirm-password' && inputValue !== document.getElementById('password').value) {
            this.error = `O campo ${this.type} precisa ter o mesmo valor do campo senha`;

        }

        if (this.type == 'email') {
            const validDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com']
            const domain = inputValue.split('@')[1];

            if (!validDomains.includes(domain)) {
                this.error = `O campo ${this.type} precisa ter um domínio válido. Ex: "@gmail.com"`;

            }

            if (!(inputValue.includes('@'))) {
                this.error = `O campo ${this.type} precisa incluir "@"`;

            }



        }

        if (inputValue.length < this.minLength) {
            this.error = `O campo ${this.type} precisa ter no mínimo ${this.minLength} letras`

        }

        if (inputValue.length > this.maxLength) {
            this.error = `O campo ${this.type} precisa ter no máximo ${this.maxLength} letras`

        }

        if (inputValue == '') {
            this.error = `O campo ${this.type} não pode estar vazio`
        }

    }

    showError() {
        const errorText = document.createElement('p');
        const container = this.inputElement.parentElement.parentElement;

        if (container.querySelector('.error-txt')) {
            container.querySelector('.error-txt').remove();
        }

        errorText.textContent = this.error;
        errorText.className = 'error-txt';

        container.appendChild(errorText)


        console.log(this.error);
    }


}

const loadInputs = () => {

    formInputs.forEach(currentInput => {
        const inputType = currentInput.placeholder.replace(/\s+/g, '-').toLowerCase()
        inputList.push(new Input({
            type: inputType,
            minLength: currentInput.minLength,
            maxLength: currentInput.maxLength
        }))
    })

}

loadInputs()





submitButton.addEventListener("click", function () {


    inputList.forEach(currentInput => {
        currentInput.verify();
        currentInput.showError();
    })



    registerform.addEventListener('submit', (event) => {

        if (!(inputList.every(obj => obj.error === undefined))) {
            event.preventDefault();


        }
        else {
            spinner.classList.add('on');
            setTimeout(() => {
                spinner.classList.remove('on');
                submitMessage.textContent = 'formulário enviado'
            }, 3000)

        }
    })




    setTimeout(() => {
        console.log('click');
    }, 1000)
})
