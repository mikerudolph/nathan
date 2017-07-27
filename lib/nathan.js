/**
 * Module Dependencies
 */

var EventEmitter = require('events').EventEmitter

/**
 * Expose Root
 */

exports = module.exports = new Nathan()

/**
 * Expose
 */

exports.Nathan = Nathan

/**
 * Initialize a new 'Nathan'.
 */

function Nathan() {

}

/**
 * Inherit from `EventEmitter.prototype`.
 */

Nathan.prototype.__proto__ = EventEmitter.prototype

/**
 * Perform a query
 */

Nathan.prototype.query = function(query, options) {

    // parse query for validity
    // parse options for validity
    // spawn brain query
    // parse results
    // return results

}
