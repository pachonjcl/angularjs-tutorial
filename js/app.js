'use strict';

var app = angular.module('tutorialApp', 
  ['ui.bootstrap']
);

app.controller('TutorialCtrl', ['$scope', function($scope) {
  $scope.tutoriales = [
    {
      titulo: 'Introduccion',
      descripcion: 'Introduccion a los Frameworks MVC, NodeJS, AngularJS, Doble enlace de datos, SPA, Componentes web, pruebas.',
      src: '',
      home: ''
    },
    {
      titulo: 'Directivas Angular',
      descripcion: 'ng-app, ng-init, ng-model, ng-repeat, ng-if, ng-hide/show, ng-click, ng-change, etc.',
      src: '',
      home: ''
    },
    {
      titulo: 'Controladores & Scopes',
      descripcion: 'Controller, Controller as Syntax, this vs $scope',
      src: '',
      home: ''
    },
    {
      titulo: 'Angular Ciclo de Digestacion',
      descripcion: 'apply, watch, digest, dirty checking',
      src: '',
      home: ''
    },
    {
      titulo: 'Manipulacion del DOM',
      descripcion: 'Jqlite, selectors, effectos, eventos',
      src: '',
      home: ''
    },
    {
      titulo: 'Injeccion de dependencias',
      descripcion: 'Constantes, Valores, Servicios, Factories, Providers, etc',
      src: '',
      home: ''
    },
    {
      titulo: 'Programacion asincrona',
      descripcion: 'Servicios REST, HTTP, JSON, Promises',
      src: '',
      home: ''
    },
    {
      titulo: 'Directivas Personalizadas',
      descripcion: 'Directivas en Elementos, Atributos, Comentarios y Clases',
      src: '',
      home: ''
    },
    {
      titulo: 'Ruteo',
      descripcion: 'ng-route, ui.router',
      src: '',
      home: ''
    },
    {
      titulo: 'Modulos',
      descripcion: 'Librerias comunes para comenzar con angular.',
      src: '',
      home: ''
    },
    {
      titulo: 'Pruebas',
      descripcion: 'Test con Karma y Jasmine',
      src: '',
      home: ''
    }
  ];
}]);