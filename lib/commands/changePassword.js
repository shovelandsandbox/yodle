var api = require('../api.js');

module.exports = {
	name: 'changePassword',
	usage: 'password("new password")',
	description: 'changes your password',
	alias: [
		'changePassword',
		'set\spassword',
		'password'
	],
	execute: function(password) {
		return api.call({
	    	password: password
	  	}, '/users/me', 'PATCH');
	}
};