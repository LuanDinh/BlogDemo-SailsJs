/**
 * ClientManager
 *
 * @description :: Server-side logic for ClientManager
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var GenericManager = require("./GenericManager");

var ClientManager = function() {};
ClientManager.prototype = Object.create(GenericManager.GenericManager.prototype);
ClientManager.prototype.constructor = ClientManager;

ClientManager.prototype.inputIdFieldName = function() {
	return "lClientID";
};

ClientManager.prototype.inputModel = function() {
	return Client;
};

module.exports = {
	ClientManager: ClientManager
};