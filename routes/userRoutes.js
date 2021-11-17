const userController = require('../controllers/userControllers')

const express = require('express')
const userRoutes = express.Router()

userRoutes.post('/register', userController.registerUser);
userRoutes.post('/login', userController.loginUser);
userRoutes.get('/logout', userController.logoutUser);
// userRoutes.get('/', userController.);
// userRoutes.post('/', userController.);
// userRoutes.put('/', userController.);
// userRoutes.delete('/', userController.);
// userRoutes.get('/', userController.);


modules.exports = userRoutes