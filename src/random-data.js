const { faker } = require('@faker-js/faker')

/**
 * thjis function generates and alogs random data using the faker library
 * including random state, email, and date
 */
const generate_data = () => {
    console.log(faker.location.state())
    console.log(faker.internet.email())
    console.log(faker.date.past())
}

generate_data();