// Middleware de autenticação
function ensureAuthenticated(req, res, next) {
	if (req.session && req.session.user) {
		// Evita cache das páginas protegidas
		res.set('Cache-Control', 'no-store');
		return next();
	}
	res.redirect('/login');
}

module.exports = { ensureAuthenticated };
