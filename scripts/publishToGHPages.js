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