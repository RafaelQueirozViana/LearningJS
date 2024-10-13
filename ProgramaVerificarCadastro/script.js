const userInput = document.querySelector(".input");
const registerButton = document.querySelector(".button");
const errorLabel = document.querySelector(".error-text");

let RegisteredUsers = ["joaojoaojoao", "pedro"];

registerButton.onclick = () => {
    verifyForm();

    
}


let verifyForm = () => {
    let haveInvalidUser = false;
    let inputValue = userInput.value;
    inputValue.trim()
    RegisteredUsers.forEach(currentUser => {
        if(currentUser == userInput.value ) {
            haveInvalidUser = true;
        }
    })

    if(haveInvalidUser == false && inputValue.length >=5 && inputValue.length <=10 && !(inputValue.includes(" ")) ) {
     
        RegisteredUsers.push(userInput.value);
        showError("Usuário registrado com sucesso");
    }

    else if( inputValue.length <5 || inputValue.length >10 )  {
      
        showError("o nome tem que ter no mínimo 5 letras e no máximo 10.")
    }

    else if(inputValue.includes(" ")) {
        
        showError("o nome nao pode ter espaços.")
    }

    else {
        showError("usuário ja está cadastrado")
    
    }


}

let showError = (errorMessage) => {
errorLabel.style.display = "block";
errorLabel.textContent = errorMessage
}