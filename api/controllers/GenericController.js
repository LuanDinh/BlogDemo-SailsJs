/**
 * GenericController
 *
 * @description :: Server-side logic for GenericController
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var GenericManager = require("../managers/GenericManager");
var genericManager = new GenericManager.GenericManager();

var BaseController = require("./BaseController");

var GenericController = function() {};
GenericController.prototype = Object.create(BaseController.BaseController.prototype);
GenericController.prototype.constructor = GenericController;

GenericController.prototype.getAll = function(req, res) {
	genericManager.getAll(function(err, response) {
		if (err) {
			res.ok();
		} else {
			res.ok(response);
		}
	});
};

GenericController.prototype.getOne = function(req, res) {
	var idValue = req.param("id");
	genericManager.getOne(idValue, function(err, response) {
		if (err) {
			res.notFound();
		} else {
			res.ok(response);
		}
	});
};

GenericController.prototype.create = function(req, res) {
	var data = req.body;
	genericManager.create(data, function(err, response) {
		if (err) {
			res.serverError(err);
		} else {
			res.ok(response);
		}
	});
};

GenericController.prototype.update = function(req, res) {
	var data = req.body;
	var idValue = req.param("id");
	genericManager.update(data, idValue, function(err, response) {
		if (err) {
			res.serverError(err);
		} else {
			res.ok(response);
		}
	});
};

GenericController.prototype.delete = function(req, res) {
	var idValue = req.param("id");
	genericManager.delete(idValue, function(err) {
		if (err) {
			res.notFound();
		} else {
			res.ok();
		}
	});
};

module.exports = {
	GenericController: GenericController
};