// Node script for creating HTML files from React components

var fs = require('fs');
var React = require('react');
var babel = require('babel-core');
var glob = require('glob');
var mkdirp = require('mkdirp');
var pkg = require('./package.json');
var templatesDir = pkg.templatesDir;
var files = require('./statics.json').files;

var compileJSX = function(file) {
	var jsxFileContent = fs.readFileSync(file).toString();
	var result = babel.transform(jsxFileContent);
	fs.writeFileSync(file.replace('.jsx', '.js'), result.code);
};

var createHTML = function(filename, filePath) {
	var reactComponent = require(templatesDir + '/' + filename);

	var markup = React.renderToStaticMarkup(React.createElement(reactComponent));
	fs.writeFileSync(filePath + '/' + filename + '.html', markup);
};

var deleteFile = function(filename) {
	fs.unlinkSync(filename);
};

var createDir = function(path) {
	var willCreate = !fs.existsSync(path);
	if (willCreate) {
		mkdirp.sync(path);
	}
};

// Create JS temporary files from JSX
glob.sync(templatesDir + '/*.jsx').map(compileJSX);

// Create folders
files.map(function(item) {
	createDir(item.path);
});

// Get the React component(s) to render to HTML
files.map(function(item) {
	createHTML(item.file, item.path);
});

// Delete temporary JS files
glob.sync(templatesDir + '/*.js').map(deleteFile);

console.info('React components successfully rendered to HTML');
