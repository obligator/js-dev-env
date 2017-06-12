// This file is not transpiled, so must use ES5 and CommonJS.

// Register babel to transpile before our tests run.
require('babel-register')();

/* Disable webpack features that Mocha doesn't understand;
  When a css file is required, treat it like an empty function */
require.extensions['.css'] = function() {};
