/**
 * querySqlService
 *
 * @description :: Server-side logic for query DB by raw SQL statement
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */

module.exports = {

    /* Query BD by raw SQL */
    query: function(model, sql, callback) {
        model.query(sql, function(err, results) {
            if (err) {
                console.log("Error on querying by raw sql statement");
                callback(err);
            } else {
                callback(results);
            }
        });
    }
};