const axios = require('axios')
const dataTest = require('../env/dummyAPI')

describe('Dummy', function() {

    it('/employees', () => {
        axios.get(dataTest.url+'/employees')
            .then(function (response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
    })
})