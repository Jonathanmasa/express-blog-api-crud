// importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();

// importo le funzioni del controller
const postController = require('../controllers/postController');

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', function (req, res) {
res.send('Modifica parziale del post' + req.params.id);
});

// destroy
router.delete('/:id', postController.destroy);

// esporto il modulo della route
module.exports = router;



