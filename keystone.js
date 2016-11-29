var keystone = require('keystone');

keystone.init({

	'name': '盐·谈',
	'brand': '盐·谈',

	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/saltalk',
	'cloudinary config': 'cloudinary://638331826671982:deg3eORfXs7h96_P03h2yPi-HXo@dvrvxgzb7',

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'saltalk',

	'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,

	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
	chartbeat_property: keystone.get('chartbeat property'),
	chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'文章': ['posts', 'post-comments', 'post-categories'],
	'相册': 'galleries',
	// 'enquiries': 'enquiries',
	'用户': 'users'
	// 'field-tests': 'things'
});

keystone.start();
