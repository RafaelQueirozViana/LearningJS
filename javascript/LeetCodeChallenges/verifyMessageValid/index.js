
const specialCharacters = ['()', '{}', '[]'];

const verifyClosing = (sepWords, closeChar) => {
    const areClosed = sepWords.some(letter => letter === closeChar);

    return areClosed;
}

const verifyNextLetter = (sepWords, closeChar) => {
    let nextLetterIsClosed;
    const nextLetter = sepWords; // (
    if (nextLetter == closeChar) {
        nextLetterIsClosed = true;
    }

    else {
        nextLetterIsClosed = false;
    }

    return nextLetterIsClosed;
}

const verifyLastLetter = (sepWords, closeChar) => {
    let lastCharIsCloser = false


    const lastLetter = sepWords[sepWords.length - 1];




    if (lastLetter == closeChar) {
        lastCharIsCloser = true;
    }

    return lastCharIsCloser;


}
console.log(`${verifyLastLetter} is the last letter `)



console.log(verifyClosing())

const verifyMessage = (message) => {
    const separatedWords = [...message];

    let isValid = true;

    for (i = 0; i <= separatedWords.length - 1; i++) {
        const currentLetter = separatedWords[i];

        specialCharacters.forEach(specialCharacter => {
            const charArray = [...specialCharacter];
            if (currentLetter == specialCharacter[0]) {
                const areClosed = verifyClosing(separatedWords, specialCharacter[1]); // necessary be true
                const areNextClosed = verifyNextLetter(separatedWords[i + 1], specialCharacter[1]); // not necessary be true
                const areLastClosed = verifyLastLetter(separatedWords, specialCharacter[1]); // not necessary be true


                if (areClosed && areNextClosed) {

                }

                else if (areClosed && areLastClosed) {

                }

                else {

                    isValid = false;
                }


            }

            else if (currentLetter == specialCharacter[1]) {
                const areClosed = verifyClosing(separatedWords, specialCharacter[0]); // necessary be true
                const areNextClosed = verifyNextLetter(separatedWords[i + 1], specialCharacter[1]); // not necessary be true
                const areLastClosed = verifyLastLetter(separatedWords, specialCharacter[1]); // not necessary be true


                if (areClosed && areNextClosed) {

                }

                else if (areClosed && areLastClosed) {

                }

                else {

                    isValid = false;
                }


                console.log('testing git ')


            }

        });
    }

    return isValid;


}

console.log(verifyMessage('}(){')) // ([)] // verificar se esta fechando





