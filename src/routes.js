const routes = require('express').Router();
const mailController = require('./app/controllers/MailController');

routes.get('/', (req, res) => {
  res.json({ msg: 'Mail Service OK' });
});

routes.post('/mail', mailController.store);

module.exports = routes;
