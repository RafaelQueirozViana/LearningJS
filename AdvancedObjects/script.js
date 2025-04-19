// Learning Desestructuring, training and creating project leasson

const object1 = {
    price: undefined,
    necessaryAge: 15,
    allowedCountries: ['united states', 'brasil', 'portugal']
}

// const { age, name2 } = object1

// console.log(age, name2);


// console.log(object1);

function get({ country, age }) {
    const { price, necessaryAge } = object1
    if (country) {
        if (age >= necessaryAge && verifyCountry(country.toLowerCase()) == true) {
            console.log('you have the necessary age and permited country')
        }
    }

}

const verifyCountry = (analysisCountry) => {

    let allow = false;
    object1.allowedCountries.forEach(country => {
        country.toLowerCase();


        if (analysisCountry == country) {
            allow = true

        }
    })

    return allow
}



get({ country: 'BraSil', age: 18 });


