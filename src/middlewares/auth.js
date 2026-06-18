// Middleware de autenticação
function autenticacao(req, res, next) {
	if (req.session && req.session.user) {
		res.set('Cache-Control', 'no-store');
		return next();
	}
	res.redirect('/login');
}

module.exports = { autenticacao };
