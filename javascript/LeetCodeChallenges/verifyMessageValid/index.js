
const specialCharacters = ['()', '{}', '[]'];




const verifyMessage = (message) => {
    const separatedWords = [...message];

    let haveEnd = true;

    for (i = 0; i <= separatedWords.length - 1; i++) {
        const currentLetter = separatedWords[i];

        specialCharacters.forEach(specialCharacter => {
            const charArray = [...specialCharacter];
            if (currentLetter == specialCharacter[0]) {
                if (haveEnd) {
                    const nextLetter = separatedWords[i + 1]; // (
                    if (nextLetter == specialCharacter[1]) {
                        haveEnd = true;
                    }

                    else {
                        haveEnd = false;
                    }



                }
            }
        });
    }

    return haveEnd;







}

console.log(verifyMessage('([])')
)




