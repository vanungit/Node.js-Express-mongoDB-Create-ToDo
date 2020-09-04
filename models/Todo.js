const {Schema,model}= require('mongoose')

const schema = new Schema({ //use this Routers todos
    title:{
        type:String,
        required:true//if we not send title this model will not created
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = model('Todo',schema)