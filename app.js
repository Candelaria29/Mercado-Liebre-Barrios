const express = require ('express')
const app = express()
const path = require('path')
const rutaPublic = path.resolve(__dirname, './public') 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Servidor funcionando en: http://localhost:' + port);
});

app.use(express.static(rutaPublic))
 
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, './views/home.html')))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, './views/register.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname, './views/login.html')))
