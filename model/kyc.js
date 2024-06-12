const mongoose=require('mongoose');

const kyc = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    },
    homeaddress:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    alternatephone:{
        type:Number
    },
    alternateemail:{
        type: String
    },
    document:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false
    },
    submitted:{
        type: Boolean,
        default: false
    }
});

const Kyc = mongoose.model('kyc', kyc);
module.exports=Kyc;