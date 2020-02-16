const fs = require('fs')

module.exports = {
    log(errorMessage){
        let file = 'log.txt'
        fs.writeFile(file, errorMessage+'\n', {flag: 'a'}, (err) => {
            if (err) throw err;
        })
    }
}