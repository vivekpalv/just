const Address =require('../model/address');
const VendorServiceDetails =require('../model/vendorservicedetails');
const VendorData =require('../model/vendor');
const Kyc =require('../model/vendor');

//get all vendors
exports.getAllVendors=async(req,res)=>{
    try {
        const listOfVendors=await VendorData.find({});
        res.status(200).send(listOfVendors);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to fetch all vendors"});
    }
};

//get vendor by email and password
exports.getVendorByEmailAndPassword=async(req,res)=>{
    try {
        const email=req.params.email;
        const password=req.params.password;
        const vendor=await VendorData.findOne({email:email});
        if (vendor.email==email && vendor.password==password) {
            res.status(200).send(vendor);
        }
        else{
            res.status(404).send({message:"incorect username and password"});
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to fetch vendor by email and password"});
    }
};

//update kyc status by email
exports.updateKycStatus=async(req,res)=>{
    try {
        const email=req.params.email;
        const newstatus=req.body.status;
        const kyc=await Kyc.findOne({email:email});
        kyc.status=newstatus;
        await kyc.save();
        res.status(200).send(kyc);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to update kyc status"});
    }
};

//update kyc submitted status by vendor email
exports.updateKycSubmittedStatus=async(req,res)=>{
    try {
        const email=req.params.email;
        const newsubmitted=req.body.submitted;
        const kyc=await Kyc.findOne({email:email});
        kyc.submitted=newsubmitted;
        await kyc.save();
        res.status(200).send(kyc);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to update kyc submitted status"});
    }
};