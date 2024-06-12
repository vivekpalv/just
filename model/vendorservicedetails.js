const mongoose=require('mongoose');
const Address=require('./address');

const vendorServiceDetails=new mongoose.Schema({
    servicename:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ['Medical', 'Security', 'Education', 'Finance', 'Marriage kutumb', 'Entertainment', 'FMCG','Services','Donations'],
        required: true
    },
    servicedetails:{
        type: String,
        required: true
    },
    serviceprice:{
        type:Number,
        // required:true
    },
    serviceaddress:{
        type: Address.schema,
        // required: true
    },
    serviceimage:{
        type:String
    },
    servicestatus:{
        type: Boolean
    },
    vendoremail:{
        type: String
    }
});

const VendorServiceDetails = mongoose.model('VendorServiceDetails', vendorServiceDetails);
module.exports=VendorServiceDetails;
