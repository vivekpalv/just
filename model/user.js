const mongoose=require('mongoose');
const Address=require('./address');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['Vendor','User','Admin'],
        require: true
    },
    address:{
        type: [Address.schema]
    }
});

const User = mongoose.model('User', userSchema);
module.exports=User;