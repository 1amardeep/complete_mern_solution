const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authenticate');

require('../db/conn'); /*moongoose connect to online db */

const User = require('../model/userSchema');


router.post('/register', async (req, res) => {

    try {

        const { name, email, phone, work, password, confirmpassword } = req.body;

        if (!name || !email || !phone || !work || !password || !confirmpassword) {
            res.status(422).send({ error: "missing values" });
        }

        let userAlreadyRegister = await User.findOne({ email: email });

        if (userAlreadyRegister) {
            return res.status(422).json({ error: "user already exist" });
        }
        if (password !== confirmpassword) {
            return res.status(422).json({ error: "password does not match" });
        }

        const user = new User({ name, email, phone, work, password, confirmpassword });
        await user.save();

        res.status(200).json({ message: "user registerd successfully" });
    } catch (error) {
        console.log(err);
    }

});

router.post('/login', async (req, res) => {
    let token;
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).send({ error: 'missing values' });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            if(isMatch){
                 token = await userLogin.generateAuthToken();
                 res.cookie('jwtoken_cookie',token,{
                    expires: new Date(Date.now()+ 5*60*1000),
                    httpOnly:true
                 });
                 console.log(token);
            }
           

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid user details' });
            }
            return res.json({ message: 'user sign in successfully' });
        } else {
            return res.status(400).json({ message: 'Invalid user details' });
        }

    } catch (error) {
        console.log(error);
    }

});

router.get('/about',Authenticate,(req,res)=>{
    res.status(200).send(req.rootUser);
})

router.get('/contact',Authenticate, (req,res)=>{
    res.status(200).send(req.rootUser); 
})

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken_cookie');
    res.status(200).send('logout sucessfully');
})

module.exports = router;