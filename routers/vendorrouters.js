const router = require('express').Router();
const { signUpVendor,fetchAll,fetchByEmailAndPassword,addVendorServiceDetails,viewAllServices } = require('../controller/vendorcontroller');

router.post('/createVendor', signUpVendor);
router.get('/fetchAll', fetchAll);
router.get('/fetch/:email/:password', fetchByEmailAndPassword);
router.put('/addservice/:venderemail', addVendorServiceDetails);
router.get('/fetchAll/:email', viewAllServices);

module.exports = router;