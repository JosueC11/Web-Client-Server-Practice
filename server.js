const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;
const PUBLIC = path.join(__dirname,'public');

app.use(express.urlencoded({ extended: true}));
app.use(express.static(PUBLIC));

app.get('/', (req, res) => {
    console.log('Loading Home...');
    res.sendFile(path.join(PUBLIC,'home.html'));
});

app.get('/contactus', (req, res) => {
    console.log('Loading Contact Us...')
    res.sendFile(path.join(PUBLIC,'contactus.html'));
});

app.post('/contactus', (req, res) => {
    console.info('Contact Us has been called...\n');
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    
    console.log('Form Data:' + 
                '\nName: ' + name + 
                '\nEmail: ' + email + 
                '\nSubject: ' + subject);

    res.redirect('/');
});

app.listen(PORT, () => {
    console.log('Server is running on port' + PORT + '🚴‍♀️')
});
