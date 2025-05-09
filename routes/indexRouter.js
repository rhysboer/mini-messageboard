const { Router } = require('express');
const index = require('../controllers/indexController');

const indexRouter = Router();

const messages = [
    {
        id: 1,
        text: 'Hey it\'s me!', 
        user: 'Goku',
        date: new Date(),
    },
    {
        id: 2,
        text: 'Hello World',
        user: 'Default User',
        date: new Date(),
    }
]

indexRouter.get('/', (req, res) => {
    res.locals.messages = messages;
    index.get(req, res);
});

indexRouter.post('/new', (reg, res) => {
    console.log(reg.body);
    messages.push({
        id: messages.length,
        text: reg.body.message,
        user: reg.body.user,
        date: new Date()
    });
    res.redirect('/');
});

module.exports = indexRouter;