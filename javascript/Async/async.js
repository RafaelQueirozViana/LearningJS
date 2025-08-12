// -------------------------------------
// Introdução a async/await
// -------------------------------------

// Uma função async sempre retorna uma Promise automaticamente.
// Aqui é um exemplo simples que retorna uma string.
// Pode ser usada com .then() como uma Promise normal.

function waitTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ola');
        }, 1500)
    })
}

waitTime.then((message) => console.log(message));






async function exemploSimples() {
    return "Este é o resultado!";
}

exemploSimples().then((res) => console.log("Resultado:", res)); // Resultado: Este é o resultado!

// -------------------------------------
// Função utilitária para aguardar X ms
// -------------------------------------

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Exemplo básico de uso do await com uma função que pausa por 2 segundos.
async function executar() {
    console.log("Esperando 2 segundos...");
    await esperar(2000); // Pausa a execução aqui
    console.log("2 segundos se passaram!");
}

executar();

// -------------------------------------
// Simulando uma chamada de API assíncrona
// -------------------------------------

function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;

            // Muda para false se quiser simular erro
            if (sucesso) {
                resolve({ nome: "João", idade: 25 });
            } else {
                reject("Erro ao buscar dados.");
            }
        }, 1500);
    });
}

// Lidando com erro e sucesso usando try/catch dentro da função async
async function mostrarDados() {
    try {
        const dados = await buscarDados();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

mostrarDados();

// -------------------------------------
// Várias chamadas async em sequência (encadeadas)
// -------------------------------------

function etapa1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Etapa 1 finalizada"), 1000)
    );
}

function etapa2(anterior) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(anterior + " -> Etapa 2 finalizada"), 1000)
    );
}

function etapa3(anterior) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(anterior + " -> Etapa 3 finalizada"), 1000)
    );
}

// Executa etapas de forma sequencial, passando o resultado de uma para a próxima
async function executarEtapas() {
    try {
        const e1 = await etapa1();
        const e2 = await etapa2(e1);
        const e3 = await etapa3(e2);
        console.log("Resultado final:", e3); // Loga a cadeia completa
    } catch (erro) {
        console.error("Erro em alguma etapa:", erro);
    }
}

executarEtapas();

// -------------------------------------
// Executando promessas em paralelo com Promise.all
// -------------------------------------

async function paralelo() {
    // Três tarefas que rodam ao mesmo tempo
    const promessa1 = esperar(1000).then(() => "Tarefa 1");
    const promessa2 = esperar(1500).then(() => "Tarefa 2");
    const promessa3 = esperar(500).then(() => "Tarefa 3");

    // Aguarda todas ao mesmo tempo (não sequencial)
    const resultados = await Promise.all([promessa1, promessa2, promessa3]);

    console.log("Todas as tarefas concluídas:", resultados); // Loga array com os três resultados
}

paralelo();
