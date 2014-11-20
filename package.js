var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:core',
	summary: 'Koretech Core Package',
	version: '0.1.0',
	git: 'https://github.com/koretech/meteor-krt-core.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@0.9.4');

	api.use([
		'underscore',
		'mquandalle:bower@0.1.11'
	], both);

	api.addFiles([
		'smart.json',
		'namespaces.js',
		'lib/util.js'
	], ['client', 'server']);

	api.export('KRT', ['client', 'server']);

});
