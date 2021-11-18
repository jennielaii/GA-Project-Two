const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');


userRoutes.post('/register', userController.registerUser);
userRoutes.post('/user/register', userController.showRegisterUser);
userRoutes.post('/user/login', userController.showLoginUser);
userRoutes.post('/login', userController.loginUser);
userRoutes.get('/logout', userController.logoutUser);
userRoutes.post('/:id/checklist/new', userController.addUserChecklist);
userRoutes.put('/:userId/checklist/edit/itemId', userController.editItem);
userRoutes.delete('/checklist/delete/:id', userController.deleteItem);
userRoutes.get('/:id/profile', userController.viewProfile);
// userRoutes.get('/user/:id/home', userController.viewHome);



module.exports = userRoutes