const express=require('express')

const contactModel=require('../models/contactSchema')
const router=express.Router()

router.get('/',async(req,res)=>{
    try {
        const contact=await contactModel.find()
        res.status(200).json(contact)
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async(req,res)=>{
    const contactData=req.body
    try {
        const contact=await contactModel.create(contactData)
        res.status(201).json(contact)
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request')

    }
})

router.put('/:id',async(req,res)=>{
    const id=req.params.id
    const newContactData=req.body
    try {
        const contact=await contactModel.findByIdAndUpdate(id, newContactData,{new:true})
        res.status(202).json(contact)
    } catch (error) {
        res.status(400).json({
            msg:"problem with updates"
        })
        
    }
})
router.delete('/:id',async (req,res)=>{
    const id=req.params.id
 try {
     const contact=await contactModel.findByIdAndDelete(id)
     res.status(200).json({msg:'contact was deleted'})
 } catch (error) {
     console.log(error)
     
 }

})
module.exports=router
