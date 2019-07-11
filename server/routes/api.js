const express = require('express');
const app = express();
const nameController = require('../controllers/NameController'); 
app.get('/',nameController.route1);
app.post('/savename',nameController.route2);
module.exports = app;