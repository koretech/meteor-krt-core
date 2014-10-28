Package.describe({
	summary: "Koretech Core Package",
	version: '0.1.0'
});

Package.onUse(function(api){

	api.addFiles([
		'namespaces.js'
	], ['client', 'server']);

	api.export('KT', ['client', 'server']);

});
