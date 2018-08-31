const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

let todoList = [
    { title: 'First' },
]

app.get('/', (req, res) => {
    res.status(201).json(todoList);
});

app.post('/', (req, res) => {
    todoList.push(req.body);

    setTimeout(() => {
        res.status(201).json({message: 'success'});
    }, 100)
});

app.delete('/', (req, res) => {
    const title = req.body.title;

    todoList = todoList.filter(el => el.title !== title);

    setTimeout(() => {
        res.status(201).json({message: 'deleted'});
    }, 100)
});

app.listen(5001, () => console.log('LISTEN 5001'));
