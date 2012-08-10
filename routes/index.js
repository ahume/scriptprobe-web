var scriptprobe = require('scriptprobe');


var remoteServer = 'scriptprobe-server-web.herokuapp.com';

exports.index = function(req, res) {
  res.render('index', { title: 'ScriptProbe', results: null, url: null, debug: null });
};

exports.runProbeHtml = function(req, res) {
	scriptprobe.testUrl(req.body.url, remoteServer, function(results) {
		res.render('index', { title: 'ScriptProbe results', 
			results: results, url: req.body.url,
			debug: JSON.stringify(results) });
	});
}

exports.runProbeJs = function(req, res) {
	scriptprobe.testUrl(req.query.url, remoteServer, function(results) {
		res.render('json', { json: JSON.stringify(results) });
	});
}