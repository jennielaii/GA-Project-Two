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

//functional route to add a new item associated with the user 
userRoutes.post('/:id/todo/new', userController.addToDo);

//functional route to edit an item 
userRoutes.put('/item/:id', userController.editItem);

//functional route to delete an item 
userRoutes.delete('/:userId/item/:itemId', userController.deleteItem);

//View the page of the user profile
userRoutes.get('/:userId/profile', userController.viewProfile);




//PRESENTATIONAL ROUTES----------------------------------

//Shows the user register page
userRoutes.get('/userRegisterPage', userController.showRegisterUser);

//Shows the user login page
userRoutes.get('/userLoginPage', userController.showLoginUser);

//Shows the edit item page 
userRoutes.get('/:userId/item/:itemId', userController.showEditItemPage)

//Views user home based on id
userRoutes.get('/:id/home', userController.viewHome); 


module.exports = userRoutes