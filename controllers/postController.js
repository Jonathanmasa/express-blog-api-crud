// importo il file posts.js della cartella data
const posts = require('../data/posts');

// logica index
function index(req, res) {
    res.send('Lista dei post');
    };

// logica show
function show(req, res) {
    res.send('Dettagli dei post' + req.params.id);
    };

// logica store
function store(req, res) {
    res.send('Creazione nuovo post');
    };

// logica update
function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
    };

// logica destroy
function destroy(req, res) {
    res.send('Eliminazione del post' + req.params.id);
    };

// esportiamo tutto
module.exports = { index, show, store, update, destroy };