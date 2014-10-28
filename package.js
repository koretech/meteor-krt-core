Package.describe({
	name: 'krt:core',
	summary: 'Koretech Core Package',
	version: '0.1.0',
	git: 'https://github.com/koretech/meteor-krt-core.git'
});

Package.onUse(function(api){

	api.addFiles([
		'namespaces.js'
	], ['client', 'server']);

	api.export('KRT', ['client', 'server']);

});
