const loginUser2 = ({ email, age, onSucces, onError }) => {
  // Simula um envio para o banco de dados com um delay de 1.5 segundos
  setTimeout(() => {
    const error = false; // Simulando se ocorreu um erro (hardcoded como false por enquanto)

    if (error) {
      // Se houver erro, chama o callback de erro e interrompe a execução
      return onError('the request was failed');
    }

    console.log('user sended to database'); // Log simulando envio ao banco
    onSucces({ email }); // Chama o callback de sucesso passando o email do usuário
  }, 1500);
};



const loginUser = (name, email) => {
  return new Promise((resolve, reject) => { // returning promisse
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://supersimplebackend.dev/products')
    xhr.send();

    xhr.addEventListener('load', () => {
      let data = 0;


      if (!data) {
        reject('error ocurred');
      }

      resolve(data);

    });





  });
};

loginUser()
  .then((message) => console.log(message))
  .catch((message) => console.log(message));

//calling the promisse