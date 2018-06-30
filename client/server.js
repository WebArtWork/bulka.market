module.exports = function(app, sd) {
	/*
	*	Local
	*	[add local below this line]
	*/
		var Explore = function(req, res){
			res.render('public/Explore', sd._ro(req, res, {}));
		}
		app.get('/', Explore);
		app.get('/en', sd._set_en, Explore);
		app.get('/ua', sd._set_ua, Explore);
		app.get('/ru', sd._set_ru, Explore);
	/*
	*	End of
	*/
};