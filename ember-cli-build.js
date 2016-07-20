/* global require, module */
var GlimmerApp = require('experimental-glimmer-app');
var sass = require('broccoli-sass-source-maps');
var assetRev = require('broccoli-asset-rev');
var sri = require('broccoli-sri-hash');
var merge = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new GlimmerApp(defaults, {});
  var tree = app.toTree();
  css = new sass([app.trees.styles], 'app.scss', 'app.css', {});
  tree = merge([tree, css]);
  if (process.env.EMBER_ENV === 'production') {
    tree = assetRev(tree, {
      extensions: ['js', 'css']
    });
    tree = sri(tree, {});
  }
  return tree;
};
