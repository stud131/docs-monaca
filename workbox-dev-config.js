module.exports = {
	maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
	globDirectory: 'themes/monaca/static/',
	globPatterns: [
	  '**/css/bootstrap.min.css',
	  '**/css/font-awesome.min.css',
	  '**/css/nucleus.css',
	  '**/theme-original/style.css',
	  '**/js/docsearch.min.js',
	  '**/js/monaca.js',
	  '**/js/zepto.min.js'
	],
	swDest: 'themes/monaca/static/sw.js',
	swSrc: 'themes/monaca/static/sw-src.js'
};