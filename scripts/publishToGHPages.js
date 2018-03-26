// In order for our single page application to be accessible
// via routes other than the / route on github pages, I simply
// copy the index.html file renamed to the different pages in
// the app

console.log('Creating html files for pages')

const fs = require('fs')

const pages = [
	'characters',
	'comics',
	'creators',
	'events',
	'series'
]

pages.forEach(page => fs.copyFileSync('./build/index.html', `./build/${page}.html`))

console.log('Publishing to gh-pages')

require('gh-pages').publish('build');