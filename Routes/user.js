const { Router } = require('express');
const express = require('express');
const UserController = require('../Controller/user');
const router = express.Router();
router.post('/add',UserController.register);
module.exports = router