const userController = require('../controllers/userController')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/register', userController.registerUser);
userRoutes.post('/login', userController.loginUser);
userRoutes.get('/logout', userController.logoutUser);

//-----were gonna user later
// userRoutes.get('/', userController.);
// userRoutes.post('/', userController.);
// userRoutes.put('/', userController.);
// userRoutes.delete('/', userController.);
// userRoutes.get('/', userController.);


module.exports = userRoutes