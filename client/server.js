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

		var Sales = function(req, res){
			res.render('public/Sales', sd._ro(req, res, {}));
		}
		app.get('/Sales/', Sales);
		app.get('/Sales/en', sd._set_en, Sales);
		app.get('/Sales/ua', sd._set_ua, Sales);
		app.get('/Sales/ru', sd._set_ru, Sales);

		var Map = function(req, res){
			res.render('public/Map', sd._ro(req, res, {}));
		}
		app.get('/Map/', Map);
		app.get('/Map/en', sd._set_en, Map);
		app.get('/Map/ua', sd._set_ua, Map);
		app.get('/Map/ru', sd._set_ru, Map);
	/*
	*	End of
	*/
};