/**
 * genricManager
 *
 * @description :: Server-side logic for get, getAll, Delete, Update, Create
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */

Q = require("q");

module.exports = {
    getAll: function(model, callback) {
        console.log("Get all");
        model.find({}).exec(function(err, results) {
            if (err) {
                callback(err);
            } else {
                callback(results);
            }
        });

        // var deferred = Q.defer();
        // model.find({}).exec(function(err, results) {
        //     if (err) {
        //         deferred.resolve(err);
        //     } else {
        //         deferred.resolve(results);
        //     }
        // });
        // return deferred.promise;
    },
    getOne: function(id, model, callback) {
        console.log("Get by id");
        model.findOne({
            id: id
        }).exec(function(err, result) {
            if (err) {
                callback(err);
            } else {
                callback(result);
            }
        });
    }
};