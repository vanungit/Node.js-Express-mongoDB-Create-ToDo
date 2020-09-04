const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.get('/',async (req,res)=> {//write asinc becouse do request in BD
    const todos = await Todo.find({}).lean()
    res.render('index',{
        title:'ToDo List',
        isIndex:true,
        todos
    })
})
router.get('/create',(req,res)=> {
    res.render('create',{
        title:'create',
        isCreate:true
    })
})
router.post('/create', async (req,res)=> {
   const todo = new Todo({
       title: req.body.title //can`t parsing body witch in index.js write app.use(express.urlencoded({extended:true}))
       //value input name title
   })
    await todo.save()
    res.redirect('/')
})
router.post('/complate',async (req,res)=>{

    const todo = await Todo.findById(req.body.id) //get input id
    todo.completed = !!req.body.complated//string become boolean
    await todo.save()
    res.redirect('/')
})

module.exports = router