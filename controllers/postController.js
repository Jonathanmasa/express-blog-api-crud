// importo il file posts.js della cartella data
const posts = require('../data/posts');

// logica index
function index(req, res) {
    res.json(posts);
};

// logica show
function show(req, res) {
    // recupero l'ID dell'URL e lo trasformo in numero
    const id = parseInt(req.params.id);
    // cerco il post tramide ID
    const post = posts.find(post => post.id === id);
    // restituiscoin formato json
    res.json(post);
};

// logica store
function store(req, res) {
    res.send('Creazione nuovo post');
};

// logica update
function update(req, res) {
    res.send('Modifica integrale del post' + req.params.id);
};

// logica modify
function modify(req, res) {
    res.send('Modifica parziale del post' + req.params.id);
    };

// logica destroy
function destroy(req, res) {
    // recupero l'ID dell'URL e lo trasformo in numero
    const id = parseInt(req.params.id);
    // cerco il post tramide ID
    const post = posts.find(post => post.id === id);
    // controllo
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // rimuovo il post dall'array
    post.splice(post.indexOf(post), 2);

    // restituisco lo status corretto
    res.sendStatus(204)
};

// esportiamo tutto
module.exports = { index, show, store, update, destroy, modify};