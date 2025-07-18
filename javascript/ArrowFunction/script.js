
//  ---  How to use this and table of your possible values

// Nota: Por isso que em alguns casos a arrow function resolve o problema da function normal, pois a function sempre faz o this retornar undefined ou window, já a arrow function não da nenhum valor para o this, fazendo então o this ficar com o valor do escopo que a arrow function foi criada.
// Ou seja, a arrow function é "neutra" em relação ao this.

// Exemplo:

const pessoa = {
    nome: "Ana",
    falar: function () {
        setTimeout(function () {
            console.log(this.nome);
        }, 1000);
    }
};



// Nesse caso o this não vai funcionar porque a function está dando o valor undefined para ele.
// Para resolver isso apenas é necessario usar a arrow function em vez da function, pois por ela ser
// "neutra" o this ficara com o valor do escopo onde a arrow function foi criada, nesse caso a classe pessoa.
