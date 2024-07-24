const express = require('express');
const contactRouter = express.Router();
const contactForm = require('../controllers/contact-controller');


contactRouter.route('/contact').post(contactForm);

module.exports = contactRouter;