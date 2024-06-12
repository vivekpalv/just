const mongoose=require('mongoose');
const address=new mongoose.Schema({
    location:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    houseno:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    landmark:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    longitude:{
        type: String
    },
    latitude:{
        type: String
    }
});

const Address = mongoose.model('Address', address);
module.exports=Address;