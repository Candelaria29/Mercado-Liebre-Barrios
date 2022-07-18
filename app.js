const express = require ('express')
const app = express()
const path = require('path')
const rutaPublic = path.resolve(__dirname, './public') 

app.listen(3000, () => {
    console.log('Servidor funcionando en: http://localhost:3000');
});

app.use(express.static(rutaPublic))
 
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, './views/register.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, './views/login.html')))
