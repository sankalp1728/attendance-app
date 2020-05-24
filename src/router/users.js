const express = require('express')
const router = new express.Router();
const User = require('../models/user');


const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    auth: {
      user: "rishabh@geeksatweb.com",
      pass: "Rip1996@"
    }
  });

router.post('/user/add',(req,res)=>{
    try{
    const user = new User(req.body)
    user.save()
    console.log('saved')
    res.status(200).send({success:"user added"})
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }

})


router.patch('/user/login',async(req,res)=>{
    try{
    const user = await User.findOne({enrollement_number : req.body.enrollement_number})
    user.entry_time = req.body.entry_time
    user.loged_in = true
    await user.save()
    console.log(user.entry_time)

    let mailOption = {
        from: 'rishabh@geeksatweb.com',
        // to: 'maheshwari.rishabh6@gmail.com',
        to: 'sankalp1728@gmail.com',
        subject : 'attendence marked by student',
        text : 'Student with the enrollement number ' + user.enrollement_number + ' has marked his attendance at time :' + user.entry_time,
    };

    transporter.sendMail(mailOption,function(err,data){                     //mobile notification also required
        if(err){
            console.log(error)
            res.send(error)
        }else{
            console.log('email sent')
            res.status(200).send("email sent")
        }
    })
}catch(e){
    console.log(e)
    res.status(500).send(e)
}
})

router.get('/user/all',async(req,res)=>{
    try{
    const users = await User.find({})
    res.status(200).send(users)
    }catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})

router.get('/user/present',async(req,res)=>{
    const users = await User.find({loged_in:true})
    res.status(200).send(users)
})

router.get('/user/absent',async(req,res)=>{
    const users = await User.find({loged_in : false}).select('-entry_time')
    res.status(200).send(users)
})




module.exports = router;