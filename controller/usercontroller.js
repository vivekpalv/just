const User = require('../model/user');
const VendorServiceDetails = require('../model/vendorservicedetails');
const VendorData = require('../model/vendor');

//create a new user
exports.createUser = async (req, res) => {
    try {
        const {name,mobile,email,password} = req.body;
        const user = new User({name,mobile,email,password});
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to create user may be email already exist in our database"});
    }
};

//adding address to user
exports.addAddressToUser=async(req,res)=>{
    try {
        const {address}=req.body;
        const email=req.params.email;
        const getuserbyemail=await User.findOne({email:email});
        const newaddress=new Address({address});
        getuserbyemail.address.push(newaddress);
        await getuserbyemail.save();
        res.status(200).send(getuserbyemail);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to add address to user"});
    }
};

//provide rating to vendor by vendor email.
exports.provideRating=async(req,res)=>{
    try {
        const email=req.params.email;
        const rating=req.body.rating;
        const vendor=await VendorData.findOne({email:email});
        vendor.rating.push(rating);
        await vendor.save();
        res.status(200).send(vendor);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("unable to provide rating");
    }
};

//fetch all service details of vendor.
exports.fetchAllServiceDetails=async(req,res)=>{
    try {
        const service=await VendorServiceDetails.find({});
        res.status(200).send(service);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("unable to fetch all service details");
    }
};

//fetch service details by category.
exports.fetchServiceDetailsByCategory=async(req,res)=>{
    try {
        const category=req.params.category;
        const service=await VendorServiceDetails.find({category:category});
        res.status(200).send(service);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("unable to fetch service details by category");
    }
};

//fetch user address by email.
exports.fetchUserAddress=async(req,res)=>{
    try {
        const email=req.params.email;
        const user=await User.findOne({email:email});
        const listofaddress=user.address;
        res.status(200).send(listofaddress);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("unable to fetch user address");
    }
};

// add vendoer service detail to request variable in vendor schema
// exports.addVendorServiceDetailToRequest=async(req,res)=>{
//     try {
//         const serviceid=req.params.serviceid;
//         const vendorservice=await VendorServiceDetails.findOne({_id:serviceid});
//         const vendordata=await VendorData.findOne({email:vendorservice.vendoremail});

        
