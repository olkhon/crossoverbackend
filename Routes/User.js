const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


// route with id goes first!!!
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);


router.get('/', UserController.getUser);

router.delete('/deleteuser/:id', UserController.deleteUser)
router.post('/newuser', UserController.newUser)

module.exports = router;