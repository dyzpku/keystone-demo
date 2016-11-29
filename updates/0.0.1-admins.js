var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Yizhou',
			last: 'Duan'
		},
		email: 'dyzpku@gmail.com',
		password: 'dyz',
		isAdmin: true,
		isProtected: true,
	})
	.save(done);
};
