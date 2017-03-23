'use strict';

app.service('IntroduccionService', function() {
  this.getEjemplos = function(){
    return [{
      'nombre': 'Ejemplo1',
      'url': 'app/introduccion/ejemplos/ejemplo1.html'
    }, {
      'nombre': 'Ejemplo2',
      'url': 'app/introduccion/ejemplos/ejemplo2.html'
    }];
  }
});