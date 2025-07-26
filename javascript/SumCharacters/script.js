const choosedNumbers = [];


for (let i = 1; i < 3; i++) {
    choosedNumbers.push(window.prompt('verify if is a magic number'));
};



const verifyMagic = () => {
    let sum;
    choosedNumbers.forEach(number => {
        const numberCharacters = [...number].map(current => Number(current));
        sum = numberCharacters.reduce((acumulator, current) => acumulator += current, 0)


    });

    if (sum === 7) {
        console.log('acerto')
        return 'você acertou o número magico';
    }


};



console.log(verifyMagic());