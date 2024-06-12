const router = require('express').Router();

const {getAllVendors,getVendorByEmailAndPassword,updateKycStatus,updateKycSubmittedStatus} = require('../controller/admincontroller');

router.get('/fetchAllVendors', getAllVendors);
router.get('/fetchVendor/:email/:password', getVendorByEmailAndPassword);
router.put('/updateKycStatus/:email', updateKycStatus);
router.put('/updateKycSubmittedStatus/:email', updateKycSubmittedStatus);

module.exports = router;