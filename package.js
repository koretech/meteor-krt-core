var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:core',
	summary: 'Koretech Core Package',
	version: '0.1.4',
	git: 'https://github.com/koretech/meteor-krt-core.git',
	documentation: null
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.2');

	api.use([
		'underscore',
		'mquandalle:bower@1.5.2'
	], both);

	api.addFiles([
		'bower.json',
		'namespaces.js',
		'lib/util.js'
	], both);

	api.export('KRT', ['client', 'server']);

	Npm.depends({
		'deep-diff': '0.3.2'
	});

});
