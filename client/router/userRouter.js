const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/registeruser', userController.registerUser);

router.post('/getalluser', userController.getallUser);

router.get('/getuser/:id', userController.getuserByid);

router.put('/updateuser/:id', userController.updateuserByid);

router.delete('/deleteuser/:id', userController.deleteuserByid);

module.exports = router;
