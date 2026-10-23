import { Router } from "express";


const router=Router()

router.get("/", (req,res)=>{
 res.send("data get")
})

router.get("/home/:id", (req,res)=>{
const id=req.params
console.log(id)
})


router.get("/home", (req,res)=>{
const post=req.query.page
const book=req.query.book
res.send(post)
})