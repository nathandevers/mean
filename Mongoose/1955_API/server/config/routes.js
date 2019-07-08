var names = require('../controllers/names.js');

module.exports = function(app){
    app.get('/', names.index);
    app.get('/new/:name', names.add);
    app.get('/remove/:name', names.remove);
    app.get('/:name', names.show);
}