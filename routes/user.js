const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router.get('/',userController.getPage);
Router.get('/login',userController.getLogin);
// Router.get('/verify-login',userController.verifyLogin);
Router.post('/create-user',userController.createUser);
module.exports = Router