const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const TodoRouters = require('./routes/todos')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

const hbs = exphbs.create({ //create after start app
    defaultLayout: 'main',
    extname:'hbs'
})
app.engine('hbs',hbs.engine)//regisr dvijok for a kay hbs
app.set('view engine','hbs') // view engine ir1s kay
app.set('views','views')//folder dvijka

app.use(express.urlencoded({extended:true}))//write to work send massages from input
app.use(express.static(path.join(__dirname,'public')))//get css main style and writhe / on connect link header
app.use(TodoRouters)//edd new middlewaire Router


async function start(){
    try {
       await mongoose.connect('mongodb+srv://vanun:mango1993@cluster0.oeqnz.mongodb.net/test',{
           useNewUrlParser:true,
           useFindAndModify:false,
           useUnifiedTopology: true
       })//when connected mongoose run server
        app.listen(PORT,()=>{
            console.log('server has been started')
        })
    }catch (e) {
        console.log(e)
    }
}
start() // started

