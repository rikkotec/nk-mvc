/**
 * package: MMod-Node
 * sub-package: Models
 * version:  0.0.1
 * author:  Richard B. Winters <a href="mailto:rik@massivelymodified.com">rik At MassivelyModified</a>
 * copyright: 2013-2014 Massively Modified, Inc.
 * license: Apache, Version 2.0 <http://www.apache.org/licenses/LICENSE-2.0>
 */


// Deps;


/**
 * Maps the application's models
 *
 * @since 0.0.1
 */
module.exports = 
{
	company: require( "./context" ).company,
	user: require( "./context" ).user
};