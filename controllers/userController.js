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
            res.json({user})
        }else {
            res.status(401)
            res.json({err: 'login failed'})
        }
    }catch (err) {
        res.json({err})
    }
}

userController.logoutUser = async (req, res) => {
    try{

    }catch (err) {
        res.json({err})
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
        user.addItemLists(newItem)
        res.json({newItem}) 
    }catch(err) {

    }
}

module.exports = userController