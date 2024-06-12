const Address =require('../model/address');
const VendorServiceDetails =require('../model/vendorservicedetails');
const VendorData =require('../model/vendor');


//signUp Vendor
exports.signUpVendor=async(req,res)=>{
    try {
        const {name,mobile,email,password} = req.body;
        const vendorSignUp=new VendorData({name,mobile,email,password});
        await vendorSignUp.save();
        res.status(200).send(vendorSignUp);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to create vendor may be email already exist in our database"});
    }
};

//fetch all vendors
exports.fetchAll=async(req,res)=>{
    try {
        const listOfVendors=await VendorData.find({});
        res.status(200).send(listOfVendors);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to fetch all vendors"});
    }
};

//fetch vendor by entering username and password
exports.fetchByEmailAndPassword=async(req,res)=>{
    try {
        const email=req.params.email;
        const password=req.params.password;
        console.log(email);
        console.log(password);
        const rating=await Rating.findOne({email});
        const vendor=await VendorData.findOne({email:email});
        console.log(vendor.email);
        console.log(vendor.password);
        //logic to average all rating and then set to vendor.rating.
        if (vendor.email==email && vendor.password==password) {
            res.status(200).send(vendor);
        }else{
            res.status(404).send({message:"incorect username and password"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"unable to fech vendor by id"});
    }
};

//add Vendor Service
exports.addVendorServiceDetails=async(req,res)=>{
    try {
        // const {servicename,category,servicedetails,serviceprice,serviceaddress}=req.body;
        const b=req.body;
        const venderemail=req.params.venderemail;
        console.log(b);
        const getvenderbyemail=await VendorData.findOne({email:venderemail});
        // const addservice=new VendorServiceDetails({servicename,category,servicedetails,serviceprice,serviceaddress});
        const addservice=new VendorServiceDetails(b);
        addservice.vendoremail=venderemail;
        console.log("++++++++++++++++++++++++++++++++++");
        console.log(addservice);
        getvenderbyemail.vendorservices.push(addservice);
        await getvenderbyemail.save();
        res.status(200).send(getvenderbyemail);
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"not added vendor service in list"});
    }
};

//view all live services of vendor
exports.viewAllServices=async(req,res)=>{
    try {
        const email=req.params.email;
        const servicebyemail=await VendorData.findOne({email});
        const listofactiveservices=servicebyemail.vendorservices;
        res.status(200).send(listofactiveservices);
    } catch (error) {
        console.log(error);
        res.status(500).send("list not fetched");
    }
};