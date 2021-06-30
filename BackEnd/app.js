// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');
// // const mongoose = require('mongoose');


// dotenv.config({path: './config.env'});
// // require('./db/conn');
// app.use(express.json());
// // const User = require('./model/userSchema');


// app.use(require('./router/auth'));   

// const PORT=  3000;
// //MiddleWare
// const middleware = (req, res,next) =>{
//     console.log('HELLO MIDDLEWARE');
//     next();

// }
// // middleware();
// //ROUTNG
// app.get('/', (req, res) => {
// res.send('HEllo world');
// })

// app.get('/about', middleware, (req, res) => {
//     res.send("This is about Page");
// })
// app.get('/contact',(req, res)=>{

//         res.send("HEllO Contact")
// })
// app.get('/login', (req, res) => {
//     res.send('login page');
//     })
//     app.get('/signup', (req, res) => {
//         res.send('signup page');
//         })




// app.listen(PORT, () =>{
//     console.log(`Running...on ${PORT}`);
// })
// import Data from './data';

const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000
const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
let student = JSON.parse(rawdata);


app.get(`/api`, (req, res) => {
    api_helper.make_API_call(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
        res.json(response)
        
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/api1/', (req, res) => {
    res.send(student[0].body)
    
})

app.listen(port, () => console.log(`App listening on port ${port}!`))