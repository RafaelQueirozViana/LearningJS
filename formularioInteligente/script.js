class Input {
    constructor({ type, necessaryChar }) {
        this.type = type;
        this.necessaryChar = necessaryChar;
        this.error = undefined;
        this.inputElement = document.getElementById(this.type);
    }

    verify() {

        if (this.type.includes('password')) {

            if (!/[A-Z]/.test(this.inputElement.value)) {
                this.error = `O campo ${this.type} precisa conter uma letra maiúscula`;
            }

            if (!/[^a-zA-Z0-9]/.test(this.inputElement.value)) {
                this.error = `O campo ${this.type} precisa conter um caractér especial`;
            }
        }


        if (this.inputElement.value == '') {
            this.error = `O campo ${this.type} não pode estar vazio`
        }



    }

    showError() {
        console.log(this.error);
    }


}



const input = new Input({ type: 'password' });
input.verify();
input.showError();