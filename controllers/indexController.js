
const asyncHandler = require('express-async-handler');

const index = {
    get: (reg, res) => {
        res.render('index');
    },
    formGet: (reg, res) => {
        
    }
}

module.exports = index;