var author = require('../controllers/names.js');

module.exports = function(app){
	app.get('/', author.index);
	app.post('/', author.create);
	app.get('/:id', author.show);
	app.put('/:id', author.update);
	app.delete('/:id', author.destroy);
}