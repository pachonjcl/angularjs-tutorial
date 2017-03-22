'use strict';

var app = angular.module('tutorialApp', 
  [
    'ui.bootstrap',
    'ui.router',
    'hljs'
  ]
);

app.config(function($urlServiceProvider, hljsServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'tutoriales' });
  hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '    '
  });
});