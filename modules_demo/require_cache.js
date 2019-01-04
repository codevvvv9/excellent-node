/**
 * this is after require module_demo.js
 */
{
	[Function: require]
	resolve: {
			[Function: resolve] paths: [Function: paths]
		},
		main:
		Module {
			id: '.',
			exports: {},
			parent: null,
			filename: '/home/wsl/Documents/node-playground/modules_demo/module_demo_2.js',
			loaded: false,
			children: [
				[Module]
			],
			paths: ['/home/wsl/Documents/node-playground/modules_demo/node_modules',
				'/home/wsl/Documents/node-playground/node_modules',
				'/home/wsl/Documents/node_modules',
				'/home/wsl/node_modules',
				'/home/node_modules',
				'/node_modules'
			]
		},
		extensions: {
			'.js': [Function],
			'.json': [Function],
			'.node': [Function]
		},
		cache: {
			'/home/wsl/Documents/node-playground/modules_demo/module_demo_2.js': Module {
				id: '.',
				exports: {},
				parent: null,
				filename: '/home/wsl/Documents/node-playground/modules_demo/module_demo_2.js',
				loaded: false,
				children: [Array],
				paths: [Array]
			},
			'/home/wsl/Documents/node-playground/modules_demo/module_demo.js': Module {
				id: '/home/wsl/Documents/node-playground/modules_demo/module_demo.js',
				exports: [Function],
				parent: [Module],
				filename: '/home/wsl/Documents/node-playground/modules_demo/module_demo.js',
				loaded: true,
				children: [],
				paths: [Array]
			}
		}
}
/**
 * this is the cache which id is 
 * ‘/home/wsl/Documents/node-playground/modules_demo/module_demo.js‘
 * after require module_demo.js 
 */
Module {
	id: '/home/wsl/Documents/node-playground/modules_demo/module_demo.js',
	exports: [Function],
	parent: Module {
		id: '.',
		exports: {},
		parent: null,
		filename: '/home/wsl/Documents/node-playground/modules_demo/module_demo_2.js',
		loaded: false,
		children: [
			[Circular]
		],
		paths: ['/home/wsl/Documents/node-playground/modules_demo/node_modules',
			'/home/wsl/Documents/node-playground/node_modules',
			'/home/wsl/Documents/node_modules',
			'/home/wsl/node_modules',
			'/home/node_modules',
			'/node_modules'
		]
	},
	filename: '/home/wsl/Documents/node-playground/modules_demo/module_demo.js',
	loaded: true,
	children: [],
	paths: ['/home/wsl/Documents/node-playground/modules_demo/node_modules',
		'/home/wsl/Documents/node-playground/node_modules',
		'/home/wsl/Documents/node_modules',
		'/home/wsl/node_modules',
		'/home/node_modules',
		'/node_modules'
	]
}