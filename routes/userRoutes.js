const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

//FUNCTIONAL ROUTES----------------------------------

//function route to make new user
userRoutes.post('/register', userController.registerUser); 

//functional route to login a user
userRoutes.post('/login', userController.loginUser);

//functional route to logout a user
userRoutes.get('/logout', userController.logoutUser);

//functional route to adda new item associated with the user 
userRoutes.post('/:id/todo/new', userController.addToDo);

//
userRoutes.put('/:userId/todo/edit/itemId', userController.editItem);

//
userRoutes.delete('/todo/delete/:itemId', userController.deleteItem);

//View the page of the usaer profile
userRoutes.get('/:userId/profile', userController.viewProfile);



//PRESENTATIONAL ROUTES----------------------------------

//Shows the user register page
userRoutes.get('/userRegisterPage', userController.showRegisterUser);

//Shows the user login page
userRoutes.get('/userLoginPage', userController.showLoginUser);

//Views user home based on id
userRoutes.get('/:id/home', userController.viewHome); 

module.exports = userRoutes