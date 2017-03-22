'use strict';

var app = angular.module('tutorialApp', 
  [
    'ui.bootstrap',
    'ui.router'
  ]
);

app.config(function($urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'tutoriales' });
});