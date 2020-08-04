'use strict';

const babel = require('rollup-plugin-babel');

module.exports = {
	input: 'index.js',
	output: [
		{
			file: 'index.cjs.js',
			format: 'cjs',
			sourcemap: true
		},
		{
			file: 'index.esm.js',
			format: 'esm',
			sourcemap: true
		},
		{
			file: 'index.umd.js',
			format: 'umd',
			sourcemap: true,
			name: 'throttle-debounce.umd.js'
		}
	],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};
