const mongoose=require('mongoose');
const VenderServiceDetail=require('./vendorservicedetails');

const signUpVendor= new mongoose.Schema({
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
    vendorservices:{
        type: [VenderServiceDetail.schema]
        // required: false
    },
    totalorder:{
        type: [Number]
    },
    totalincome:{
        type: [Number]
    },
    rating:{
        type: [Number]
    },
    request:{
        type: [VenderServiceDetail.schema]
    },
});

const VendorData = mongoose.model('VendorData', signUpVendor);
module.exports=VendorData;