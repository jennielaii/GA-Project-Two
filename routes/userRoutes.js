const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

//FUNCTIONAL ROUTES

userRoutes.post('/register', userController.registerUser); //function route to make new user
userRoutes.post('/login', userController.loginUser);//functional route to login a user
userRoutes.get('/logout', userController.logoutUser);//functional route to logout a user
userRoutes.get('/:userId/item', userController.getAllUserItems)//Adding a new item associated with a user by the id
userRoutes.post('/:id/todo/new', userController.addToDo);//functional route to adda new item associated with the user 
userRoutes.put('/:userId/todo/edit/itemId', userController.editItem);//
userRoutes.delete('/todo/delete/:itemId', userController.deleteItem);//
userRoutes.get('/:userId/profile', userController.viewProfile);//view the page of the usaer profile
userRoutes.get('/:id/home', userController.viewHome); //views user profile based on id






//PRESENTATIONAL ROUTES
userRoutes.get('/userRegisterPage', userController.showRegisterUser);
userRoutes.get('/userLoginPage', userController.showLoginUser);

module.exports = userRoutes