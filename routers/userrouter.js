const router = require('express').Router();

const {addAddressToUser,createUser,provideRating,fetchAllServiceDetails,fetchUserAddress,fetchServiceDetailsByCategory} = require('../controller/usercontroller');

router.post('/createUser', createUser);
router.put('/addAddress/:email', addAddressToUser);
router.put('/provideRating/:email', provideRating);
router.get('/fetchAllServiceDetails', fetchAllServiceDetails);
router.get('/fetchServiceDetailsByCategory/:category', fetchServiceDetailsByCategory);
router.get('/fetchUserAddress/:email', fetchUserAddress);

module.exports = router;
