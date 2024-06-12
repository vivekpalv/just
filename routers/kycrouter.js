const router = require('express').Router();

const {doKyc,fetchAllKyc,uploadDocument,fetchKycByEmail} = require('../controller/kyccontroller');

router.post('/doKyc', doKyc);
router.get('/fetchAllKyc', fetchAllKyc);
router.put('/uploadDocument/:email', uploadDocument);
router.get('/fetchKycByEmail/:email', fetchKycByEmail);

module.exports = router;