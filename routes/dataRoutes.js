const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/trx', dataController.getAllDataTrx);
router.get('/clients', dataController.getAllDataClient);
router.get('/product', dataController.getAllDataProduct);

router.post('/createTrx', dataController.createDataTrx);

router.put('/updateTrx/:id', dataController.updateDataTrx);

router.delete('/deleteTrx/:id', dataController.deleteDataTrx);
module.exports = router;



//--------------------------------------

