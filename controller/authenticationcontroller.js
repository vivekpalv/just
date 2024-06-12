const crypto = require('node:crypto')
const jwt=require('jsonwebtoken');
const User = require('../model/user');

const SALT_ROUND='10';
const ITERATION=100;
const KEY_LENGTH=10;
const DIGEST_ALGO='sha512';

const SECRET_KEY='aaaaaaaaaaaaabbbbbbbbbbbbbbbbbcccccccccccccccccccc';


//user signup
exports.signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        let isAlreadyExist = false
        try{
            const user = await User.findOne({ email });
            if(user){
                isAlreadyExist = true
            }
        }catch(err){
            console.log(err)
        }
        if(isAlreadyExist){
            res.status(500).send({ message: "User already exists" });
        }

        crypto.pbkdf2(password, SALT_ROUND, ITERATION, KEY_LENGTH, DIGEST_ALGO, (err, derivedKey) => {
            if (err) {
                console.log(err);
                res.status(500).send({ message: "unable to create user" });
            }
            const user = new User({ name,role, mobile, email, password: derivedKey.toString('hex') });
            user.save();
            delete user.password;
            res.status(200).send(user);
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "unable to create user may be email already exist in our database" });
    }
};

//login

exports.login = async (req, res) => {
    const body = req.body;
    let hash_password = crypto.pbkdf2Sync(
        body.password,
        SALT_ROUND,
        ITERATION,
        KEY_LENGTH,
        DIGEST_ALGO
    );
    hash_password = hash_password.toString('hex')
    try{
        const userbyemail=await User.findOne({email: body.email, password: hash_password});

        if(!userbyemail){
            return res.status(200).send({message:"invalid credentials"});
        }
        delete userbyemail.password;
        const token=jwt.sign({email:userbyemail.email, role: userbyemail.role},SECRET_KEY,{expiresIn:"7d"});

        return res.status(200).send({user: userbyemail, token});

    }catch(err){
        console.log(err);
    }
}