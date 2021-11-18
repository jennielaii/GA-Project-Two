const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');


userRoutes.post('/register', userController.registerUser); //function route to make new user
// userRoutes.post('/user/register', userController.showRegisterUser);
// userRoutes.post('/user/login', userController.showLoginUser);
userRoutes.post('/login', userController.loginUser);//functional route to login a user
userRoutes.get('/logout', userController.logoutUser);//functional route to logout a user
userRoutes.post('/:id/todo/new', userController.addToDo);//functional route to adda new item associated with the user 
userRoutes.put('/:userId/todo/edit/itemId', userController.editItem);
userRoutes.delete('/todo/delete/:id', userController.deleteItem);
userRoutes.get('/:id/profile', userController.viewProfile);
// userRoutes.get('/user/:id/home', userController.viewHome);

module.exports = userRoutes