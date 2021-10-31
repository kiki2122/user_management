const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user);

route.get('/edit', services.edit);


route.post('/http://3.6.93.159:7883/machstatz/add_new_users',controller.create);
route.get('/http://3.6.93.159:7883/machstatz/get_all_users',controller.find);
route.put('/http://3.6.93.159:7883/machstatz/get_all_users/:id',controller.update);
route.delete('/http://3.6.93.159:7883/machstatz/delete_existing_user/:id',controller.delete);

module.exports = route