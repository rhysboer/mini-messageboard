const express = require('express');
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');

const app = express();

// Setup
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true })); // parsing post data into reg.body

// Render
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routers
app.use('/', indexRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});`    123456`