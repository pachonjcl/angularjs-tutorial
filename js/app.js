'use strict';

var app = angular.module('tutorialApp', 
  [
    'ui.bootstrap',
    'ui.router'
  ]
);

app.config(function($stateProvider, $urlServiceProvider) {
  $urlServiceProvider.rules.otherwise({ state: 'principal' });

  $stateProvider.state('principal', {
    url: '/principal',
    component: 'principal',
    resolve: {
      tutoriales: function(TutorialesService) {
        return TutorialesService.getAll();
      }
    }
  })
});

app.component('principal', {
  bindings: { tutoriales: '<' },
  controller: function() {
    console.log(':O');
  },
  template: `
    <header class="navbar navbar-fixed-top navbar-default">
      <div class="navbar-inner">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand" href="http://pachonjcl.github.io/">
              Angular Tutorial
            </a>
          </div>
          <div class="container">
            <div class="container">
              <div class="dropdown"></div>
              <div class="navbar-collapse">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="#tutoriales">Lista de Tutoriales</a>
                  </li>
                  <li>
                    <a href="https://github.com/pachonjcl/angular-js-tutorial"><i class="fa fa-lg fa-github"></i> GitHub</a>
                    <>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div>
      <header class="jumbotron" id="overview">
        <div class="container">
          <div class="col-sm-7">
            <h1>Angular Tutorial</h1>
          </div>
        </div>
        <div class="bs-docs-social">
          <div class="container">
            <ul class="bs-docs-social-buttons">
              <li>
                <a href="https://twitter.com/share" class="twitter-share-button" data-show-count="false" data-hashtags="pachonjcl">
                  Tweet
                </a>
                <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="container">
        <section id="tutoriales">
          <h1 class="page-header">Tutoriales</h1>
          <p class="text-muted">
            <input class="form-control" autofocus="autofocus" style="max-width: 15em; display: inline-block;" ng-model="textoBuscador" placeholder="Buscar...">
              {{(tutoriales| filter:textoBuscador).length}} tutoriales encontrados
          </p>
          <div class="list-group">
            <div ng-repeat="tutorial in $ctrl.tutoriales | filter:textoBuscador" href="{{tutorial.src}}" class="list-group-item"
              <p class="pull-right">
                <a href="{{tutorial.home}}" title="Home / Demo page" ng-if="tutorial.home">
                  <i class="fa fa-3x fa-home"></i>
                </a>
                <a href="{{tutorial.src}}" title="Code">
                  <i class="fa fa-3x fa-github"></i>
                </a>
              </p>
              <h4 class="list-group-item-heading">
                {{tutorial.titulo}}
              </h4>
              <p class="list-group-item-text text-muted">
                {{tutorial.descripcion}}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div> 
`,
})

app.service('TutorialesService', function() {
  this.getAll = function() {
    return [
      {
        titulo: 'Introduccion',
        descripcion: 'Introduccion a los Frameworks MVC, NodeJS, AngularJS, Doble enlace de datos, SPA, Componentes web, pruebas.',
        src: '',
        home: 'https://htmlpreview.github.io/?https://github.com/pachonjcl/angular-js-tutorial/master/index.html'
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
        titulo: 'Depuracion',
        descripcion: 'Herramienta de desarrollador, puntos de quiebre, inspeccion de elementos',
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
  };
});

// app.controller('TutorialCtrl', ['$scope', function($scope) {
  // $scope.tutoriales = ;
// }]);

// app.component('users', {
//   bindings: { users: '<' },
//   controller: function() {
//     this.clickHandler = function() {
//       alert('something');
//     }
//   },
//   template: `
//     <h1>Users</h1>
    
//     <button ng-click="$ctrl.clickHandler()">Do something</button>
    
//     <ul>
//       <li ng-repeat="user in $ctrl.users" ui-sref-active="userselected">
//         <a ui-sref="userlist.detail({ userId: user.id })" 
//             ng-disabled="!user.active"
//             ng-class="{ deactivated: !user.active }">
//           {{ user.name }}
//         </a>
        
//         <button ng-click="user.active = !user.active">
//           {{ user.active ? "Deactivate" : "Activate" }}
//         </button>
//       </li>
//     </ul>
    
//     <div ui-view></div>
// `,
// })

// app.component('userDetail', {
//   bindings: { user: '<' },
//   template: `
//     <h3>User {{ $ctrl.user.id }}</h3>
    
//     <h2>{{ $ctrl.user.name }} {{ !$ctrl.user.active ? "(Deactivated)" : "" }}</h2>
    
//     <table>
//       <tr><td>Address</td><td>{{ $ctrl.user.address }}</td></tr>
//       <tr><td>Phone</td><td>{{ $ctrl.user.phone }}</td></tr>
//       <tr><td>Email</td><td>{{ $ctrl.user.email }}</td></tr>
//       <tr><td>Company</td><td>{{ $ctrl.user.company }}</td></tr>
//       <tr><td>Age</td><td>{{ $ctrl.user.age }}</td></tr>
//     </table>
// `,
// })