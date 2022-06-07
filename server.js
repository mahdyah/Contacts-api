const express=require('express')
require('dotenv').config()
const mongoConfig = require('./config/mongoConfig')

const contactRouter=require('./routes/contactRouter')
const PORT=3000
const app=express()
app.use(express.json())
app.use('/contact',contactRouter) 

app.get('/',(req,res)=>{
    res.status(200).json({message:'Welcome to contact API'})

})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    mongoConfig()
}
)  
