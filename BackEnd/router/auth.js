const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// require('../db/conn');
// const User = require('../model/userSchema')

// router.get('/',(req,res) => {
//     res.send(`Hello From Server`);

// });


router.get('/api',(req,res) => {
    // res.send(`Hello From api`);
    res.links('https://jsonplaceholder.typicode.com/posts')

});

router.get('/', function(req, res){
    res.links({
        next: 'http://demo.com?page=2',
        middle: 'http://demo.com?page=4',
        last: 'http://demo.com?page=6'
    });
 
    console.log(res.get('link'));
});
    //using Promises

// router.post('/register',  (req,res) => {
//     const {name, email, phone, work , password, cpassword} = req.body;
//     if(!name || !email || !phone || !work || !cpassword){

//             return res.status(422).json({error:"plz fill the detail"});
//     }

//     //if email is already registered
//     User.findOne({email:email}).then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already Existed"});
//         }

//         const user = new User({name, email, phone, work , password, cpassword})
//         user.save().then(()=>{
//             res.status(201).json({message:"Successfully Registered"});
//         }).catch((err)=>{
//             res.status(500).json({error:"Failed to register"});
//         });
//     }).catch((err)=>{console.log(err)});

// console.log(name);
// console.log(email);

// // res.json({message:req.body})
// // res.send("My Router");
// })
// router.post('/register', async (req,res) => {
//     const {name, email, phone, work , password, cpassword} = req.body;
//     if(!name || !email || !phone || !work || !cpassword){

//             return res.status(422).json({error:"plz fill the detail"});
//     }

//     try {
//         //if email is already registered
//     const userExist = await User.findOne({email:email})
//         if(userExist){
//             return res.status(422).json({error:"Email already Existed"});
//         }else if(password!=cpassword){
//             return res.status(422).json({error:"Password Not Matching"});
//         }
        



//             else{
//                 const user = new User({name, email, phone, work , password, cpassword});

//         const userRegister = await user.save();
//         res.status(201).json({message:"Successfully Registered"});
//             }
        
        
//     } catch (error) {
//         console.log(err);
        
//     }
    

// console.log(name);
// console.log(email);

// // res.json({message:req.body})
// // res.send("My Router");
// })


// // router.post('/login', async(req,res)=>{
//     let token;
//     try {
//         const {email,password} = req.body;
//         if(!email || !password){
//             return res.status(400).json({error:"plz fill the detail"})
//         }
//         const userLogin = await User.findOne({email:email});
//         // console.log(userLogin);
//         if(userLogin){
//             const isMatch = await bcrypt.compare(password, userLogin.password);
//              token = await userLogin.generateAuthToken();
//             console.log(token);
//             res.cookie("jwttokken",token,{
//                 expires:new Date(Date.now() + 258792000000),
//                 httpOnly:true

//             })
//             if(!isMatch){
//                 res.status(400).json({error:"Invalid Credentials"})
//             }else{
//                 res.json({message:"User Login Successfully"})
//             }
//         }
//         else{
//             res.status(400).json({error:"Invalid Credentials"})
//         }
       
        
//     } catch (error) {
//      console.log(error);   
//     }
// })
module.exports = router;