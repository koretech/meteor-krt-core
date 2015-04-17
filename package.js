var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:core',
	summary: 'Koretech Core Package',
	version: '0.1.3',
	git: 'https://github.com/koretech/meteor-krt-core.git',
	documentation: null
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.0');

	api.use([
		'underscore',
		'mquandalle:bower@1.3.12_3'
	], both);

	api.addFiles([
		'bower.json',
		'namespaces.js',
		'lib/util.js'
	], both);

	api.export('KRT', ['client', 'server']);

	Npm.depends({
		'deep-diff': '0.3.0'
	});

});
