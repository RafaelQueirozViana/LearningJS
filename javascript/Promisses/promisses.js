// O que é uma Promise?
// Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.
// Ela pode estar em três estados:
// 1. Pendente (pending)
// 2. Resolvida (fulfilled)
// 3. Rejeitada (rejected)

// Criando uma Promise
const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  setTimeout(() => {
    if (sucesso) {
      resolve("Operação concluída com sucesso!");
    } else {
      reject("Ocorreu um erro na operação.");
    }
  }, 2000);
});

// Consumindo uma Promise com then e catch
promessa
  .then((mensagem) => {
    console.log("Sucesso:", mensagem);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });

// Encadeamento de Promises
function passo1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Passo 1 completo"), 1000);
  });
}

function passo2(mensagemAnterior) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensagemAnterior + " -> Passo 2 completo"), 1000);
  });
}

function passo3(mensagemAnterior) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensagemAnterior + " -> Passo 3 completo"), 1000);
  });
}

passo1()
  .then(passo2)
  .then(passo3)
  .then((resultadoFinal) => {
    console.log("Resultado final:", resultadoFinal);
  });

// Usando async/await para lidar com Promises\async function executarPassos() {
  try {
    const r1 = await passo1();
    const r2 = await passo2(r1);
    const r3 = await passo3(r2);
    console.log("[Async/Await] Resultado final:", r3);
  } catch (erro) {
    console.error("Erro durante a execução dos passos:", erro);
  }


executarPassos();