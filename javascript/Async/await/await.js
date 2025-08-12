// -------------------------
// EXEMPLO: USANDO AWAIT
// -------------------------

// O que é 'await'?
// 'await' é uma palavra-chave usada para esperar uma Promise ser resolvida.
// Só pode ser usada dentro de funções marcadas com 'async'.

// Função simulando uma operação assíncrona (ex: buscar dados do servidor)
function buscarDados() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Dados recebidos!");
    }, 2000); // simula um delay de 2 segundos
  });
}

// Exemplo sem usar await (usando .then)
function exemploComThen() {
  console.log(" Iniciando requisição com .then...");
  buscarDados().then((resposta) => {
    console.log(" Resposta recebida:", resposta);
  });
  console.log(" Código continua executando...");
}

// Exemplo usando async/await
async function exemploComAwait() {
  console.log("Iniciando requisição com await...");
  const resposta = await buscarDados();
  console.log(" Resposta recebida:", resposta);
  console.log(" Código continua após await.");
}

// Executando os exemplos
console.log("== EXEMPLO COM .THEN ==");
exemploComThen();

setTimeout(() => {
  console.log("\n== EXEMPLO COM AWAIT ==");
  exemploComAwait();
}, 3000); // Espera 3 segundos para separar os exemplos
