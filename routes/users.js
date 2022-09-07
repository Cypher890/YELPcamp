const express = require('express')
const router = express.Router()
const passport = require('passport')
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')
const {  isAuth } = require('../middleware')

router.route('/register')
        .get(isAuth,users.renderRegister)
        .post( catchAsync(users.register))

router.route('/login')
      .get(isAuth,users.renderLogin)
      .post( passport.authenticate('local', { failureFlash: true, failureRedirect: '/login', keepSessionInfo: true }), users.login)

router.get('/logout', users.logout)

module.exports = router