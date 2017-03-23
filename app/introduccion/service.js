'use strict';

app.service('IntroduccionService', function() {
  this.getEjemplos = function(){
    return [{
      'nombre': 'Ejemplo1',
      'comentario': `
      Este ejemplo muestra como inicializar una aplicacion con AngularJs 
      mediante la etiqueta ng-app
      `,
      'url': 'app/introduccion/ejemplos/ejemplo1.html'
    }, {
      'nombre': 'Ejemplo2',
      'comentario': `
      Este ejemplo muestra como inicializar una aplicacion con AngularJs 
      mediante la funcion angular.bootstrap
      `,
      'url': 'app/introduccion/ejemplos/ejemplo2.html'
    }, {
      'nombre': 'Ejemplo3',
      'comentario': `
      Este ejemplo muestra como inicializar una aplicacion con AngularJs 
      mediante la funcion angular.bootstrap esperando a que el DOM
      ya se encuentre cargado
      `,
      'url': 'app/introduccion/ejemplos/ejemplo3.html'
    }];
  }
});