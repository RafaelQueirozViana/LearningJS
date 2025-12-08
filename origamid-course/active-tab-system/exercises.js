const stringMethodsExercises = () => {



    const testingStrings = () => {

        const completeName = 'Anthony gomes';

        const firstName = completeName.slice(0, completeName.indexOf(' '));

        const cpf = '333.444.555-01';

        const formatedCpf = cpf.replaceAll('.', '').replaceAll('-', '');

        const value = ' R$ 3223';

        const formatedvalue = value.trim();


        console.log(firstName)

        console.log(formatedCpf);

        console.log(formatedvalue)


    }

    // Exercise 1
    const transacoes = [
        {
            descricao: 'Taxa do Pão',
            valor: 'R$ 39',
        },
        {
            descricao: 'Taxa do Mercado',
            valor: 'R$ 129',
        },
        {
            descricao: 'Recebimento de Cliente',
            valor: 'R$ 99',
        },
        {
            descricao: 'Taxa do Banco',
            valor: 'R$ 129',
        },
        {
            descricao: 'Recebimento de Cliente',
            valor: 'R$ 49',
        },
    ];

    const availableValue = transacoes.reduce((acumulator, transaction) => {
        const description = transaction.descricao.toLowerCase();
        const transactionValue = Number(transaction.valor.replace(/[^\d]/g, ''));

        if (description.includes('tax')) {
            return acumulator -= transactionValue;
        }
        else {
            return acumulator += transactionValue;
        }
    }, 0);

    // Exercise 2

    const transports = 'Car;plane;Train;Bus;Cycle';
    const transportsArray = transports.toLowerCase().split(';')
    console.log(transportsArray)

    // Exercise 3 

    const html = `<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

    const replacedHtml = html.split('span').join('a');
    console.log(replacedHtml);

    // Exercise 4

    const phrase = 'best of the year!';

    console.log(phrase[phrase.length - 1])

    // Exercise 5

    const transacoes2 = ['Taxa do Banco', '  TAXA DO PÃO', ' taxa do mercado',
        'depósito Bancário', 'TARIFA especial'];

    const totalTaxes = transacoes2.reduce((acumulator, transaction) => {
        if (transaction.toLowerCase().includes('tax')) {
            return acumulator += 1;
        }
        return acumulator
    }, 0);

    console.log(totalTaxes)










}

const numberMethodsExercises = () => {
    const priceCents = 43223;
    const price = +(priceCents / 100).toFixed(2);

    const numbers = '32, 21, 2, 56 , 21';
    const numbersArray = numbers.split(', ');
    const maxNumber = Math.max(...numbersArray)

    const pricesListCents = [20000, 4351, 183000, 355003];

    const formatPrice = (priceCents) => {
        const price = (priceCents / 100).toFixed(2);
        return `R$ ${price}`
    }

    const priceListFormated = pricesListCents.map(currentPrice => formatPrice(currentPrice));

    console.log(priceListFormated)









}

const arrayMethods = () => {
    let instruments = ['violin', 'sax', 'flaut', 'microphone'];
    instruments.sort();


    const compras = [
        {
            item: 'Banana',
            preco: 'R$ 4,99'
        },
        {
            item: 'Ovo',
            preco: 'R$ 2,99'
        },
        {
            item: 'Carne',
            preco: 'R$ 25,49'
        },
        {
            item: 'Refrigerante',
            preco: 'R$ 5,35'
        },
        {
            item: 'Queijo',
            preco: 'R$ 30,60'
        }
    ]

    const totalPurchasesValue = compras.reduce((acumulator, purchase) => {
        const purchasePrice = +purchase.preco.replace('R$ ', '').replace(',', '.');
        return acumulator + purchasePrice;
    }, 0);





}


const learningObjectMethods = () => {

};






