const axios = require('axios')
const { expect } = require('chai')

let result;
describe('Given I want to list all animals', () => {
    before(async () => {
        result = await axios.get('http://localhost:8080/animals')
    })

    it('Then the response status code should be OK', () => {
        expect(result.status).to.be.eql(200)
    })

    it('And each animal should have name, gender and isVaccinated properties', () => {
        result.data.forEach((animal) => {
            expect(animal).to.have.property('name');
            expect(animal).to.have.property('gender');
            expect(animal).to.have.property('isVaccinated');
            expect(animal).to.have.property('vaccines');
        });
    })
})