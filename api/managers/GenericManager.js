/**
 * GenericManager
 *
 * @description :: Server-side logic for GenericManager
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var BaseManager = require("./BaseManager");

var GenericManager = function() {};
GenericManager.prototype = Object.create(BaseManager.BaseManager.prototype);
GenericManager.prototype.constructor = GenericManager;

GenericManager.prototype.getAll = function(callback) {
	// var model = sails.models[model.identity];
	// var mode = global[model.globalId];
	// model.find({})...
	var model = this.inputModel();
	console.log("Get all ", model.globalId);
	model.find({}).exec(function(err, results) {
		if (err) {
			callback(err);
		} else {
			callback(null, results);
		}
	});
};

GenericManager.prototype.getOne = function(idValue, callback) {
	var model = this.inputModel();
	var idFieldName = this.inputIdFieldName();
	console.log("Get a ", model.globalId);
	var conditionalObj = {};
	conditionalObj[idFieldName] = idValue;
	model.findOne(conditionalObj).exec(function(err, result) {
		if (err) {
			callback(err);
		} else {
			if (result === undefined) {
				var err = {};
				err.status = 400;
				callback(err);
			} else {
				callback(null, result);
			}
		}
	});
};

GenericManager.prototype.create = function(data, callback) {
	var model = this.inputModel();
	console.log("Create a ", model.globalId);
	model.create(data).exec(function(err, result) {
		if (err) {
			callback(err);
		} else {
			callback(null, result);
		}
	});
};

GenericManager.prototype.update = function(data, idValue, callback) {
	var model = this.inputModel();
	var idFieldName = this.inputIdFieldName();
	console.log("Update a ", model.globalId);
	var conditionalObj = {};
	conditionalObj[idFieldName] = idValue;
	model.update(conditionalObj, data).exec(function(err, result) {
		if (err) {
			callback(err);
		} else {
			callback(null, result);
		}
	});
};

GenericManager.prototype.delete = function(idValue, callback) {
	var model = this.inputModel();
	var idFieldName = this.inputIdFieldName();
	console.log("Delete a ", model.globalId);
	var conditionalObj = {};
	conditionalObj[idFieldName] = idValue;
	model.destroy(conditionalObj).exec(function(err) {
		if (err) {
			callback(err);
		} else {
			callback(null);
		}
	});
};

GenericManager.prototype.inputIdFieldName = function() {
	return "id";
};

GenericManager.prototype.inputModel = function() {
	return Model;
};

module.exports = {
	GenericManager: GenericManager
};