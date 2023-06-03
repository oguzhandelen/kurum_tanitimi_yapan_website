const express= require('express')
const {engine}=require('express-handlebars')
const app = express()
const port =5000
const router = express.Router()

app.use(express.static('public')) //static dosyayı okumak için gerekli olan middleware


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())



const main = require('./views/routes/main')
app.use('/' , main)


//templete-engine ile aynı kodu defalarca yazmaktan kurtulduk

app.listen(port,()=>{
    console.log('Server Çalışıyor,portta', port)
});

module.exports = router