// Função de login de usuário que recebe um objeto com email, idade e dois callbacks: onSucces e onError
const loginUser = ({ email, age, onSucces, onError }) => {
    const error = false; // Simulando se ocorreu um erro (hardcoded como false por enquanto)

    if (error) {
        // Se houver erro, chama o callback de erro e interrompe a execução
        return onError('the request was failed');
    }

    // Simula um envio para o banco de dados com um delay de 1.5 segundos
    setTimeout(() => {
        console.log('user sended to database'); // Log simulando envio ao banco
        onSucces({ email }); // Chama o callback de sucesso passando o email do usuário
    }, 1500);
};

// Função utilitária para exibir o nome de usuário (não usada no fluxo atual)
const printUser = (username) => {
    console.log({ username });
}

// Função para exibir mensagens de erro, usada como callback
const showError = (errorMessage) => {
    console.log(`error: ${errorMessage}`);
}

// Função que simula buscar vídeos com base no email, chamando uma callback com a lista
const getVideos = (email, fun) => {
    setTimeout(() => {
        fun(['video1', 'video2', 'video3']); // Simula o retorno de vídeos após 1s
    }, 1000);
};

const getVideoDetails = (email, fun) => {
    setTimeout(() => {
        fun('file mp4'); // Simula o retorno de vídeos após 1s
    }, 1000);
};

// ------ Início da lógica de execução (como se fosse a Home page ou página principal) ------

// Chama a função loginUser passando dados fictícios e os callbacks de sucesso e erro
loginUser({
    email: 'test@gmail.com',
    age: 12,
    onSucces: (user) => {
        // Se o login for bem-sucedido, busca os vídeos relacionados ao email do usuário
        getVideos(user.email, (videos) => {
            console.log(videos); // Exibe os vídeos recebidos

            getVideoDetails(user.email, (detail) => {
                console.log(detail);
            });


        });
    },
    onError: showError // Callback de erro definido anteriormente
});
