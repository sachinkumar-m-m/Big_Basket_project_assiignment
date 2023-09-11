const route = require('express').Router()
const authController = require('../controller/authController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/AdminAuth')

route.post(`/register`, authController.register)
route.post(`/login`, authController.login)
route.get(`/logout`, authController.logout)
route.get(`/refreshToken`, authController.refreshToken)
route.get(`/userinfo`, auth, authController.getUserInfo)
route.get(`/allUsers`, auth, authAdmin, authController.getAllUsers)

route.patch(`/resetPassword`, authController.resetPassword)

route.patch(`/addToCart`, auth, authController.addToCart)
route.get(`/orders`, auth,  authController.getOrders)

route.patch(`/updateProfile/:id`, auth, authController.profileUpdate)



module.exports = route