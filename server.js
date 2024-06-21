const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    console.log('Loading Home...');
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('Server is running on port' + PORT + '🚴‍♀️')
});

let Seyf = {
    Name: 'Michael',
    LastName: 'Mendez',
    Age: '19',
    Direction: 'Me la pela',
    Game: 'Fornais'
}

console.log(Seyf.Game);

