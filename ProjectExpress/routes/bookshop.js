const express = require('express');
//Integraremos todos los métodos http
const router = express.Router();
const bookshopController = require('../controllers/bookshopController');

router.post('/bookshop', bookshopController.createBookshop)
router.get('/bookshop', bookshopController.consultBookshop)
router.get('/bookshop/:id', bookshopController.consultsBookshop);
router.put('/bookshop/:id', bookshopController.updateBookshop);
router.delete('/bookshop/:id', bookshopController.deleteBookshop);



//Tema del router
module.exports = router;