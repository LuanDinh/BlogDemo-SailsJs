/**
 * ClientController
 *
 * @description :: Server-side logic for ClientController
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var ClientManager = require("../managers/ClientManager");
var clientManager = new ClientManager.ClientManager();

var GenericController = require("./GenericController");

var ClientController = function() {};
ClientController.prototype = Object.create(GenericController.GenericController.prototype);
ClientController.prototype.constructor = ClientController;

ClientController.prototype.getAll = function(req, res) {
	clientManager.getAll(function(err, response) {
		if (err) {
			res.ok();
		} else {
			res.ok(response);
		}
	});
};

ClientController.prototype.getOne = function(req, res) {
	var idValue = req.param("id");
	clientManager.getOne(idValue, function(err, response) {
		if (err) {
			res.notFound();
		} else {
			res.ok(response);
		}
	});
};

ClientController.prototype.create = function(req, res) {
	var data = req.body;
	clientManager.create(data, function(err, response) {
		if (err) {
			res.serverError(err);
		} else {
			res.ok(response);
		}
	});
};

ClientController.prototype.update = function(req, res) {
	var data = req.body;
	var idValue = req.param("id");
	clientManager.update(data, idValue, function(err, response) {
		if (err) {
			res.serverError(err);
		} else {
			res.ok(response);
		}
	});
};

ClientController.prototype.delete = function(req, res) {
	var idValue = req.param("id");
	clientManager.delete(idValue, function(err) {
		if (err) {
			res.notFound();
		} else {
			res.ok();
		}
	});
};

module.exports = ClientController.prototype;