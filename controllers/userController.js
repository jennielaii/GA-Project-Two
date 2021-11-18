const models = require('../models')
const userController = {}

userController.registerUser = async (req, res) => {
    try{
        const newUser = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }) 
        res.json({newUser})
    }catch(err){
    res.json({err})
    }
}

userController.loginUser = async (req, res) => {
    try{ 
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })

        if (user.password === req.body.password) {
            res.redirect('/user/:id/home')
        }else {
            res.status(401)
            res.json({err: 'login failed'})
        }
    }catch (err) {
        res.json({err})
    }
}

userController.showRegisterUser = async (req,res) => {
    try{
         res.render('register.ejs');
    }catch (err) {
        res.json({err})
    }
}

userController.showLoginUser = async (req,res) => {
    try{
        res.render('login.ejs')
    }catch(err) {
        res.json({err})
    }
}

userController.logoutUser = async (req, res) => {
    try{
        req.logout();
        req.flash('success_msg', 'You are logged out');
        res.redirect('/user/login')
    }catch (err) {
        res.json({err});
    }
}

userController.addUserChecklist = async (req,res) => {
    try{
        const newItem = await models.itemList.create({
            description: req.body.description
        })
        const user = models.user.findOne({
            where: {
                id: req.params.id
            }
        })
        user.addItemLists(newItem);
        res.json({newItem});
    }catch(err) {

    }
}

userController.editItem = async (req,res) => {
    try{ 
        const item = await models.itemList.findOne({
            where: {
                id: req.param.id
            }
        })
        const updatedItem = await item.update({
            name: req.body.description
        })
        res.json(updatedItem);
    }catch(err) {
        res.json({err});
    }
}

userController.deleteItem = async (req,res) => {
    try{ 
        const item = await models.listItem.findOne({
            where:{
                id: req.params.id
            }
        })
        const deleteItem = await item.destroy();
        res.json(deleteItem);
    }catch(err) {
        res.json({err});
    }
}

userController.viewProfile = async (req,res) => {
    try{
        const profile = await models.user.findOne({
            where:{
                id: req.params.id
            }
        })
        res.json(profile);
    }catch(err) {
        res.json({err})
    }
}



module.exports = userController