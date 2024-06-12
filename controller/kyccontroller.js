const Kyc = require('../model/kyc');


//do kyc
exports.doKyc = async (req, res) => {
    try {
        const {name,email,homeaddress,pincode,alternatephone,alternateemail,document}=req.body;
        const kycbody = new Kyc({name,email,homeaddress,pincode,alternatephone,alternateemail,document});
        await kycbody.save();
        res.status(200).send(kycbody);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to do kyc"});
    }
};

//upload document
exports.uploadDocument = async (req, res) => {
    try {
        const email=req.params.email;
        const document=req.body.document;
        const kyc=await Kyc.findOne({email:email});
        kyc.document=document;
        await kyc.save();
        res.status(200).send(kyc);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("unable to upload document");
    }
};

//fetch all kyc
exports.fetchAllKyc = async (req, res) => {
    try {
        const listOfKyc=await Kyc.find({});
        res.status(200).send(listOfKyc);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to fetch all kyc"});
    }
};

//fetch kyc by email
exports.fetchKycByEmail = async (req, res) => {
    try {
        const email=req.params.email;
        const kyc=await Kyc.findOne({email:email});
        res.status(200).send(kyc);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("unable to fetch kyc by email");
    }
};
