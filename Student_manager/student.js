
const mongoose=require('mongoose')


var schema=mongoose.Schema(
    {
        Name:String,
        Age:Number,
        Course:String,
        Department:String       
    }
)

//model

var Student=mongoose.model('Student',schema)
module.exports=Student