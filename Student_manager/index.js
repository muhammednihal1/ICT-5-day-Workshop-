
const express=require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://user:nihal@cluster0.h2ijlxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err))

stumodel=require("./student")
const app=express()
//set midware
app.use(express.json())

//add api
app.post('/add',async(req,res)=>{
try {
    await stumodel(req.body).save()
res.send('data added')
} catch (error) {
    console.log(error)
}
})
//get
app.get('/view', async (req, res) => {
  try {
    const val = await empmodel.find()
    res.send(val)
  } catch (error) {
    console.error(error);
  }
});

//delete
app.delete('/del/:id', async (req, res) => {
  try {
    await stumodel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
  } catch (error) {
    console.error(error);
  }
});
//update
app.put('/update/:id', async(req,res) => {
  try {
    await stumodel.findByIdAndUpdate(req.params.id,req.body)
    res.send('data updated')
  } catch (error) {
    console.error(error);
  }
});
app.listen(3006,()=>{
    console.log('port runs')
}
)