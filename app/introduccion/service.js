'use strict';

app.service('IntroduccionService', function() {
  this.getEjemplos = function(){
    return [{
      'nombre': 'Ejemplo1',
      'comentario': 'app/introduccion/comentarios/comentario1.html',
      'url': 'app/introduccion/ejemplos/ejemplo1.html'
    }, {
      'nombre': 'Ejemplo2',
      'comentario': 'app/introduccion/comentarios/comentario2.html',
      'url': 'app/introduccion/ejemplos/ejemplo2.html'
    }, {
      'nombre': 'Ejemplo3',
      'comentario': 'app/introduccion/comentarios/comentario3.html',
      'url': 'app/introduccion/ejemplos/ejemplo3.html'
    }];
  }
});