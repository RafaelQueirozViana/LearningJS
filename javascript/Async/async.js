// O que é async/await?
// async/await é uma forma mais moderna, limpa e legível de lidar com Promises.
// Com async/await, seu código assíncrono se parece mais com código síncrono, o que facilita a leitura e manutenção.

// A palavra-chave 'async' transforma uma função normal em uma função que retorna uma Promise.
// A palavra-chave 'await' só pode ser usada dentro de funções async e pausa a execução até a Promise ser resolvida.

// Exemplo simples:

async function exemploSimples() {
    return "Este é o resultado!";
}

// Como lidar com o resultado dessa função?
exemploSimples().then((res) => console.log("Resultado:", res));


// Usando await para esperar o resultado de uma Promise

function esperar(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executar() {
    console.log("Esperando 2 segundos...");
    await esperar(2000); // Espera 2 segundos
    console.log("2 segundos se passaram!");
}

executar();


// Exemplo com operação assíncrona (simulando API)

function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;
            if (sucesso) {
                resolve({ nome: "João", idade: 25 });
            } else {
                reject("Erro ao buscar dados.");
            }
        }, 1500);
    });
}

async function mostrarDados() {
    try {
        const dados = await buscarDados();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

mostrarDados();


// Exemplo com múltiplas chamadas assíncronas em sequência

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

async function executarEtapas() {
    try {
        const e1 = await etapa1();
        const e2 = await etapa2(e1);
        const e3 = await etapa3(e2);
        console.log("Resultado final:", e3);
    } catch (erro) {
        console.error("Erro em alguma etapa:", erro);
    }
}

executarEtapas();


// Dica: você também pode usar Promise.all com async/await
// Para executar várias promessas ao mesmo tempo

async function paralelo() {
    const promessa1 = esperar(1000).then(() => "Tarefa 1");
    const promessa2 = esperar(1500).then(() => "Tarefa 2");
    const promessa3 = esperar(500).then(() => "Tarefa 3");

    const resultados = await Promise.all([promessa1, promessa2, promessa3]);
    console.log("Todas as tarefas concluídas:", resultados);
}

paralelo();
