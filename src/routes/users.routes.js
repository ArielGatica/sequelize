const app = require('express');
const apiRoutes = app.Router();
const { listUsers, createUser } = require('../controllers/users.controller');

apiRoutes.route('/').get(listUsers);
apiRoutes.route('/create').post(createUser);

module.exports = apiRoutes;